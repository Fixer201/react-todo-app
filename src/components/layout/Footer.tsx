const Footer = () => {
  return (
    <footer className="m-12 bg-primary border border-secondary glow-secondary rounded-xl h-32 z-10">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <p className="text-lg">2025 EasyToDo. Not just another service. </p>
        <div className="flex gap-8">
          <a href="#" className="link">
            Privacy Policy
          </a>
          <a href="#" className="link">
            Terms of Service
          </a>
          <a href="#" className="link">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
