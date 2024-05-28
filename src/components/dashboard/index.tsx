"use client";

import { useState } from "react";
import { useWallet } from "../context/WalletContext";
import Connect2Phantom from "../Connect2Phantom";

function Hero(): JSX.Element {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openConnectWallet, setOpenConnectWallet] = useState<boolean>(false);
  const { pubKey, address, connected, connect, disconnect } = useWallet();
  console.log(address);

  const toggleShowMore = (): void => {
    setShowMore(!showMore);
  };

  const handleOpenModal = (): void => {
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  const toggleConnectWallet = (): void => {
    setOpenConnectWallet(true);
  };

  const closeConnectWallet = (): void => {
    setOpenConnectWallet(false);
  };

  const handleClosewallet = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if ((e.target as HTMLElement).classList.contains("modal")) {
      closeConnectWallet();
    }
  };

  const validateFields = (): boolean => {
    const coinName = (
      document.getElementById("coinName") as HTMLInputElement
    ).value.trim();
    const ticker = (
      document.getElementById("ticker") as HTMLInputElement
    ).value.trim();
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value.trim();
    const fileInput =
      (document.getElementById("fileInput") as HTMLInputElement).files
        ?.length || 0;

    const newErrors: { [key: string]: string } = {};

    if (!coinName) {
      newErrors.coinName = "Coin name is required.";
    }
    if (!ticker) {
      newErrors.ticker = "Ticker is required.";
    }
    if (!description) {
      newErrors.description = "Description is required.";
    }
    if (fileInput === 0) {
      newErrors.fileInput = "Logo is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleCreateCoin = (): void => {
    if (validateFields()) {
      handleOpenModal();
      console.log("Form is valid, creating coin...");
    } else {
      console.log("Form is invalid, please check the errors.");
    }
  };

  return (
    <div className="flex flex-col justify-center pt-10 items-center w-full pb-10 sm:px-0 px-5">
      <form
        action=""
        className="w-full max-w-[480px] py-10 flex flex-col gap-4"
      >
        <button
          type="button"
          className="text-white"
          // onClick={() => {
          //   if (connected) {
          //     disconnect();
          //   } else connect();
          // }}
        >
          {connected ? address : null}
        </button>
        <div>
          <h2 className="text-[20px] text-center font-bold text-[#46B7F1]">
            PumpBCHfun
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="coinName"
            className="text-[16px] font-medium text-[#46B7F1]"
          >
            Coin name
          </label>
          <input
            type="text"
            id="coinName"
            className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
          />
          {errors.coinName && (
            <p className="text-red-500 text-sm">{errors.coinName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="ticker"
            className="text-[16px] font-medium text-[#46B7F1]"
          >
            Ticker
          </label>
          <input
            type="text"
            id="ticker"
            className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
          />
          {errors.ticker && (
            <p className="text-red-500 text-sm">{errors.ticker}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-[16px] font-medium text-[#46B7F1]"
          >
            Description
          </label>
          <textarea
            id="description"
            className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
            cols={30}
            rows={5}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fileInput"
            className="text-[16px] font-medium text-[#46B7F1]"
          >
            Logo
          </label>
          <input
            type="file"
            id="fileInput"
            className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
          />
          {errors.fileInput && (
            <p className="text-red-500 text-sm">{errors.fileInput}</p>
          )}
        </div>

        <div
          onClick={toggleShowMore}
          className="w-[100px] flex items-center justify-center h-[40px] rounded-[48px] button-color leading-normal font-medium text-[15px]"
        >
          {showMore ? "Show less" : "Show more"}
        </div>

        {showMore && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="twitter"
                className="text-[16px] font-medium text-[#46B7F1]"
              >
                Twitter
              </label>
              <input
                type="text"
                id="twitter"
                className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="telegram"
                className="text-[16px] font-medium text-[#46B7F1]"
              >
                Telegram
              </label>
              <input
                type="text"
                id="telegram"
                className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="website"
                className="text-[16px] font-medium text-[#46B7F1]"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                className="bg-transparent p-2 w-full outline-none border border-white border-opacity-70 text-[16px] text-white text-opacity-70 rounded-lg"
              />
            </div>
          </div>
        )}
      </form>

      {connected ? (
        <div className="w-full max-w-[480px] flex flex-col gap-4">
          <button
            onClick={handleCreateCoin}
            className="w-full h-[50px] rounded-[48px] button-color leading-normal font-medium text-[15px]"
          >
            Create Coin
          </button>
        </div>
      ) : (
        <div className="w-full max-w-[480px] flex flex-col justify-center items-center gap-4">
          <Connect2Phantom />
        </div>
      )}
    </div>
  );
}

export default Hero;
