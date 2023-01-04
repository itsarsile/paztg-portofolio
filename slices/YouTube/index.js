import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import YoutubeLazyLoad from '../../components/YouTubeLazyLoad'


/**
 * @typedef {import("@prismicio/client").Content.YouTubeSlice} YouTubeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<YouTubeSlice>} YouTubeProps
 * @param { YouTubeProps }
 */
const YouTube = ({ slice }) => {
  const {youtubeId, title, thumbnailOverride, caption} = slice.primary;

  return (
    <section>
      <YoutubeLazyLoad youtubeId={youtubeId} title={title} thumbnailOverride={thumbnailOverride} caption={caption}/>
    </section>
  )
}

export default YouTube