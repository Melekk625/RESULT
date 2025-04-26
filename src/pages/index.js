import Image from "next/image";
import Header from "../pages/components/Header";
import Navigate from "../pages/components/Navigate";
import Slider from "../pages/components/Slider";
import Service from "../pages/components/Service";
import Search from "../pages/components/Search";
import Let from '../pages/components/Let';
import Case from "./components/Case";
import Black from "./components/Black";
import Working from "./components/Working";
import Consultation from "./components/Consultation";
import Team from "./components/Team";
import Linkedin from "./components/Linkedin";
import Test from "./components/Test";
import BlackSlider from "./components/BlackSlider";
import Contact from "./components/Contact";
import Input from "./components/Input";
export default function Home() {
  return (
    <div >
      <Header/>
      <Navigate/>
      <Slider/>
      <Service/>
      <Search/>
      <Let/>
      <Case/>
      <Black/>
      <Working/>
      <Consultation/>
      <Team/>
      <Linkedin/>
      <Test/>
      <BlackSlider/>
      <Contact/>
      <Input/>
    </div>
  );
}
