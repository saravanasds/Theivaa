import React from "react";
import flim from "../../../../assets/HomeImages/flim.jpeg";

const Media = () => {
  const Flim = [
    {
      h2: "FILM APPRECIATION COURSE",
    },
    {
      title: "1.SCRIPT WRITING",
      content: ` In MEDIAS we teach you the script writing such as film shooting script, narrative script. It will be trained effectively by our highly talented and experienced trainers.`,
    },
    {
      title: "2.FILM MAKING",
      content: `Filmmaking involves a number of discrete stages such as Development, Pre-production, Production, Post-
          production and Distribution. Each and every stage will be taught to the students in an effective manner. In MEDIAS
          we teach you photography, cinematography, editing in the best possible way till you achieve a goal.`,
    },
    {
      title: "3.SPOT EXPERIENCE",
      content: ` The benefit of spot experience is you can learn and can get more awareness on new things. We teach how to schedule and organize the programs by our experienced trainers.`,
    },
    {
      title: "4.INTERNSHIP PROGRAMS",
      content: `Internships provide hands-on experience and insight into your field, helping you test your career plans. They boost your confidence, show how your coursework applies to real-world jobs, and strengthen your resume.`,
    },
  ];

  const ads = [
    {
      title: "1.ADVERTISEMENT & RELEASES",
      content: `We do all types of ads such as concept, narrative, animated ads and studio set up programs. We make your products to reach a high level by releasing in all local and satellite channels.`,
    },
    {
      title: "2.FILM PRODUCTION",
      content: `We create short films, corporate films, documentary films and wedding videos and launch in air medium. We encourage the students and give a great support to implement their ideas in the those films.`,
    },
    {
      title: "3.EVENT MANAGEMENT",
      content: `We do event management programs such as product promotion, model coordination, arranging celebrities for function etc.`,
    },
  ];

  return (
    <>
      <div className="border-b-2 border-primary py-10 lg:px-10 px-5">
        <div className="flex justify-center items-center pb-10 "data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-full px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-MEDIAS</span> provides hands-on training for a career in film. Learn
            film making through practical experience in writing, lighting,
            camerawork, editing, and directing, guided by industry experts. We
            offer courses for all levels, from master artists to hobbyists, with
            no prior experience needed. Create short films, TV ads, or family
            documentaries in our practical lab for visual communication
            students.
          </p>
        </div>

        <div className="">
          <div className="text-center pb-10"data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
            <h2 className="lg:text-2xl text-xl font-semibold text-darkred mb-2">
              HOW TO BECOME A FILM MAKER
            </h2>
            <p className="lg:text-lg text-sm  text-gray-600 mb-2">
              If you have a creative vision, strong dedication, and the ability
              to create from scratch, becoming a film director could be your
              dream job. If you're ready to commit, go for it!
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <div className=" lg:w-1/2 flex flex-col justify-around items-center">
              {Flim.map((Flim1, index) => (
                <div key={index} className=""data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200">
                  <h2 className="lg:text-2xl text-xl font-semibold text-primary mb-5">
                    {Flim1.h2}
                  </h2>
                  <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                    {Flim1.title}
                  </h2>
                  <p className="lg:text-base text-sm tracking-wider text-gray-700 mb-3">
                    {Flim1.content}
                  </p>
                </div>
              ))}
            </div>
            <div className=" lg:w-1/2 flex flex-col  justify-end items-center gap-5">
              <img src={flim} alt="" className="lg:w-full lg:h-80  shadow-lg rounded-2xl object-cover" data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"/>

              {ads.map((ad1, index) => (
                <div key={index} className=""data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200">
                  <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                    {ad1.title}
                  </h2>
                  <p className="lg:text-base text-sm tracking-wider text-gray-700 mb-3">
                    {ad1.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
