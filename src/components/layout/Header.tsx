const Header = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-1000">
      <div className="mx-96 h-16 bg-primary border border-secondary rounded-2xl glow-secondary">
        <div className="flex px-12 h-full w-full items-center font-light text-xl">
          <div className="flex gap-8 items-center">
            <a href="#">
              <img
                src="logo.svg"
                width="50"
                height="50"
                alt="Logo"
                className="glow-icon-secondary hover:scale-110 transition-transform"
              />
            </a>
            <a className="font-black">EasyToDo</a>
          </div>

          <ul className="flex gap-8 items-center mx-auto">
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

          <div className="flex gap-8 items-center">
            <button className="primary-button font-normal w-28 h-12">
              Login
            </button>
            <button className="primary-button font-normal w-28 h-12">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
