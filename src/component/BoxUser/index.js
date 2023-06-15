import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React from "react";
import styles from "./BoxUser.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../Button";
// import axios from "axios";

function BoxUser() {
  const cx = classNames.bind(styles);
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173"
  //       );
  //       return setUser(res.data);
  //     } catch (error) {
  //       console.log("error search");
  //     }
  //   };
  //   fetchApi();
  // }, []);
  const data = {
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da29d4c32fd0b34891fcaac913e29cd4~c5_100x100.jpeg?x-expires=1686664800&x-signature=nlSIHnpKpnzcrJ%2FsapuTzvMeT10%3D",
    full_name: "Cẩm Tú Anh",
    tick: true,
    nickname: "camtuanhh",
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img src={data.avatar} alt="" height={56} width={56} />
      </div>
      <div className={cx("content")}>
        <Link to={`/@${data.nickname}`} className={cx("info")}>
          <h3 className={cx("name")}>
            {data.nickname}&nbsp;
            {data.tick && (
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
            )}
          </h3>
          <span className={cx("id")}>{data.full_name}</span>
        </Link>
        <div className={cx("description")}>
          <span>
            Sai lầm trong việc tính lãi suất sẽ khiến cho một số người bị sập
            bẫy cho vang nặng lãi, và rơi vào cơn xoáy nợ nần không lối thoát.
          </span>
          <Link to="/"> #dungvancamxahuyenhoctamlinh</Link>
          <div className={cx("address-music")}>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faMusic} /> nhạc nền - Trà dưỡng sinh
              (养生茶）
            </Link>
          </div>
        </div>
        <div className={cx("box-video")}>
            <video autoPlay controls loop muted>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
            </video>
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
