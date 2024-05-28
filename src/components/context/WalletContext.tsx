import React, {
  createContext,
  useState,
  useEffect,
  FC,
  useContext,
  ReactNode,
} from "react";
import { PublicKey } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
};

interface WalletContextType {
  walletAvail: boolean;
  connected: boolean;
  address: String;
  pubKey: PublicKey | null;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: FC<WalletProviderProps> = ({ children }) => {
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);
  const [address, setAddress] = useState(String);
  console.log(address);

  console.log(pubKey);

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      if (solWindow?.solana?.isPhantom) {
        setProvider(solWindow.solana);
        setWalletAvail(true);
        // Attempt an eager connection
        solWindow.solana.connect({ onlyIfTrusted: true });
      }
    }
  }, []);

  useEffect(() => {
    provider?.on("connect", (publicKey: PublicKey) => {
      console.log(`connect event: ${publicKey}`);
      setConnected(true);
      setPubKey(publicKey);
      setAddress(publicKey.toString());
    });
    provider?.on("disconnect", () => {
      console.log("disconnect event");
      setConnected(false);
      setPubKey(null);
    });
  }, [provider]);

  const connect = () => {
    provider?.connect().catch((err) => {
      console.error("connect ERROR:", err);
    });
  };

  const disconnect = () => {
    provider?.disconnect().catch((err) => {
      console.error("disconnect ERROR:", err);
    });
  };

  return (
    <WalletContext.Provider
      value={{ walletAvail, address, connected, pubKey, connect, disconnect }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
