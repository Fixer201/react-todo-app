const Header = () => {
  return (
    <header className="fixed top-4 w-10/12 mx-auto left-0 right-0 z-1000">
      {/* Desktop Navbar */}
      <nav className="hidden sm:block h-16 bg-primary max-w-[1500px] mx-auto border border-secondary rounded-2xl glow-secondary">
        <div className="flex px-8 lg:px-12 h-full w-full items-center font-light">
          <div className="flex gap-8 text-sm lg:text-xl items-center">
            <a href="#" className="hidden lg:block">
              <img
                src="/logo.svg"
                width="50"
                height="50"
                alt="Logo"
                className="glow-icon-secondary hover:scale-110 transition-transform"
              />
            </a>
            <a href="/" className="font-black">
              EasyToDo
            </a>
          </div>

          <ul className="flex gap-4 md:gap-8 text-sm md:text-lg xl:text-xl items-center mx-auto">
            <a href="/" className="link">
              Home
            </a>
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Our team
            </a>
            <a href="#" className="link">
              Services
            </a>
          </ul>

          <div className="flex gap-2 md:gap-8 items-center">
            <button className="primary-button font-normal text-sm xl:text-lg xl:w-28 h-12">
              Login
            </button>
            <button className="primary-button font-normal text-sm xl:text-lg xl:w-28 h-12">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
