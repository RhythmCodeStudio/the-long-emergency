'useclient';
import { useState, useRef, useEffect } from "react";
// import icons
import { FiX } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function IframeModal({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    setModalOpen(true);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <>
      <button onClick={openModal}>
        <FiDownload className="text-lg xl:text-2xl" />
      </button>
      {modalOpen && (
        <dialog ref={dialogRef} className="fixed inset-0 z-50 flex justify-center items-center bg-white">
          <button
            autoFocus
            onClick={closeModal}
            className="absolute top-0 right-0 p-4">
            <FiX />
          </button>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl text-center mb-4">{title}</h3>
            <iframe src={src} className="w-full h-full" />
          </div>
        </dialog>
      )}
    </>
  );
}