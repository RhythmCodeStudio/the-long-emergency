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
      <button
        onClick={onOpen}
        className="text-2xl"
        aria-label={`Download ${title} on Bandcamp`}
        type="button">
        <FiDownload />
      </button>
      <Modal
        placement="center"
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        scrollBehavior="outside"
        backdrop="blur">
        <ModalContent className="bg-black rounded-none ">
          {(onClose) => (
            <>
              <ModalHeader className="z-50">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-xl">
                  <FiX />
                </button>
                <div className="mt-2 flex-col justify-center text-center items-center w-full">
                  <p className="  ">download</p>
                  <p className=" text-2xl">{title}</p>
                  <p className="  z-50">
                    from&nbsp;
                    <a
                      href="https://thelongemergency.bandcamp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline z-50">
                      bandcamp.com
                    </a>
                  </p>
                </div>
              </ModalHeader>
              <ModalBody className="flex justify-center items-center h-full z-0">
                <iframe
                  src={src}
                  width="90%"
                  height="90%"
                  className="rounded-2xl"
                />
              </ModalBody>
              <ModalFooter className="flex flex-col justify-center text-center items-center w-full ">
                <div className="  ">
                  <h6 className=" mb-12 text-2xl">The Long Emergency</h6>
                </div>
                <button onClick={onClose} className="text-xl">
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
