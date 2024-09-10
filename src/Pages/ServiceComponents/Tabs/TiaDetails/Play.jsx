import React from "react";
import playkids from "../../../../assets/HomeImages/playkids.jpeg";

const Play = () => {
  const PlayDetails = [
    {
      title: "1. Fine motor skills",
      content: `Fine motor skills are involved in smaller movements that occur in the wrists, hands, fingers, and the feet and toes. They participate in smaller actions such as picking up objects between the thumb and finger, writing carefully, and even blinking.`,
    },
    {
      title: "2.Gross motor skills",
      content: `Gross motor skills are important to enable children to perform every day functions, such as walking, running, skipping, as well as playground skills and sporting skills.`,
    },
    {
      title: "3.Emotional Skills",
      content: `Emotional development involves learning what feelings and emotions are, understanding how and why they happen, recognising one’s own feelings and those of others, and developing effective ways of managing them.`,
    },
    {
      title: "4.Social Skills",
      content: `Social skill facilitates interaction and communication with others. This learning improves students’ communication with peers and adults, improves cooperative teamwork, and helps them become effective, caring, concerned members of their communities.`,
    },
    {
      title: "5.Communication Skills",
      content: `Communication development for young children includes gaining the skills to understand and to express thoughts, feelings, and information.`,
    },
    {
      title: "6.Cognitive Skills",
      content: `Cognitive skill development in children involves the progressive building of learning skills, such as attention, memory and thinking. These crucial skills enable children to process sensory information and eventually learn to evaluate, analyse, remember, make comparisons and understand cause and effect.`,
    },
  ];

  const courses = [
    {
      title: "Milky course - Infant or Toddler ( 2 to 3 years)",
      details: [
        "Create a safe and caring space for the child",
        "Help them trust themselves and their surroundings",
        "Develop gross motor coordination, fine motor skills, and language skills",
        "Encourage them to become more independent with  their daily tasks and activities.",
      ],
    },
    {
      title: "Candy course - Primary (3 to 6 years)",
      details: [
        "Encourage the child to become more independent, persistent, and self-regulated",
        "Support social skills through respectful communication and appropriate consequences",
        "Provide diverse materials to help with sensory skills, literacy, and math",
        "Offer chances for imaginative play to boost creativity and self-expression",
      ],
    },
    {
      title: "Eddy course - Elementary (6 to 12 years) ",
      details: [
        "Provide chances for the child to explore and learn together based on their interests",
        "Help the child build self-confidence, imagination, and independence",
        "Support the child’s understanding of their role in their community, culture, and the natural world",
      ],
    },
  ];
  return (
    <>
      <div className="border-b-2 border-primary py-10 lg:px-10 px-5">
        <div className="flex justify-center items-center pb-10 "data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-1/2 px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-PLAY</span>  offers a nurturing environment where children explore and
            master skills through hands-on learning, engaging all five senses.
            Following Montessori principles, our trained staff fosters
            discovery, creativity, and a love for learning.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-10 ">
          <div className=" lg:w-1/2 flex flex-col justify-around items-center leading-tight">
            {PlayDetails.map((PlayDetails, index) => (
              <div key={index} className=""data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200">
                <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                  {PlayDetails.title}
                </h2>
                <p className="lg:text-base text-sm tracking-wider text-gray-700 mb-3">
                  {PlayDetails.content}
                </p>
              </div>
            ))}
          </div>
          <div className=" lg:w-1/2 flex flex-col items-center gap-5">
            {courses.map((Courseinside, index) => (
              <div key={index} className=""data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200">
                <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                  {Courseinside.title}
                </h2>
                <ul className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc mb-5 "data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
                  {Courseinside.details.map((Courseinside1, detailIndex) => (
                    <li key={detailIndex}>{Courseinside1}</li>
                  ))}
                </ul>
              </div>
            ))}
            <img src={playkids} alt="" className="lg:w-full lg:h-80 shadow-lg rounded-2xl object-cover" data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
