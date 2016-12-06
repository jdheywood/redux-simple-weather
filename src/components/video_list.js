import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return (
    // function based component can reference props if passed in
    // react is happy rendering arrays/lists of components
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
