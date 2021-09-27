import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <center><div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      height="200px"
      width="400px"
      
    />
  </div>
  </center>
)
export default Video