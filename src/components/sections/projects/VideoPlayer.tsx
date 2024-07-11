// VideoPlayer.js
import React from 'react';

interface Props {
    videoSrc: string,
    type: string,
}

function VideoPlayer({ videoSrc, type }: Props) {
  return (
    <div>
      <video width="w-full rounded-md" controls>
        <source src={videoSrc} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
