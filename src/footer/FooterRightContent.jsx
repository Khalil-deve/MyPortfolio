export default function FooterRightContent() {
  return (
    <div className="flex flex-col items-center md:items-end">
      <div className="flex space-x-6 mb-4">
        <a
          href="https://github.com/Khalil-deve"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/khalil-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://x.com/Muhammadkh45596?t=jXc_m4dYsp0H1tUPC1ZvWg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © 2023 Muhammad Khalil. All rights reserved.
      </p>
    </div>
  );
}
