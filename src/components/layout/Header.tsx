const Header = () => {
  return (
    <nav className="flex justify-between items-center font-light px-12 m-12 h-16 text-xl bg-primary border border-secondary rounded-2xl glow-secondary z-10">
      <div className="flex gap-8 w-40 justify-center items-center">
        <img
          src="logo.svg"
          width="50"
          height="50"
          alt="Logo"
          className="glow-icon-secondary hover:scale-110 transition-transform"
        />
        <p className="font-black">EasyToDo</p>
      </div>

      <ul className="flex gap-8 items-center">
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
      <div className="flex gap-8 w-40 justify-center">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Header;
