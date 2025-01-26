import { BsBootstrap } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiAndroidstudio, SiPycharm } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const tools = [
  {
    name: "VSCode",
    Icon: <VscVscode />,
  },
  {
    name: "PyCharm",
    Icon: <SiPycharm></SiPycharm>,
  },
  {
    name: "Andriod Studio",
    Icon: <SiAndroidstudio></SiAndroidstudio>,
  },
  {
    name: "Bootstrap",
    Icon: <BsBootstrap></BsBootstrap>,
  },
  {
    name: "MySQL",
    Icon: <DiMysql></DiMysql>,
  },
  {
    name: "Github",
    Icon: <FaGithub></FaGithub>,
  },
  {
    name: "Git",
    Icon: <FaGitAlt></FaGitAlt>,
  },
];
