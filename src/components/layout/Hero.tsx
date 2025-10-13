const Hero = () => {
  return (
    <div>
      <div className="flex h-96 mt-24 rounded-2xl z-10">
        <div className="flex lg:mx-96 w-full h-full z-10">
          <div className="flex flex-col m-auto gap-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black  text-white glow-text-secondary">
              Welcome to EasyToDo
            </h1>
            <p className="text-lg md:text-2xl text-white glow-text-secondary">
              Your ultimate task management solution
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <button className="primary-button text-lg font-bold w-36 md:w-48 h-14">
                Get Started
              </button>

              <button
                className="secondary-button font-bold
               text-lg  w-36 md:w-48 h-14"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
