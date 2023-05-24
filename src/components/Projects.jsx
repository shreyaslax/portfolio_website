import React from 'react';

import Linkedin from '../projects/Linkedin_capture.PNG';
import Twitter from '../projects/twitter_capture.jpg';
import Netflix from '../projects/netflix_capture.PNG';
import Quote from '../projects/quote-capture.PNG';
import Captcha from '../projects/captcha-capture.PNG';
import Zomato from '../projects/zomato-capture.PNG';

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Linkedin,
      href: 'https://linkedin-clone-7d497.web.app/',
      github: 'https://github.com/shreyaslax/linkedin-clone',
    },

    {
      id: 2,
      src: Twitter,
      href: 'https://twitter-clone-48e93.web.app/',
      github: 'https://github.com/shreyaslax/twitter-clone',
    },

    {
      id: 3,
      src: Netflix,
      href: 'https://netflix-clone-6795d.web.app/',
      github: 'https://github.com/shreyaslax/netflix-clone',
    },

    {
      id: 4,
      src: Quote,
      href: 'https://shreyaslax.github.io/Random-Quote-Generator/',
      github: 'https://github.com/shreyaslax/Random-Quote-Generator',
    },

    {
      id: 5,
      src: Captcha,
      href: 'https://shreyaslax.github.io/captcha-generator/',
      github: 'https://github.com/shreyaslax/captcha-generator',
    },

    {
      id: 6,
      src: Zomato,
      href: 'https://shreyaslax.github.io/zomato-clone/',
      github: 'https://github.com/shreyaslax/zomato-clone',
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, href, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
