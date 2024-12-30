const Navbar = () => {
  return (
    <div>
      <nav>
        {/* Navbar List */}
        <ul className="flex pt-[150px] pl-[130px] space-x-10 text-lg font-medium">
          <li className="hover:text-blue-500 transition-colors duration-200">
            <a href="">Action</a>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200">
            <a href="#">Sublets</a>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200">
            <a href="#">Totals</a>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200">
            <a href="#">Others</a>
          </li>
        </ul>

        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300 w-4/5 mx-auto" />
      </nav>
    </div>
  );
};

export default Navbar;
