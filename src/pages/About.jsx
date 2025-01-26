import { skills } from "../routes/skills";

const About = () => {
  return (
    <>
      <section className=" w-full min-h-full px-10 flex justify-center items-center flex-col bg-background">
        <h1 className="text-3xl lg:text-4xl my-10 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center p-5 bg-primary-color shadow-md shadow-gray-600 rounded-lg  ">
          <h1 className="text-3xl lg:text-4xl  font-montserrat bg-gradient-to-br font-extrabold from-red-400 via-blue-400 to-pink-700 bg-clip-text text-transparent ">
            Hello, Im Athul Sabu
          </h1>
          <p className="text-primary-text text-sm font-montserrat my-4 lg:text-md ">
            a developer with passion to build innovative techologies with the
            possible tools available.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center p-5 bg-primary-color shadow-md shadow-gray-600 rounded-lg min-w-[200px] sm:w- ">
            <h1 className="text-3xl lg:text-4xl my-10 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              Skills
            </h1>
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="gap-3 flex text-white justify-center"
                >
                  <span>{skill.name}</span>
                  {skill.Icon}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center p-5 bg-primary-color shadow-md shadow-gray-600 rounded-lg min-w-[200px] sm:w- ">
            <h1 className="text-3xl lg:text-4xl my-10 font-montserrat bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              Skills
            </h1>
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="gap-3 flex text-white justify-center items-center"
                >
                  <span>{skill.name}</span>
                  {skill.Icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
