'use client';
import Image from 'next/image';
import { useState } from 'react'

export default function YouTubeLazyLoad({
    youtubeId = 'CX25cnGb-IU',
    title,
    thumbnailOverride = 'CX25cnGb-IU',
    caption
}) {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            {showVideo ? (
                <div className="flex justify-center items-center">
                    <iframe 
                        width="1280" 
                        height="720" 
                        className='aspect-video rounded-lg p-0'
                        src={`https://www.youtube.com/embed/${youtubeId}`} 
                        title="YouTube video player" 
                        frameborder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </div>
            ) : (
                <button type="button" onClick={() => setShowVideo(true)}>
                    <Image src={
                        thumbnailOverride.url || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                    }
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={720}
                    />
                </button>
            )}
        </div>
    )
}
