import React from "react";
import { useWallet } from "./context/WalletContext";

const Connect2Phantom = () => {
  const { walletAvail, connected, connect, disconnect } = useWallet();

  return (
    <div>
      {walletAvail ? (
        <>
          {!connected ? (
            <button
              className="w-[209px] h-[63px] rounded-[48px] button-color leading-normal font-medium text-[15px]"
              onClick={connect}
              disabled={connected}
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className="w-[209px] h-[63px] rounded-[48px] button-color leading-normal font-medium text-[15px]"
              onClick={disconnect}
              disabled={!connected}
            >
              Disconnect
            </button>
          )}
        </>
      ) : (
        <a href="https://phantom.app/" target="_blank">
          <button className="w-[209px] h-[63px] rounded-[48px] button-color leading-normal font-medium text-[15px]">
            Install Wallet
          </button>
        </a>
      )}
    </div>
  );
};

export default Connect2Phantom;
