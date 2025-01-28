import { skills } from "../routes/skills";
import { tools } from "../routes/tools";

const About = () => {
  return (
    <>
      <section className=" w-full min-h-screen px-10 flex justify-start items-center flex-col bg-background">
        <h1 className="text-3xl lg:text-4xl my-10 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center p-4 my-5 bg-primary-color  rounded-lg shadow-lg transform transition-transform min-w-[200px] sm:w- ">
          <h1 className="text-3xl lg:text-4xl  font-montserrat text-primary-text ">
            Hello, Im Athul Sabu
          </h1>
          <p className="text-secondary-text text-sm font-montserrat my-4 lg:text-md ">
            a developer with passion to build innovative techologies with the
            possible tools available.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-0 sm:gap-10 ">
          <div className="flex flex-col justify-center sm:col-span-1 items-center p-4 my-5 bg-primary-color shadow-lg transform transition-transform rounded-lg min-w-[200px] sm:w- ">
            <h1 className="text-2xl  lg:text-4xl my-4 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              Skills
            </h1>
            <ul className="list-disc flex flex-col justify-start items-start">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="gap-3 flex text-primary-text justify-center items-center"
                >
                  {skill.Icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center sm:col-span-1 items-center p-4 my-5 bg-primary-color shadow-lg transform transition-transform rounded-lg min-w-[200px] sm:w- ">
            <h1 className="text-2xl  lg:text-4xl my-4 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              Tools
            </h1>
            <ul className="list-disc flex flex-col justify-start items-start">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="gap-3 flex text-primary-text justify-center items-center"
                >
                  {tool.Icon}
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center sm:col-span-2 items-center p-4 my-5 bg-primary-color shadow-lg transform transition-transform rounded-lg min-w-[200px] sm:w- ">
            <h1 className="text-2xl  lg:text-4xl my-4 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              Education
            </h1>
            <span className="text-xl self-start lg:text-3xl my-4 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-light">
              BTech
            </span>
            <h3 className="text-sm text-secondary-text">
              Bachelor of Technology in Computer Science and Engineering (BTech
              CSE) Muthoot Institute of Technology and Science 2024 – Present
              Consistently demonstrating academic excellence.
            </h3>
            <span className="text-xl self-start lg:text-3xl my-4 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-light">
              Grade 12
            </span>
            <h3 className="text-sm text-secondary-text">
              St Joseph HSS Pullurampara 2022 – 2024 Scored 99.08%, showcasing
              strong analytical and problem-solving skills. Excelled in
              Mathematics and Computer Science
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
