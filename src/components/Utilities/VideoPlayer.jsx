"use client"
import React, { useState } from 'react'
import YouTube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
  const [isPlaying, setIsPlaying] = useState(true)

  const handleVideoPlayer = () => {
    setIsPlaying((prevState) => !prevState)
  }

  const option = {
    width: "300",
    height: "250"
  }

  const Player = () => {
    return (
      <div className='fixed bottom-2 right-2 transition-all'>
        <button className='text-color-primary float-right bg-color-secondary px-3 mb-1 transition-all'
          onClick={handleVideoPlayer}>
          X
        </button>
        <YouTube videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option} />
          onError={() => alert("Video Tidak Tersedia")}
      </div>
    )
  }
 
// salah satu cara untuk menampilkan video
  // const btnOpenTrailer = () => {
  //   return (
  //     <button className='text-color-primary float-right bg-color-secondary px-3 mb-1 transition-all'
  //       onClick={handleVideoPlayer}>
  //       Trailer
  //     </button>
  //   )
  // }
  return isPlaying ? <Player/> : <button className='fixed bottom-5 right-5 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl p-2'
  onClick={handleVideoPlayer}>Tonton Trailer</button>

}

export default VideoPlayer
