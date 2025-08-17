import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            Yifan Yu
          </Link>
          <div className="flex space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#research" className="text-gray-600 hover:text-blue-600 transition-colors">
              Research
            </Link>
            <Link href="#publications" className="text-gray-600 hover:text-blue-600 transition-colors">
              Publications
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
