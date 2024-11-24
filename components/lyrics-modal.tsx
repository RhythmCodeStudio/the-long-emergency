import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

// import icons
import { FiX } from "react-icons/fi";

export default function LyricsModal({
  title,
  lyrics,
}: {
  title: string;
  lyrics: string[];
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  console.log("Lyrics in Modal:", lyrics); // Debugging line

  return (
    <>
      <button
        onClick={onOpen}
        className="font-mono"
        aria-label={`Download ${title} on Bandcamp`}
        type="button">
        Lyrics
      </button>
      <Modal
        placement="center"
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        scrollBehavior="normal"
        backdrop="blur"
        className="flex items-center justify-center max-w-200 ">
        <ModalContent className="bg-black rounded-2xl max-h-[80vh]">
          {(onClose) => (
            <>
              <ModalHeader >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-2xl md:text-3xl 2xl:text-4xl">
                  <FiX />
                </button>
                <div className="mt-2 flex-col justify-center text-center items-center w-full">
                  <h6 className="text-2xl">{title}</h6>
                </div>
              </ModalHeader>
              <ModalBody className="flex justify-center items-center overflow-y-auto">
                <div className="font-mono px-6 overflow-y-auto">
                  <div className="text-center">
                    {lyrics.map((paragraph, index) => (
                      <p key={index} className="p-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col justify-center text-center items-center w-full ">
                <div className="mb-6">
                  <h6 className=" text-2xl">The Long Emergency</h6>
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
