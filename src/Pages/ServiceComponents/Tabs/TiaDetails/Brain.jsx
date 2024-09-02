import React from "react";

import brain2 from "../../../../assets/HomeImages/brain2.jpeg";

import herotia from "../../../../assets/HomeImages/herotia.jpeg";

const TiaDetails = () => {
  const sections = [
    {
      title: "1. Drinking More Water",
      content: `Keeping hydrated boosts brain performance. The brain is 85% water, and water is crucial for brain signals and energy. Drinking water helps with thinking, memory, and creativity. Start your day with a cup of water to kickstart your brain function.`,
    },
    {
      title: "2. Brain Buttons Exercise",
      content: `This exercise increases blood flow to the brain. Place one hand on your navel and use the other hand to rub the area between the first and second ribs on each side of your sternum. This stimulates the brain’s blood flow and can help improve brain function.`,
    },
    {
      title: "3. Deep Breathing",
      content: `Deep breathing is essential for brain health. Your brain needs a lot of oxygen, and deep breathing helps deliver it. Breathe in deeply so your belly expands, and breathe out so it falls. Avoid shallow breathing from your chest, which can increase stress.`,
    },
  ];

  const brainWaves = [
    {
      title: "Gamma Waves (40-100 Hz)",
      content: `Function: Higher cognitive functions, learning, memory.`,
      details: [
        "Too Much: Anxiety, stress.",
        "Too Little: Learning disabilities.",
        "Optimal: Cognitive tasks, perception.",
        "Boost: Meditation.",
      ],
    },
    {
      title: "Beta Waves (12-40 Hz)",
      content: `Function: Conscious thought, focus, problem-solving.`,
      details: [
        "Too Much: Stress, anxiety.",
        "Too Little: Daydreaming, poor cognition.",
        "Optimal: Task completion.",
        "Boost: Caffeine, stimulants.",
      ],
    },
    {
      title: "Alpha Waves (8-12 Hz)",
      content: `Function: Relaxation, bridging conscious and subconscious.`,
      details: [
        "Too Much: Daydreaming, too relaxed.",
        "Too Little: Stress, insomnia.",
        "Optimal: Relaxation.",
        "Boost: Relaxants, some antidepressants.",
      ],
    },
    {
      title: "Theta Waves (4-8 Hz)",
      content: `Function: Deep relaxation, creativity, emotional connection.`,
      details: [
        "Too Much: Depression, impulsivity.",
        "Too Little: Anxiety, poor emotional awareness.",
        "Optimal: Intuition, creativity.",
        "Boost: Depressants.",
      ],
    },
    {
      title: "Delta Waves (0-4 Hz)",
      content: `Function: Deep sleep, healing, bodily functions.`,
      details: [
        "Too Much: Learning disabilities, brain injuries.",
        "Too Little: Poor sleep, inability to rejuvenate.",
        "Optimal: Restorative sleep.",
        "Boost: Sleep, depressants.",
      ],
    },
  ];

  const requirements = [
    "Brain exercises enhance learning through physical movement.",
    "No equipment needed.",
    "Effective for people of all ages, including those with disabilities.",
    "Useful in diverse cultural groups and improves skills like listening, reading, concentration, and memory.",
    "Benefits include better blood flow, balance, and overall health, especially for older adults.",
  ];

  return (
    <div className="border-b-2 border-primary ">
      <div
  className="relative w-full h-[300px] hidden lg:block"
  style={{
    backgroundImage: `url(${herotia})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  {/* Background with blur effect */}
  <div
    className="absolute inset-0 z-1 bg-opacity-10 blur-[1px]"
    style={{
      backgroundImage: `url(${herotia})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />
  
  {/* Text without blur effect */}
  <div className="absolute inset-0 flex items-center justify-start pl-10 z-2 text-white font-semibold lg:text-3xl text-lg uppercase"style={{
    textShadow:"0px 2px 2px rgba(0,0,0,0.7)"
  }}>
    Talent Initiators and Talent Accelerators
  </div>
</div>
      <div className="flex justify-center items-center py-10 "data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
        <p className="lg:w-1/2 h-auto text-center lg:text-lg text-sm text-primary tracking-wider px-10">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-BRAIN</span> is a brain training program designed to unlock the hidden
          talents of children. Unlike traditional education, which often focuses
          on just one side of the brain, TIA-BRAIN helps kids develop both sides
          equally. Using advanced techniques and technology, we aim to enhance
          their learning potential, preparing them for academic and life
          success. We encourage you to use our program to achieve your dreams
          and lead a fulfilling life.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row pb-10">
        {/* Brain Fitness Content */}

        <div className="w-full md:w-1/2 lg:px-10 px-5">
          <h2 className="lg:text-3xl text-2xl font-semibold text-primary tracking-wider pt-5 pb-5 uppercase"data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
            Brain Fitness
          </h2>
          {sections.map((section, index) => (
            <div key={index} className="mb-8"data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300">
              <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                {section.title}
              </h2>
              <p className="lg:text-base text-sm tracking-wider text-gray-700">
                {section.content}
              </p>
            </div>
          ))}
          <div>
            <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3"data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
              Requirements
            </h2>
            <ul className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc pl-5"data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center "data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
            {" "}
            <img src={brain2} alt="" className="w-full lg:h-72 h-52 mt-5 shadow-lg rounded-2xl" />
          </div>
        </div>

        {/* Brain Waves Content */}
        <div className="w-full md:w-1/2 lg:px-10 px-5">
          <h2 className="lg:text-3xl text-2xl font-semibold text-primary tracking-wider pt-5 pb-5 uppercase"data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
            Brain Waves
          </h2>
          {brainWaves.map((wave, index) => (
            <div key={index} className="mb-8"data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
              <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                {wave.title}
              </h2>
              <p className="lg:text-base text-sm tracking-wider text-gray-700 mb-3">
                {wave.content}
              </p>
              <ul className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc pl-5">
                {wave.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiaDetails;
