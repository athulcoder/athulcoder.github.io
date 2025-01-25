import { CiPhone } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
export const routes =[
{
    title :"Home",
    href :"/",
    Icon: CiHome
    
}
,
{
    title:"Showcase",
    href:"/works",
    Icon:AiOutlineFundProjectionScreen
 
},
{
    title:"Contact",
    href:"/contact",
    Icon:CiPhone
  

},
{
    title:"About",
    href:"/about",
    Icon:CgProfile

}

]