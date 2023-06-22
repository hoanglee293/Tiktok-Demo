import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProfileUser } from "../../services/ProfileUser";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import AvatarDefault from "../../assets/images/avatar-default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLink, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../../component/Button";

const cx = classNames.bind(styles);
function Profile() {
  const location = useLocation();
  const path = location.pathname;
  const [profile, setProfile] = useState({});
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    const fechtApi = async () => {
      const res = await ProfileUser(path);
      setProfile(res.data);
      setListVideo(res.data.videos);
    };
    fechtApi();
  }, [path]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <div className={cx("info-basic")}>
          <img
            src={
              profile.avatar === "https://files.fullstack.edu.vn/f8-tiktok/"
                ? AvatarDefault
                : profile.avatar
            }
            alt=""
          />
          <div className={cx("name")}>
            <h3>
              {profile?.nickname}&ensp;
              {profile?.tick && (
                <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
              )}
            </h3>
            <span>{`${profile?.first_name} ${profile?.last_name}`}</span>
            <Button primary>Follow</Button>
          </div>
        </div>
        <div className={cx("info-counts")}>
          <span>
            <strong>{profile?.followings_count}</strong> Following
          </span>
          <span>
            <strong>{profile?.followers_count}</strong> Follower
          </span>
          <span>
            <strong>{profile?.likes_count}</strong> Likes
          </span>
        </div>
        <div className={cx("bio")}>{profile?.bio}</div>
        <div className={cx("external-link")}>
          <FontAwesomeIcon icon={faLink} />
          &nbsp;
          <a href="/">{profile?.website_url}</a>
        </div>
      </div>
      <div className={cx("list-item")}>
        {listVideo.map((video, index) => (
          <div className={cx("item")} key={index}>
            <div className={cx("box-video")}>
              <img src={video.thumb_url} alt="" />
              <video loop muted onMouseOver={(e) => e.target.play()}>
                <source src={video.file_url} type="video/mp4" />
              </video>
              <span><FontAwesomeIcon icon={faPlay}/>&ensp;{video?.views_count}</span>
            </div>
            <span>{video?.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
