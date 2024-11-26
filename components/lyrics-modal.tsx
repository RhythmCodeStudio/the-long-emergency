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

  return (
    <>
      <button
        onClick={onOpen}
        className="font-mono m-1 px-2 py-1  text-white rounded-full"
        aria-label={`Download ${title} on Bandcamp`}
        type="button"
        style={{backgroundColor: "#868686"}}
      >
        <span className="text-black font-bold">Lyrics</span>
        
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
        className="flex items-center justify-center max-w-[80vw] lg:max-w-[60vw] xl:max-w-[40vw] 2xl:max-w-[40vw] 3xl:max-w-[30vw]">
        <ModalContent className="bg-black rounded-2xl max-h-[80vh] overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader>
                <button
                  type="button"
                  aria-label="Close window"
                  onClick={onClose}
                  className="absolute top-2 right-2 text-xl p-1">
                  <FiX />
                </button>
                <div className="mt-2 flex-col justify-center text-center items-center w-full">
                  <h6 className="text-2xl text-white">{title}</h6>
                </div>
              </ModalHeader>
              <ModalBody
                className="p-2 relative flex justify-center items-center overflow-y-auto rounded-2xl"
                style={{
                  backgroundImage: "url(/images/masks-no-text-2048.png)",
                  backgroundSize: "cover",
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative font-mono px-6 overflow-y-auto text-white hide-scrollbar">
                  <div className="text-center">
                    {lyrics.map((paragraph, index) => (
                      <div key={index} className="p-2">
                        {paragraph.split("\n").map((line, lineIndex) => (
                          <p key={lineIndex} className="">
                            {line}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col justify-center text-center items-center w-full">
                <div className="mb-6 mt-2">
                  <h6 className="text-2xl ">The Long Emergency</h6>
                  <p className="font-mono">
                    music and lyrics
                    <br />
                    by Kevin Long
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close window"
                  onClick={onClose}
                  className="text-xl absolute bottom-2 p-1">
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
