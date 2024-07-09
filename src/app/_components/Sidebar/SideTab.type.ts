import { faBook, faGear, faHouse, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export interface Tab {
  icon: any;
  path: string;
  title: string;
}

const tabs: { [key: string]: Tab } = {
  home: {
    icon: faHouse,
    path: "/home",
    title: "Home",
  },
  pack: {
    icon: faLayerGroup,
    path: "/pack",
    title: "Pack",
  },
  learn: {
    icon: faBook,
    path: "/learn",
    title: "Learning",
  },
  config: {
    icon: faGear,
    path: "/config",
    title: "Settings",
  },
};

export default tabs;
