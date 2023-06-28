import React, { useEffect, useState } from "react";
import BoxUser from "../../component/BoxUser";
import * as ListContent from "../../services/listContent";
import Loading from "../../component/Loading";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(0.4);



  useEffect(() => {
    const fetchAPI = async () => {
      const result = await ListContent.loadVideo("for-you", page);
      const data = result.data;

      setVideos((prev) => [...prev, ...data]);
      setLoading(false);
    };
    fetchAPI();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setLoading(true);
      setPage((page) => page + 1);
    }
  }

  const toggleMuted = () => {
    if (mute) {
      setVolume(0);
      setMute(false);
    } else {
      setVolume(0);
      setMute(true);
    }
  };
  
  return (
    <>
      {videos.map((ele, index) => (
        <BoxUser
          key={index}
          data={ele}
          volume={volume}
          mute={mute}
          toggleMuted={toggleMuted}
        />
      ))}
      {loading && (
        <div className={cx("loading")}>
          <Loading />
        </div>
      )}
    </>
  );
}

export default HomePage;
