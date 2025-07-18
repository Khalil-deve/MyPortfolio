import portfolio from "./assets/portfolio.jpg";
export default function AboutMeSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
              <img
                src={portfolio}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with over 2 years of
              experience creating web applications. I specialize in JavaScript
              technologies across the whole stack (React.js, Node.js, Express,
              MongoDB).{" "}
            </p>
            <p className="text-gray-600 mb-6">
              My approach combines technical expertise with creative
              problem-solving to deliver high-quality solutions. I'm dedicated
              to writing clean, efficient code and creating intuitive user
              experiences.{" "}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6 text-gray-600">
              <div>
                <h4 className="font-semibold mb-2">
                  <i className="fa-regular fa-circle-check text-indigo-500 mr-2"></i>
                  Problem Solving
                </h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <i className="fa-regular fa-circle-check text-indigo-500 mr-2"></i>
                  Responsive Design
                </h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <i className="fa-regular fa-circle-check text-indigo-500 mr-2"></i>
                  Team Collaboration
                </h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <i className="fa-regular fa-circle-check text-indigo-500 mr-2"></i>
                  Clean Code{" "}
                </h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="https://drive.usercontent.google.com/download?id=10oHdEhfxV3Xgh-EvMVcInwMd35XHsIMs&export=download&authuser=0&confirm=t&uuid=03120f21-cf67-4850-a431-bf9ff529b0fe&at=APcmpoy6yxw75HSVKdq0vM0J0Bqc:1745095721468"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 text-center"
              >
                <i className="fas fa-download ml-2"></i>&nbsp; Download Resume
              </a>

              <a
                href="#contact"
                className="border-2 border-indigo-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
