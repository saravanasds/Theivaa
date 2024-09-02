import React from "react";
import mock1 from "../../../../assets/HomeImages/mock1.jpeg"
import mock2 from "../../../../assets/HomeImages/mock2.jpg"

const mock = () => {
  const mock = [
    {
      title: "1.What Is TIA-MOCK?",
      content: `Talent Initiators & Accelerators India introduces the Miracle Of Communication & Knowledge. Our program offers a universal language, TIA Mock, enabling easy communication anywhere. Inspired by the Babel story, we focus on direct, effective language learning to connect with others seamlessly.`,
    },
    {
      title: "2.Why TIA-MOCK?",
      content: `We’re excited to offer TIA Mock, a unique language program inspired by our founder, Mrs. Sheeba Joseph’s global experiences. Learning new languages helps you connect with diverse cultures, enhances memory, and boosts intellectual skills. Multilingual individuals are more adept in various fields and less prone to cognitive disorders. Join us to become a global citizen and unlock your brain’s full potential.`,
    },
    {
      title: "3.How We Do TIA-MOCK?",
      content: `Our R&D team has developed a state-of-the-art software that simplifies learning languages like German, French, English, Mandarin, and Hindi. The program features 12 stages with 25 formulas each, totaling 300 formulas. It’s designed to accommodate learners of all ages and paces, helping you confidently speak a new language in a short time.`,
    },
    {
      title: "4.When can a student join for TIA-MOCK?",
      content: `We offer three monthly batches: EarlyBird (first two weeks), Midring (mid-month), and Last-Frog (last weeks). Each batch has limited seats for personalized attention and is organized by group size.`,
    },
  ];
  return (
    <>
      <div className="border-b-2 border-primary py-10 lg:px-10 px-5">
        <div className="flex justify-center items-center pb-10 "data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-1/2 px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-MOCK</span>  hopes you're having a great day as you explore our website.
            We're excited to make a positive impact on everyone who joins our
            family today.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
        <div className=" lg:w-1/2 flex flex-col justify-around items-center">
          {mock.map((mock1, index) => (
            <div key={index} className=""data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
              <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                {mock1.title}
              </h2>
              <p className="lg:text-base text-sm tracking-wider text-gray-700 mb-5">
                {mock1.content}
              </p>
            </div>
          ))}
        </div>
       <div className=" lg:w-1/2 flex lg:flex-col gap-10">
         <img src={mock1} alt="" className=' lg:w-full lg:h-auto  shadow-lg rounded-2xl'data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"/>
         <img src={mock2} alt="" className="lg:full lg:h-auto shadow-lg  rounded-2xl"
          data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"/>
       </div>
        </div>
      </div>
    </>
  );
};

export default mock;
