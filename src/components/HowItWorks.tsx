import { MouseEventHandler } from "react";

interface Props {
  close: MouseEventHandler<HTMLButtonElement>;
}

function HowItWorks({ close }: Props): JSX.Element {
  return (
    <div>
      <h2 className="text-white text-[25px] font-semibold text-center">
        How it works
      </h2>
      <p className="text-white text-[16px] py-4 text-center">
        Pump prevents rugs by making sure that all created tokens are safe. Each
        coin on pump is a fair-launch with no presale and no team allocation.
      </p>

      <div className="py-4 flex flex-col gap-3">
        <p className="text-white text-[16px] text-center">
          step 1: pick a coin that you like
        </p>
        <p className="text-white text-[16px] text-center">
          step 2: buy the coin on the bonding curve
        </p>
        <p className="text-white text-[16px] text-center">
          step 3: sell at any time to lock in your profits or losses
        </p>
        <p className="text-white text-[16px] text-center">
          step 4: when enough people buy on the bonding curve it reaches a
          market cap of $69k
        </p>
        <p className="text-white text-[16px] text-center">
          step 5: $12k of liquidity is then deposited in raydium and burned
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-[#46B7F1] py-2 px-6 rounded-lg text-black hover:bg-opacity-40 hover:text-white transition-all ease-in-out duration-500">
          Create Coin
        </button>
      </div>
    </div>
  );
}

export default HowItWorks;
