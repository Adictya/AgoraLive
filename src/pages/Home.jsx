import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import classes from "./Home.module.css";

const baseUrl = "http://localhost:8080/";


const VideoElement = (props) => {
  const getThumbnail = async() =>{
    var req = await fetch(`${baseUrl}getThumbnail?id=${props.streamId}`)
    req = req.json()
    console.log(req)
    return req
  }
  const {data, status} = useQuery(`thumbnail${props.streamId}`,getThumbnail)
  return (
    <div className={classes.videoItem}>
      <div className={classes.videoThumb}>
    <img src={status==="success"?data:"data:image/jpeg;base64,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"} alt="Thumbnail for" />
      </div>
      <div className={classes.videoTitle}>{props.name}</div>
    </div>
  );
};

const fetchVideos = async () => {
  const req = {
    Limit: 10,
    Offset: 1,
  };
  const res = await fetch(
    `${baseUrl}listStreams?Limit=${req.Limit}&Offset=${req.Offset}`,
    {method:"GET"}
  );
  return res.json();
};

const Home = (props) => {
  const { data, status } = useQuery("vidoes", fetchVideos);
  console.log(data);

  return (
    <div className={classes.homeRoot}>
      {status === "loading" && (
        <div className={classes.loading}>Loading...</div>
      )}

      {status === "success" &&
        data.map((stream) => {
          return (
            <VideoElement
              name={stream.channel}
              streamId={stream.id}
              key={stream.channel + stream.id}
            />
          );
        })}
    </div>
  );
};

export default Home;
