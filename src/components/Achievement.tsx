import React from 'react';

const Achievement = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-96 mt-12 mb-12 bg-primary border border-secondary rounded-xl h-auto z-10 p-12 gap-8">
      <h2
        className="text-4xl w-fit font-black relative overflow-hidden
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 pb-2 after:bg-white after:transition-all after:duration-500 hover:after:w-full text-white text-center glow-icon-secondary transition duration-200"
      >
        Why Choose EasyToDo?
      </h2>
      <div className="grid group grid-cols-3 gap-8">
        <div className="flex flex-col items-center group-hover:scale-90 hover:scale-110 transition-transform duration-300 text-center p-6 bg-secondary rounded-lg glow-secondary">
          <img
            src="/features/user-frendly-ui-feature.svg"
            alt="user friendly ui feature"
            className="w-20 h-20 mb-4 hover:scale-110 transition-transform duration-200"
          />
          <h3 className="text-2xl font-bold mb-2 text-white">
            User-Friendly Interface
          </h3>
          <p className="text-white">
            Intuitive design that makes task management a breeze for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center group-hover:scale-90 hover:scale-110 transition-transform duration-300 text-center p-6 bg-secondary rounded-lg glow-secondary">
          <img
            src="/features/collaboration-feature.svg"
            alt="collaboration feature"
            className="w-20 h-20 mb-4 hover:scale-110 transition-transform duration-200"
          />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Seamless Collaboration
          </h3>
          <p className="text-white">
            Work together with your team in real-time, no matter where you are.
          </p>
        </div>
        <div className="flex flex-col items-center group-hover:scale-90 hover:scale-110 transition-transform duration-300 text-center p-6 bg-secondary rounded-lg glow-secondary">
          <img
            src="/features/integration-feature.svg"
            alt="integration feature"
            className="w-20 h-20 mb-4 hover:scale-110 transition-transform duration-200"
          />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Powerful Integrations
          </h3>
          <p className="text-white">
            Connect with your favorite tools and streamline your workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
