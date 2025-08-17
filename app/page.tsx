import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/yifan_photo.webp"
              alt="Yifan Yu"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Yifan Yu</h1>
          <h2 className="text-2xl text-gray-600 mb-2">Health Data Science Researcher</h2>
          <h3 className="text-xl text-gray-500 mb-8">University of Oxford</h3>
          
          <div className="flex justify-center space-x-6 text-blue-600">
            <a href="mailto:yifan.yu@keble.ox.ac.uk" className="hover:text-blue-800 transition-colors">
              ✉️ Email
            </a>
            <a href="https://www.bdi.ox.ac.uk/Team/yifan-yu" className="hover:text-blue-800 transition-colors">
              🏠 Homepage
            </a>
            <a href="https://github.com/yifan0330" className="hover:text-blue-800 transition-colors">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            I am a Ph.D. candidate in Health Data Science at the University of Oxford, specializing in 
            meta-analysis on fMRI data, spatial modelling of brain lesion masks, statistical machine learning, 
            and neuroscience. My research is supervised by Prof. Thomas Nichols and funded by the 
            National Institutes of Health (NIH) studentship.
          </p>
          <p className="mb-6">
            I am affiliated with the Department of Computer Science and the Nuffield Department of Population Health. 
            My work focuses on developing novel statistical frameworks for neuroimaging data analysis, 
            with particular emphasis on coordinate-based meta-analysis and spatial modeling approaches.
          </p>
        </div>
      </section>

      {/* Research Interests & Education */}
      <section id="research" className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Interests */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Interests</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Meta-Analysis on fMRI Data</h3>
                <p className="text-gray-600 text-sm">
                  Coordinate-based meta-regression frameworks for neuroimaging studies
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Spatial Modelling</h3>
                <p className="text-gray-600 text-sm">
                  Statistical modeling of brain lesion masks using spatial Poisson processes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Statistical Machine Learning</h3>
                <p className="text-gray-600 text-sm">
                  Scalable inference frameworks for neuroimaging applications
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ph.D. in Health Data Science</h3>
                    <p className="text-blue-600 font-medium">University of Oxford</p>
                  </div>
                  <span className="text-gray-500 text-sm">2019 - 2025</span>
                </div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Supervised by Prof. Thomas Nichols</li>
                  <li>• NIH studentship funded</li>
                  <li>• Computer Science & Population Health</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">BSc Mathematics (First Class)</h3>
                    <p className="text-blue-600 font-medium">University of Manchester</p>
                  </div>
                  <span className="text-gray-500 text-sm">2016 - 2019</span>
                </div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Ranked #2/340 (2016-2017)</li>
                  <li>• Top 5/340 (2017-2018)</li>
                  <li>• Maths Excellence Awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Projects & Publications</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Efficient Lesion Estimation Using a Spatial Poisson Process and a Scalable Approximate Model
            </h3>
            <p className="text-blue-600 mb-3">Yifan Yu, Thomas Nichols</p>
            <p className="text-gray-600">
              We propose a novel approach to investigate the association between lesion incidence and spatial varying risk factors, 
              such as age and CVR factors, and developed a robust, computationally efficient and scalable statistical inference framework.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Meta Regression and Inference for fMRI Data Across Multiple Groups
            </h3>
            <p className="text-blue-600 mb-3">Yifan Yu, Lauren Hill-Bowen, Michael Cody Riedel, Angela Laird, Thomas Nichols</p>
            <p className="text-gray-500 mb-3">(Under review)</p>
            <p className="text-gray-600">
              We extend Coordinate-based meta-regression (CBMR) to allow for different stochastic models and build a statistical 
              inference framework using bootstrapping approach. This new approach allows both group-specific and group comparison 
              of brain activation intensity estimations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Coordinate-Based Meta-regression of fMRI data
            </h3>
            <p className="text-blue-600 mb-3">Yifan Yu, Rosario Pintos Lobo, Michael Cody Riedel, Angela Laird, Thomas Nichols</p>
            <p className="text-green-600 mb-3">(Published on Biostats)</p>
            <p className="text-gray-600">
              We develop a novel Meta-regression framework, as a computationally efficient alternative to previous Bayesian spatial 
              regression model. We propose different variants of voxel-wise or study-wise statistical distributions to find the most 
              accurate but parsimonious model.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Convergence Properties and Sensitivity of the PageRank Problem
            </h3>
            <p className="text-blue-600 mb-3">Yifan Yu, Françoise Tisseur</p>
            <p className="text-yellow-600 mb-3">(Best Dissertation Award)</p>
            <p className="text-gray-600">
              We compare the computational efficiency and stability of several numerical methods in the PageRank system, and we 
              also investigate the sensitivity of teleportation parameter with perturbation method.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Research Scientist Intern</h3>
                <p className="text-blue-600 font-medium">Amazon</p>
              </div>
              <span className="text-gray-500">Oct. 2023 - April 2024</span>
            </div>
            <p className="text-gray-500 mb-3">Luxembourg, Luxembourg</p>
            <p className="text-gray-600">
              Worked on optimization models for Amazon EU transportation network, conducting backtesting and improving computational efficiency through stochastic modeling approaches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Data Analyst Intern</h3>
                <p className="text-blue-600 font-medium">Hithink RoyalFlush</p>
              </div>
              <span className="text-gray-500">July 2017 - Sept. 2017</span>
            </div>
            <p className="text-gray-500 mb-3">Hangzhou, China</p>
            <p className="text-gray-600">
              Administered user databases with SQL, analyzed user activity strategies, and developed web crawlers for recommendation system improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Source Contribution</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Neuroimaging Meta-Analysis Research Environment (NiMARE)
          </h3>
          <p className="text-blue-600 mb-3">As one of the main contributors</p>
          <div className="flex space-x-4 mb-4">
            <a href="https://nimare.readthedocs.io/en/latest/" className="text-blue-600 hover:text-blue-800 underline">
              Website
            </a>
            <a href="https://github.com/neurostuff/NiMARE" className="text-blue-600 hover:text-blue-800 underline">
              GitHub
            </a>
          </div>
          <ul className="text-gray-600 space-y-2">
            <li>• Receive 58 forks and 191 stars on Github</li>
            <li>• Develop the CBMR module and other meta-regression algorithm into Python NiMare Package</li>
            <li>• Maintenance work of NiMare Package in statistics team</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href="mailto:yifan.yu@keble.ox.ac.uk" className="flex items-center text-blue-600 hover:text-blue-800">
                  <span className="mr-3">✉️</span>
                  yifan.yu@keble.ox.ac.uk
                </a>
                <a href="https://www.bdi.ox.ac.uk/Team/yifan-yu" className="flex items-center text-blue-600 hover:text-blue-800">
                  <span className="mr-3">🏠</span>
                  University Homepage
                </a>
                <a href="https://github.com/yifan0330" className="flex items-center text-blue-600 hover:text-blue-800">
                  <span className="mr-3">💻</span>
                  GitHub Profile
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600">
                University of Oxford<br />
                Big Data Institute<br />
                Old Road Campus<br />
                Oxford, UK
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
