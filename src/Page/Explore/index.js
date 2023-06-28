import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./Expolre.module.scss";
import * as FollowNotLogin from "../../services/FollowingNotLogin";
import AvatarDefault from "../../assets/images/avatar-default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading";

const cx = classNames.bind(styles);
function Explore() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await FollowNotLogin.FollowNotLogin(page);
      const data = res.data;
      setData((pre) => [...pre, ...data]);
      setLoading(false);
    };
    fetchApi();
  }, [page]);
  return (
    <>
      <div className={cx("wrapper")}>
        {data.map((ele, index) => (
          <div className={cx("item")} key={index}>
            <div className={cx("box-video")}>
              <video
                loop
                muted
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.load()}
              >
                <source src={ele.popular_video.file_url} type="video/mp4" />
              </video>
            </div>
            <div className={cx("description")}>
              {ele.popular_video?.description}
            </div>
            <div className={cx("user")}>
              <Link to={`/@${ele.nickname}`} className={cx("name")}>
                <img
                  src={
                    ele?.avatar === "https://files.fullstack.edu.vn/f8-tiktok/"
                      ? AvatarDefault
                      : ele.avatar
                  }
                  alt=""
                />
                <span>
                  {ele?.nickname}
                  {ele.tick && (
                    <>
                      &nbsp;
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("check")}
                      />
                    </>
                  )}
                </span>
              </Link>
              <span>
                <FontAwesomeIcon icon={faHeart} />{" "}
                {ele.popular_video.likes_count}
              </span>
            </div>
          </div>
        ))}
      </div>
      {loading && <Loading />}
    </>
  );
}

export default Explore;
