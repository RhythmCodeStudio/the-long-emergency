import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
// import { on } from "events";
// import icons
import { FiX } from "react-icons/fi";

export default function TicketModal({
  venue,
  date,
  src,
}: {
  venue: string;
  date: string;
  src: string;
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="text-2xl">
        Tickets
      </button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        scrollBehavior="outside"
        backdrop="blur">
        <ModalContent className="bg-black rounded-none">
          {(onClose) => (
            <>
              <ModalHeader>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-2xl md:text-3xl 2xl:text-4xl">
                  <FiX />
                </button>
                <div className="flex-col text-center w-full mt-12 -mb-12">
                  <h6 className=" text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
                    {venue}
                  </h6>
                  <h6 className="text-xl md:text-2xl 2xl:text-3xl  mt-2">
                    {date}
                  </h6>
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
              <ModalFooter className="flex flex-col justify-center text-center items-center w-full ">
                <div className="  ">
                  <h6 className="-mt-12 mb-12 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
                    The Long Emergency
                  </h6>
                </div>
                <button
                  onClick={onClose}
                  className="text-2xl md:text-3xl xl:text-4xl">
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
