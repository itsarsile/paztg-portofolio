'use client';
import Image from 'next/image';
import { useState } from 'react'

export default function YouTubeLazyLoad({
    youtubeId = 'CX25cnGb-IU',
    thumbnailOverride = 'CX25cnGb-IU',
}) {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            {showVideo ? (
                <div className="flex justify-center items-center">
                    <iframe
                        width="640"
                        height="360"
                        className='aspect-video w-16 rounded-lg p-0'
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}></iframe>
                </div>
            ) : (
                <button type="button" onClick={() => setShowVideo(true)} className='relative aspect-video rounded-lg w-64 h-48'>
                    <Image src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={720}
                        className="relative"
                    />
                    <img src="/play.svg" alt="" className='absolute top-[40%] left-[43%] lg:w-24 lg:top-[46%] lg:left-[46%]' />

                </button>
            )}
        </div>
    )
}
