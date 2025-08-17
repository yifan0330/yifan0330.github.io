import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100/50">
      <div className="max-w-4xl mx-auto px-6 py-5">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tight text-secondary-900 hover:text-primary-600 transition-colors duration-300">
            Yifan Yu
          </Link>
          <div className="flex space-x-8">
            <Link href="#about" className="text-secondary-700 hover:text-primary-600 font-medium tracking-wide text-sm uppercase letterspacing transition-colors duration-300">
              About
            </Link>
            <Link href="#research" className="text-secondary-700 hover:text-primary-600 font-medium tracking-wide text-sm uppercase letterspacing transition-colors duration-300">
              Research
            </Link>
            <Link href="#publications" className="text-secondary-700 hover:text-primary-600 font-medium tracking-wide text-sm uppercase letterspacing transition-colors duration-300">
              Publications
            </Link>
            <Link href="#experience" className="text-secondary-700 hover:text-primary-600 font-medium tracking-wide text-sm uppercase letterspacing transition-colors duration-300">
              Experience
            </Link>
            <Link href="#contact" className="text-secondary-700 hover:text-primary-600 font-medium tracking-wide text-sm uppercase letterspacing transition-colors duration-300">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
