import HomePage from "../Page/HomePage";
import HeaderOnly from '../Layout/HeaderOnly'
import Following from "../Page/Following";
import Profile from "../Page/Profile";
import Upload from "../Page/Upload";
import Search from "../Layout/Search";
import Live from "../Page/Live";
import Explore from "../Page/Explore";
import config from "../config";

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live},
  { path: config.routes.explore, component: Explore}
];

const privateRoute = [];

export { publicRoutes, privateRoute };
