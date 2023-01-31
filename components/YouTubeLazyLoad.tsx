"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function YouTubeLazyLoad({ youtubeId }: {youtubeId?: string}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="">
      {showVideo ? (
        <div className="flex justify-center items-center">
          <iframe
            width="1920"
            height="1080"
            className="aspect-video lg:w-[1280px] lg:h-[720px] rounded-lg w-96 h-48"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="aspect-video rounded-lg lg:w-full lg:h-full"
        >
          <Image
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            width={1280}
            height={720}
            className=" w-96 lg:w-full lg:h-full"
          />
        </button>
      )}
      {/* <div className="gradient-01"/>  */}
    </div>
  );
}
