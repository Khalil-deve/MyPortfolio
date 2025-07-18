export default function ContactInfo() {
  return (
    <div className="lg:w-1/2">
      <div className="bg-white p-8 rounded-lg shadow-lg h-full">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <i className="fas fa-map-marker-alt text-indigo-600"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Location</h4>
              <p className="text-gray-600">Mardan, KPK, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <i className="fas fa-envelope text-indigo-600"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email</h4>
              <p className="text-gray-600">muhammadkhalil.web@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <i className="fas fa-phone-alt text-indigo-600"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Phone</h4>
              <p className="text-gray-600">+92 3449478761</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <i className="fas fa-clock text-indigo-600"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Working Hours</h4>
              <p className="text-gray-600">
                Mon-Fri: 9AM - 5PM
                <br />
                Sat: 10AM - 2PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-medium text-gray-800 mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Khalil-deve"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/khalil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/Muhammadkh45596?t=jXc_m4dYsp0H1tUPC1ZvWg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
