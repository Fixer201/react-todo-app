const Footer = () => {
  return (
    <footer className="w-10/12 max-w-[1500px] self-center mt-12 mb-4 bg-primary border border-secondary glow-secondary rounded-xl h-32 z-10">
      <article className="flex flex-col justify-center items-center h-full gap-4 p-6">
        <p className="md:text-lg">2025 EasyToDo. Not just another service. </p>
        <div className="flex gap-8 text-center">
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
      </article>
    </footer>
  );
};

export default Footer;
