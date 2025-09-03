import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

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
        className=" m-1 px-2 py-1 text-white rounded-full bg-customGray"
        aria-label={`Download ${title} on Bandcamp`}
        type="button">
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
        <ModalContent className="bg-black rounded-2xl max-h-[80vh] overflow-y-auto shadow-blue-300/50 border-2 border-slate-400">
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
                  <p className="font-emergency text-xl md:text-2xl text-white text-outline-gray">{title}</p>
                </div>
              </ModalHeader>
              <ModalBody
                className="p-2 relative flex justify-center items-center overflow-y-auto rounded-2xl bg-[url('/images/masks-no-text-2048.png')] bg-cover"
                // style={{
                //   backgroundImage: "url(/images/masks-no-text-2048.png)",
                //   backgroundSize: "cover",
                // }}
              >
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] rounded-2xl"></div>
                <div className="relative px-6 overflow-y-auto text-white hide-scrollbar">
                  <div className="text-center text-outline">
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
                <div className="text-outline-gray mb-6">
                  <p className="font-emergency  text-xl md:text-2xl">The Long Emergency</p>
                  <p className=" mt-2">
                    music and lyrics
                    <br />
                    by&nbsp;
                    <a
                      href="https://www.discogs.com/artist/3655286-Kevin-Long-5"
                      target="_blank"
                      rel="noopener noreferrer">
                      Kevin Long
                    </a>
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
