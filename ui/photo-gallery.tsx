//

"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import Link from "next/link";
// import from react
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import image data
import { bandPics } from "@/lib/band-pics";
import { soloPics } from "@/lib/solo-pics";
import { promoPics } from "@/lib/promo-pics";
import { headshots } from "@/lib/headshots";
// import components
import Button from "./button";

interface PhotoGalleryProps {
  showOptions?: boolean; // Whether to show the gallery category buttons
  // CHANGED: Added showPagination prop
  showPagination?: boolean; // Whether to show pagination dots
  showNavigation?: boolean; // Whether to show navigation arrows
  showCaption?: boolean; // Whether to show image captions
}

// CHANGED: Added default value for showPagination prop
export default function PhotoGallery({
  showOptions,
  showPagination = true,
  showNavigation = true,
  showCaption = true,
}: PhotoGalleryProps) {
  const [currentPicSet, setCurrentPicSet] = useState<
    typeof promoPics | typeof bandPics | typeof soloPics | typeof headshots
  >(bandPics);
  const [fullScreenImage, setFullScreenImage] = useState<
    | (typeof promoPics)[number]
    | (typeof bandPics)[number]
    | (typeof soloPics)[number]
    | (typeof headshots)[number]
    | null
  >(null);
  const [activeCategory, setActiveCategory] = useState<
    "band" | "solo" | "headshots" | "promo"
  >("band");
  const swiperRef = useRef<SwiperType | null>(null);

  // Disable scroll and pause autoplay when fullscreen
  useEffect(() => {
    if (fullScreenImage !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    };
  }, [fullScreenImage]);

  return (
    <>
      {showOptions && (
        <div className="flex flex-row justify-center items-center rounded-4xl shadow-white shadow-lg border-2 border-border-default bg-black/50 w-full max-w-[90vw] sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 5xl:w-2/12 xl:max-w-[24rem] mx-auto text-sm md:text-base mt-4 mb-8">
          <Button
            label="band"
            onClick={() => {
              setCurrentPicSet(bandPics);
              setActiveCategory("band");
              track("gallery_switch", { gallery: "band_photos" });
            }}
            className={`m-2 px-2 rounded-4xl text-shadow-black-background-black ${activeCategory === "band" ? "rainbow-gradient" : "rainbow-gradient-hover"}`}
          />
          <span className="text-shadow-black-background-black">|</span>
          <Button
            label="solo"
            onClick={() => {
              setCurrentPicSet(soloPics);
              setActiveCategory("solo");
              track("gallery_switch", { gallery: "solo_photos" });
            }}
            className={`m-2 px-2 rounded-4xl text-shadow-black-background-black ${activeCategory === "solo" ? "rainbow-gradient" : "rainbow-gradient-hover"}`}
          />
          <span className="text-shadow-black-background-black">|</span>
          <Button
            label="headshots"
            onClick={() => {
              setCurrentPicSet(headshots);
              setActiveCategory("headshots");
              track("gallery_switch", { gallery: "headshots" });
            }}
            className={`m-2 px-2 rounded-4xl text-shadow-black-background-black ${activeCategory === "headshots" ? "rainbow-gradient" : "rainbow-gradient-hover"}`}
          />
          <span className="text-shadow-black-background-black">|</span>
          <Button
            label="promo pics"
            onClick={() => {
              setCurrentPicSet(promoPics);
              setActiveCategory("promo");
              track("gallery_switch", { gallery: "promo_pics" });
            }}
            className={`m-2 px-2 rounded-4xl text-shadow-black-background-black ${activeCategory === "promo" ? "rainbow-gradient" : "rainbow-gradient-hover"}`}
          />
        </div>
      )}
      <section className="text-center mx-auto w-full flex flex-col justify-center items-center font-bold max-w-4xl">
        {/* <Heading
        text="Photo Gallery"
        headingLevel={2}
        className="font-bold text-4xl sm:text-5xl md:text-6xl text-shadow-black-background-black font-indie-flower tracking-widest mb-6"
      /> */}
        <Swiper
          autoHeight={true}
          className="photo-swiper"
          spaceBetween={30}
          loop={true}
          slidesPerView={"auto"}
          speed={1000}
          // effect={"fade"}
          navigation={showNavigation}
          // pagination conditional based on showPagination prop
          pagination={showPagination}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
          // CHANGED: Conditionally include Pagination and Navigation modules based on showPagination and showNavigation props
          modules={
            showPagination || showNavigation
              ? [Autoplay, Navigation, Pagination]
              : [Autoplay]
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}>
          {currentPicSet.map((pic, index) => {
            // const isPortrait = pic.orientation === "portrait";
            // const isLandscape = pic.orientation === "landscape";
            // const isSquare = pic.orientation === "square";
            // if (!isPortrait && !isLandscape && !isSquare) {
            //   return null; // Skip images with unknown orientation
            // }
            let imageWidth = pic.width;
            let imageHeight = pic.height;
            // if (isSquare) {
            //   imageWidth = 1000;
            //   imageHeight = 1000;
            // } else if (isPortrait) {
            //   imageWidth = 1280;
            //   imageHeight = 1920;
            // } else if (isLandscape) {
            //   imageWidth = 1920;
            //   imageHeight = 1280;
            // }
            return (
              <SwiperSlide key={index}>
                <div
                  className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-transparent aspect-3/2"
                  onClick={() => {
                    setFullScreenImage(pic);
                    track("image_view", { image: pic.alt });
                  }}>
                  <Image
                    src={pic.src}
                    alt={pic.alt || "po mia gallery image"}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                    className="object-contain w-full h-full"
                  />
                  {showCaption && (
                    <span className="text-sm mt-1 mb-12 text-shadow-black-background-black">
                      click or tap image to view fullscreen
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {fullScreenImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
            onClick={() => setFullScreenImage(null)}>
            <Image
              src={fullScreenImage.src}
              alt={fullScreenImage.alt || "Gallery image"}
              width={fullScreenImage.width}
              height={fullScreenImage.height}
              priority
              // className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
              className="w-full h-full"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </section>
    </>
  );
}