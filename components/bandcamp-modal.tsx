import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { on } from "events";
// import icons
import { FiX } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function BandcampModal({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="text-2xl">
        <FiDownload />
      </button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        scrollBehavior="outside"
        backdrop="blur"
      >
        <ModalContent
          className="bg-black rounded-none"
        >
          {(onClose) => (
            <>
              <ModalHeader>
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
                  <FiX />
                </button>
                <div className="flex-col justify-center text-center items-center w-full">
                  <h6 className="mt-12 -mb-12 text-3xl ">{title}</h6>
                </div>
              </ModalHeader>
                <ModalBody className="flex justify-center items-center h-full">
                <iframe
                  src={src}
                  width="80%"
                  height="80%"
                  className="rounded-2xl"
                />
                </ModalBody>
                <ModalFooter className="flex justify-center">
                <button onClick={onClose} className="text-2xl">
                  <FiX />
                </button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
