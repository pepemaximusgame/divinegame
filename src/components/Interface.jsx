import { motion } from "framer-motion";
const Section =(props)=>{
    const {children} = props;
    return(
        <section
        className={'h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center'}
        > {children} </section>
    ) 

}

export const Interface = () => {
return(
    <div className="flex flex-col items-center w-screen">
    
    <AboutSection/>
    <Section>
        <h1>Home</h1>
    </Section>

    <SkillsSection/>

   {/* <ContactSection/> */}
    </div>
)}

const AboutSection = () => {
    return(
<Section>
      <h1 className="text-4xl font-extrabold leading-snug">
        Hello, I'm The
        <br />
        <span className="bg-white px-1 italic">PEPE MAXIMUS</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        The Amphibion Empreror of Gains
        <br />
        Pepe Maximus is no ordinary frog--he's a legend in the making.  <br />
        With a heart as big as his biceps, Pepe Maximus is here to show you that <br />
         with hard work and determination, anything is possible.
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Let's Play
      </motion.button>
    </Section>
    );
   
}

const skills = [
  {
    title: "Strength",
    level: 80,
  },
  {
    title: "Speed",
    level: 90,
  },
  {
    title: "Agility",
    level: 90,
  },
  {
    title: "Endurance",
    level: 60,
  },
  {
    title: "Reflexes",
    level: 40,
  },
];
// const languages = [
//   {
//     title: "🇫🇷 French",
//     level: 100,
//   },
//   {
//     title: "🇺🇸 English",
//     level: 80,
//   },
//   {
//     title: "🇯🇵 Japanese",
//     level: 20,
//   },
// ];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
    return (
      <Section>
        <h2 className="text-5xl font-bold">Contact me</h2>
        <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
          <form>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
              Submit
            </button>
          </form>
        </div>
      </Section>
    );
  };