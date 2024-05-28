import { Link } from "react-router-dom";
import Connect2Phantom from "../Connect2Phantom";
import { TbBrandTelegram, TbBrandX } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useState } from "react";
import GeneralModals from "../templates/GeneralModals";
import HowItWorks from "../HowItWorks";

const Header = () => {
  
  const [openHowItWorks, setOpenHowItWorks] = useState<boolean>(false);
  const toggleHowItWorks = (): void => {
    setOpenHowItWorks(true);
  };

  const closeHowItWorks = (): void => {
    setOpenHowItWorks(false);
  };

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if ((e.target as HTMLElement).classList.contains("modal")) {
      closeHowItWorks();
    }
  };
  return (
  <div className="fixed z-50 w-full ">
      <div className="h-[84px] pr-20 pl-[88px] flex items-center justify-between w-full mx-auto">
        <div className="flex items-center gap-4">
          <TbBrandX className="text-[20px] text-white" />
          <RiCustomerService2Fill className="text-[20px] text-white" />
          <TbBrandTelegram className="text-[20px] text-white" />
          <IoMdHelpCircleOutline
            onClick={toggleHowItWorks}
            className="text-[20px] text-white"
          />
        </div>

        <div className="flex flex-row items-center pt-[15px] pb-[14px]">
          <Connect2Phantom />
        </div>
      </div>

      {openHowItWorks && (
        <GeneralModals
          handleClose={handleCloseModal}
          width={"lg:w-[40%] w-full"}
          content={<HowItWorks close={closeHowItWorks} />}
        />
      )}
    </div>
  );
};

export default Header;
