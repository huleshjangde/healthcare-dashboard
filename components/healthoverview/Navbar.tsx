import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => (
  <nav className="flex sticky items-center justify-between p-4 bg-white ">
    <div className="text-lg font-bold">
      <p className="text-[22px]"> Health Overview</p>
      <div className="text-base text-gray-500">August 12, 2021</div>
    </div>
    
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-md bg-gray-100 shadow-sm px-4 py-2 hover:bg-gray-100 focus:outline-none">
        <FiSearch className="text-lg" />
      </button>
      <button className="p-2 rounded-md bg-gray-100 shadow-sm px-4 py-2 hover:bg-gray-100 focus:outline-none">
        <FiBell className="text-lg" />
      </button>
    </div>
  </nav>
);

export default Navbar;
