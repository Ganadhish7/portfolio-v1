function ProjectModal({ modal, closeModal, children }) {
  return (
    <>
      {modal && (
        <div className=" fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center backdrop-blur-md ">
          <div
            className="  absolute h-full w-full opacity-75 "
            onClick={closeModal}
          ></div>
          <div className=" z-50 rounded-lg border-2 border-blue-200 bg-inherit bg-sky-100 p-8  ">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectModal;
