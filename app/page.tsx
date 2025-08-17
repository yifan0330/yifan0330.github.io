import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-emerald-50 min-h-[75vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 py-8 w-full">
          <div className="text-center">
            <div className="mb-8">
              <div className="relative">
                <img 
                  src="/yifan_photo.webp"
                  alt="Yifan Yu"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-white/50"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/20 w-48 h-48 mx-auto"></div>
              </div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Yifan Yu
            </h1>
            <h2 className="text-2xl text-secondary-700 mb-2 font-medium">Health Data Science Researcher</h2>
            <h3 className="text-xl text-secondary-600 mb-8">University of Oxford</h3>
            
            <div className="flex justify-center space-x-8 text-lg">
              <a href="mailto:yifan.yu@keble.ox.ac.uk" className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-primary-700 hover:bg-primary-100 hover:text-primary-800 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="mr-2">📧</span>
                Email
              </a>
              <a href="https://www.bdi.ox.ac.uk/Team/yifan-yu" className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="mr-2">🏠</span>
                BDI Profile
              </a>
              <a href="https://github.com/yifan0330" className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-accent-700 hover:bg-accent-100 hover:text-accent-800 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="mr-2">💻</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-secondary-50 to-primary-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-emerald-600 bg-clip-text text-transparent mb-10 text-center">About</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="prose prose-lg text-secondary-700 max-w-none">
              <p className="mb-6 leading-relaxed">
  I am a postdoctoral researcher in the NISOx group at the University of Oxford, working with&nbsp; 
  <a href="https://www.bdi.ox.ac.uk/Team/t-e-nichols" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
    Prof. Thomas Nichols
  </a>. 
  I previously received my Ph.D. in Health Data Science from the same group, supported by the National Institutes of Health (NIH) studentship, 
  during which I was also affiliated with the Department of Computer Science and the Nuffield Department of Population Health.
</p>

<p className="mb-6 leading-relaxed">
  My research focuses on statistical methods for neuroimaging, including meta-analysis of fMRI data, 
  spatial modelling of brain lesions, and applications of machine learning in neuroscience. 
  A central theme of my work is developing new statistical frameworks for neuroimaging data analysis, 
  with a particular emphasis on coordinate-based meta-analysis and spatial modelling approaches.
</p>

            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-accent-600 bg-clip-text text-transparent mb-8">Education</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-primary-500 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">Ph.D. in Health Data Science</h3>
                      <p className="text-primary-600 font-medium">🎓 University of Oxford</p>
                    </div>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">2019 - 2025</span>
                  </div>
                  <ul className="text-secondary-600 text-sm space-y-1">
                    <li>• Supervised by Prof. Thomas Nichols</li>
                    <li>• NIH studentship funded</li>
                    <li>• Computer Science & Population Health</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">BSc Mathematics (First Class)</h3>
                      <p className="text-emerald-600 font-medium">🎓 University of Manchester</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">2016 - 2019</span>
                  </div>
                  <ul className="text-secondary-600 text-sm space-y-1">
                    <li>• Ranked #2/340 (2016-2017)</li>
                    <li>• Dissertation advised by Prof. Korbinian Strimmer and Prof. Francoise Tisseur</li>
                    <li>• Maths Excellence Awards</li>
                    <li>• International Student Scholarship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="bg-gradient-to-r from-secondary-50 to-emerald-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-12 text-center">Research Projects & Publications</h2>
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                📊 Efficient Lesion Estimation Using a Spatial Poisson Process and a Scalable Approximate Model
              </h3>
              <p className="mb-4 font-medium">
                <span className="font-bold text-secondary-900">Yifan Yu</span><span className="text-secondary-500">, Thomas Nichols</span>
              </p>
              <p className="text-secondary-700 leading-relaxed">
                We propose a novel approach to investigate the association between lesion incidence and spatial varying risk factors, 
                such as age and CVR factors, and developed a robust, computationally efficient and scalable statistical inference framework.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                🧠 Meta Regression and Inference for fMRI Data Across Multiple Groups
              </h3>
              <p className="mb-2 font-medium">
                <span className="font-bold text-secondary-900">Yifan Yu</span><span className="text-secondary-500">, Lauren Hill-Bowen, Michael Cody Riedel, Angela Laird, Thomas Nichols</span>
              </p>
              <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mb-4">Under review</span>
              <p className="text-secondary-700 leading-relaxed">
                We extend Coordinate-based meta-regression (CBMR) to allow for different stochastic models and build a statistical 
                inference framework using bootstrapping approach. This new approach allows both group-specific and group comparison 
                of brain activation intensity estimations.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                📈 Coordinate-Based Meta-regression of fMRI data
              </h3>
              <p className="mb-2 font-medium">
                <span className="font-bold text-secondary-900">Yifan Yu</span><span className="text-secondary-500">, Rosario Pintos Lobo, Michael Cody Riedel, Angela Laird, Thomas Nichols</span>
              </p>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">Published on Biostats</span>
              <p className="text-secondary-700 leading-relaxed">
                We develop a novel Meta-regression framework, as a computationally efficient alternative to previous Bayesian spatial 
                regression model. We propose different variants of voxel-wise or study-wise statistical distributions to find the most 
                accurate but parsimonious model.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                🏆 Convergence Properties and Sensitivity of the PageRank Problem
              </h3>
              <p className="mb-2 font-medium">
                <span className="font-bold text-secondary-900">Yifan Yu</span><span className="text-secondary-500">, Françoise Tisseur</span>
              </p>
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Best Dissertation Award</span>
              <p className="text-secondary-700 leading-relaxed">
                We compare the computational efficiency and stability of several numerical methods in the PageRank system, and we 
                also investigate the sensitivity of teleportation parameter with perturbation method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-primary-600 bg-clip-text text-transparent mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-emerald-50 p-8 rounded-2xl shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">🔬 Research Scientist Intern</h3>
                  <p className="text-primary-600 font-bold text-lg">Amazon</p>
                </div>
                <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-medium">Oct. 2023 - April 2024</span>
              </div>
              <p className="text-secondary-600 mb-4 font-medium">📍 Luxembourg, Luxembourg</p>
              <p className="text-secondary-700 leading-relaxed">
                Worked on optimization models for Amazon EU transportation network, conducting backtesting and improving computational efficiency through stochastic modeling approaches.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-accent-50 p-8 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">📊 Data Analyst Intern</h3>
                  <p className="text-emerald-600 font-bold text-lg">Hithink RoyalFlush</p>
                </div>
                <span className="bg-emerald-500 text-white px-4 py-2 rounded-full font-medium">July 2017 - Sept. 2017</span>
              </div>
              <p className="text-secondary-600 mb-4 font-medium">📍 Hangzhou, China</p>
              <p className="text-secondary-700 leading-relaxed">
                Administered user databases with SQL, analyzed user activity strategies, and developed web crawlers for recommendation system improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="bg-gradient-to-r from-accent-50 to-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-emerald-600 bg-clip-text text-transparent mb-12 text-center">Open Source Contribution</h2>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  🧠
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                  Neuroimaging Meta-Analysis Research Environment (NiMARE)
                </h3>
                <p className="text-primary-600 mb-4 font-medium">As one of the main contributors</p>
                <div className="flex space-x-4 mb-6">
                  <a href="https://nimare.readthedocs.io/en/latest/" className="bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-full font-medium transition-colors">
                    📖 Website
                  </a>
                  <a href="https://github.com/neurostuff/NiMARE" className="bg-secondary-100 hover:bg-secondary-200 text-secondary-700 px-4 py-2 rounded-full font-medium transition-colors">
                    💻 GitHub
                  </a>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-lg text-center font-medium">
                    ⭐ 191 stars
                  </div>
                  <div className="bg-accent-100 text-accent-700 p-3 rounded-lg text-center font-medium">
                    🍴 58 forks
                  </div>
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-lg text-center font-medium">
                    👥 Main contributor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-emerald-600 bg-clip-text text-transparent mb-12 text-center">Contact</h2>
          <div className="bg-gradient-to-br from-white to-primary-50 p-10 rounded-3xl shadow-2xl border border-primary-100">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:yifan.yu@keble.ox.ac.uk" className="flex items-center bg-primary-100 hover:bg-primary-200 p-4 rounded-2xl text-primary-700 hover:text-primary-800 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span className="mr-4 text-2xl">📧</span>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm">yifan.yu@keble.ox.ac.uk</div>
                    </div>
                  </a>
                  <a href="https://www.bdi.ox.ac.uk/Team/yifan-yu" className="flex items-center bg-emerald-100 hover:bg-emerald-200 p-4 rounded-2xl text-emerald-700 hover:text-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span className="mr-4 text-2xl">🏠</span>
                    <div>
                      <div className="font-medium">University Homepage</div>
                      <div className="text-sm">Oxford BDI Profile</div>
                    </div>
                  </a>
                  <a href="https://github.com/yifan0330" className="flex items-center bg-accent-100 hover:bg-accent-200 p-4 rounded-2xl text-accent-700 hover:text-accent-800 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span className="mr-4 text-2xl">💻</span>
                    <div>
                      <div className="font-medium">GitHub Profile</div>
                      <div className="text-sm">@yifan0330</div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Location</h3>
                <div className="bg-white/80 p-6 rounded-2xl shadow-lg">
                  <div className="text-secondary-700 space-y-2">
                    <p className="font-semibold text-lg">🏛️ University of Oxford</p>
                    <p>Big Data Institute</p>
                    <p>Old Road Campus</p>
                    <p>Oxford, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
