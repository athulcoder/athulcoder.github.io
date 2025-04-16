import { motion } from "framer-motion";
import { HeroIMG } from "../assets/images";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col   w-full justify-center py-10 bg-background gap-12 min-h-screen lg:flex-row  lg:gap-8 lg:items-center lg:w-full lg:justify-center  px-5 ">
      <motion.div
        className=" flex flex-col justify-center items-start mx-5  h-[auto] lg:w-[450px] "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-montserrat font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
          Athul Sabu
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
      </motion.div>
      <motion.div
        className="mx-5 min-w-[200px] self-center lg:w-[450px] "
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
      >
        <img
          src={HeroIMG}
          alt=" hero image "
          className="w-fit h-[400px] rounded-xl shadow-lg shadow-black"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
