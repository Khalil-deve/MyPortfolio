export default function AboutMeSection() {
    return (
        <section id="journey" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="section-title text-3xl font-bold mb-16 text-center">My Journey</h2>

                <div class="timeline">
                   
                    <div class="timeline-container left">
                        <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="bg-blue-100 p-2 rounded-full mr-3">
                                    <i class="fas fa-briefcase text-blue-500"></i>
                                </div>
                                <h3 class="text-xl font-semibold">Senior Frontend Developer</h3>
                            </div>
                            <p class="timeline-date">2021 - Present</p>
                            <p class="text-gray-600 mb-2">Tech Solutions Inc.</p>
                            <p class="text-gray-600">
                                Leading a team of 5 developers to build responsive web applications using React and TypeScript.
                                Implemented performance optimizations that reduced page load times by 40%.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-container right">
                        <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="bg-blue-100 p-2 rounded-full mr-3">
                                    <i class="fas fa-briefcase text-blue-500"></i>
                                </div>
                                <h3 class="text-xl font-semibold">Frontend Developer</h3>
                            </div>
                            <p class="timeline-date">2018 - 2021</p>
                            <p class="text-gray-600 mb-2">Digital Creations LLC</p>
                            <p class="text-gray-600">
                                Developed and maintained client websites using Vue.js and TailwindCSS.
                                Collaborated with designers to implement pixel-perfect UIs.
                            </p>
                        </div>
                    </div>

               
                    <div class="timeline-container left">
                        <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="bg-blue-100 p-2 rounded-full mr-3">
                                    <i class="fas fa-graduation-cap text-blue-500"></i>
                                </div>
                                <h3 class="text-xl font-semibold">Master's in Computer Science</h3>
                            </div>
                            <p class="timeline-date">2016 - 2018</p>
                            <p class="text-gray-600 mb-2">Stanford University</p>
                            <p class="text-gray-600">
                                Specialized in Human-Computer Interaction and Web Technologies.
                                Thesis on "Optimizing Frontend Performance in Single Page Applications".
                            </p>
                        </div>
                    </div>

                    <div class="timeline-container right">
                        <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="bg-blue-100 p-2 rounded-full mr-3">
                                    <i class="fas fa-graduation-cap text-blue-500"></i>
                                </div>
                                <h3 class="text-xl font-semibold">Bachelor's in Software Engineering</h3>
                            </div>
                            <p class="timeline-date">2012 - 2016</p>
                            <p class="text-gray-600 mb-2">University of California</p>
                            <p class="text-gray-600">
                                Graduated with honors. Minor in Graphic Design.
                                President of Web Development Club.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-container left">
                        <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="bg-blue-100 p-2 rounded-full mr-3">
                                    <i class="fas fa-briefcase text-blue-500"></i>
                                </div>
                                <h3 class="text-xl font-semibold">Web Development Intern</h3>
                            </div>
                            <p class="timeline-date">Summer 2015</p>
                            <p class="text-gray-600 mb-2">Innovate Tech</p>
                            <p class="text-gray-600">
                                Built internal tools using JavaScript and jQuery.
                                Gained first professional experience in web development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}