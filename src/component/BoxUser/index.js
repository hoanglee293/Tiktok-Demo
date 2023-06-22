import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./BoxUser.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCheckCircle,
  faHeart,
  faMusic,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../Button";
import AvtDefault from "../../assets/images/avatar-default.jpeg";
import ModalPreview from "../ListUser/ModalPreview";

function BoxUser({ data, mute, volume, adjustVolume, toggleMuted }) {
  const cx = classNames.bind(styles);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    if (mute) {
      videoRef.current.volume = 0;
    } else videoRef.current.volume = volume;
    setIsPlaying(true)
  },[mute, volume]);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayVideo = () => {
    if (isPlaying === false) {
      playVideo();
    } else {
      pauseVideo();
    }
  };

  function playVideoInViewport() {
    var bounding = videoRef.current.getBoundingClientRect();
    const isPlayings =
      videoRef.currentTime > 0 &&
      !videoRef.paused &&
      !videoRef.ended &&
      videoRef.readyState > videoRef.HAVE_CURRENT_DATA;

    if (
      !isPlayings &&
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      playVideo();
    } else {
      pauseVideo();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", playVideoInViewport);
    return () => window.removeEventListener("scroll", playVideoInViewport);
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img
          src={
            data?.user.avatar === "https://files.fullstack.edu.vn/f8-tiktok/"
              ? AvtDefault
              : data?.user.avatar
          }
          alt=""
          height={56}
          width={56}
        />
      </div>
      <div className={cx("content")}>
        <HeadlessTippy
          interactive
          appendTo={document.body}
          hideOnClick="false"
          placement="bottom"
          delay={[1000, 0]}
          offset={[-102, 0]}
          zIndex="99"
          render={(attrs) => (
            <ModalPreview tabIndex="-1" {...attrs} data={data?.user} />
          )}
        >
          <Link to={`/@${data.user.nickname}`} className={cx("info")}>
            <h3 className={cx("name")}>
              {data?.user.nickname}&nbsp;
              {data?.user.tick && (
                <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
              )}
            </h3>
            <span
              className={cx("id")}
            >{`${data?.user.first_name} ${data?.user.last_name}`}</span>
          </Link>
        </HeadlessTippy>

        <div className={cx("description")}>
          <span>{data?.description}</span>&ensp;
          <Link to="/">#tiktok2023</Link>
          <div className={cx("address-music")}>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faMusic} /> {data?.music}
            </Link>
          </div>
        </div>
        <div className={cx("box-video")}>
          <div className={cx("video")}>
            <video
              loop
              ref={videoRef}
              style={
                data?.meta.video.resolution_x < data?.meta.video.resolution_y
                  ? { width: "273px" }
                  : { width: "463px" }
              }
            >
              <source ref={videoRef} src={data?.file_url} type="video/mp4" />
            </video>
            <div className={cx("control-play")} onClick={togglePlayVideo}>
              {isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </div>
          </div>
          <div className={cx("actions")}>
            <div className={cx("action-btn")}>
              <Button rounded>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <p className={cx("numbers")}>{data?.likes_count}</p>
            </div>
            <div className={cx("action-btn")}>
              <Button rounded>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <p className={cx("numbers")}>{data?.comments_count}</p>
            </div>
            <div className={cx("action-btn")}>
              <Button rounded>
                <FontAwesomeIcon icon={faBookmark} />
              </Button>
              <p className={cx("numbers")}>{data?.comments_count}</p>
            </div>
          </div>
        </div>
      </div>
      <Button outline small>
        Follow
      </Button>
    </div>
  );
}

BoxUser.propTypes = {
  data: PropTypes.object,
};

export default BoxUser;
