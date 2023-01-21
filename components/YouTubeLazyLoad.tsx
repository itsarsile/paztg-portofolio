"use client";
import Image from "next/image";
import { useState } from "react";

export default function YouTubeLazyLoad({ youtubeId = "CX25cnGb-IU" }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
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
          <img
            src="/play.svg"
            alt=""
            className=" top-[58%] left-[43%] w-12 lg:w-24 lg:top-[100%] lg:left-[46%] z-0"
          />
        </button>
      )}
    </div>
  );
}
