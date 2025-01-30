import { HeroIMG } from "../assets/images";
import Button from "./Button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="flex flex-col   w-full  py-10 bg-background gap-12 min-h-screen lg:flex-row  lg:gap-8 lg:items-center lg:w-full lg:justify-center  px-5 ">
      <div className=" flex flex-col justify-center items-start mx-5  h-[auto] lg:w-[450px] ">
        <p className=" font-montserrat font-light text-4xl text-accent py-4 text-left sm:text-3xl  ">
          Hi
        </p>
        <h1 className="text-5xl font-montserrat font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
          Im Athul Sabu
        </h1>
        <p className="text-secondary-text  text-[14px] align pt-4 font-montserrat sm:text-lg leading-6">
          A Developer passionate about software development and crafting
          impactful digital solutions. I specialize in building efficient,
          user-friendly applications and constantly strive to expand my skills
          and knowledge
        </p>

        <div className="gap-5 flex">
          <Link to="contact/">
            <Button label="Reach Me"></Button>
          </Link>

          <Link to="works/">
            <Button label="Portfolio"></Button>
          </Link>
        </div>
      </div>
      <div className="mx-5 min-w-[200px] self-center lg:w-[450px] ">
        <img src={HeroIMG} alt=" hero image " className="w-full rounded-xl " />
      </div>
    </section>
  );
};

export default Hero;
