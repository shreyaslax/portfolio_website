import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello, I'm a dedicated and enthusiastic fresher frontend developer
          skilled in HTML, CSS, JavaScript, React, Redux, Material-UI, Firebase,
          Git, and GitHub. With a strong foundation in web development, I am
          eager to leverage my skills to create stunning and user-friendly
          interfaces. Passionate about creating seamless and engaging
          experiences, I strive to craft websites that leave a lasting
          impression.
        </p>
        <br />

        <p className="text-xl">
          I have hands-on experience in developing responsive and dynamic web
          applications using the latest frontend technologies. With an eye for
          design and a knack for problem-solving, I am ready to collaborate on
          impactful projects, contribute to teams, and embark on a journey of
          continuous learning.
        </p>
      </div>
    </div>
  );
};

export default About;
