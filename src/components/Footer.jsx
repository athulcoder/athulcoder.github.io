const Footer = () => {
  return (
    <footer className="bg-primary-color text-white px-2 py-4 w-full h-[100px]  ">
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          {/* Flex layout with wrap on small screens */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="https://github.com/athulcoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-xl text-secondary-text hover:text-accent  transition-all flex items-center space-x-2"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_i_athul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-secondary-text hover:text-accent  transition-all flex items-center space-x-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/athul-sabu-84360a261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-secondary-text hover:text-accent  transition-all flex items-center space-x-2"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://discord.com/users/athulcoder7330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-secondary-text hover:text-accent  transition-all flex items-center space-x-2"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="mailto:athulsabu324@gmail.com"
              className="text-base sm:text-xl text-secondary-text hover:text-accent transition-all flex items-center space-x-2"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm opacity-75 text-primary-text">
              &copy; 2025 Athul Sabu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
