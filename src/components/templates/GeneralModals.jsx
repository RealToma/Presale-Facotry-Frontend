const GeneralModals = ({ handleClose, content, width }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full backdrop-blur">
      <div
        onClick={handleClose}
        className="modal bg-black  bg-opacity-40 fixed inset-0 flex items-center  justify-center"
      >
        <div
          className={`modal-content bg-[#1A1A1A] border border-white border-opacity-70 ${width} rounded-md overflow-y-scroll transform transition-transform duration-300 ease-in-out bounce`}
        >
          {/* <div className="flex justify-between sticky top-0 border-b bg-[var(--primary-color)] z-[500] border-white border-opacity-10 p-6 items-center">
                <h4 className="text-[var(--text-color)] capitalize">{heading}</h4>
                <span
                  onClick={close}
                  className="text-xl cursor-pointer text-[var(--text-color)]"
                >
                  <TbX />
                </span>
              </div> */}

          <div className="border-b border-[var(--border-color)] opacity-10"></div>
          <div className="p-6 text-[var(--faded-text)] overflow-y-auto ">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralModals;
