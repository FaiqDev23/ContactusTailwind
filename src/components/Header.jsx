import headerLogo from '../assets/images/lingua.png'
import backgroundPic from '../assets/images/background.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 mx-36 ">
    {/* Logo Placeholder */}
    <div><img 
    src={headerLogo} 
    alt="logo"
    width={30}
    height={15} /></div>
    {/* Navigation Links */}
    <nav>
      <ul className="flex space-x-6">
        <li className="hover:text-indigo-600 text-white">Services</li>
        <li className="hover:text-indigo-600 text-white">Products</li>
        <li className="hover:text-indigo-600 text-white">Pricing</li>
        <li className="hover:text-indigo-600 text-white">Contact Us</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header