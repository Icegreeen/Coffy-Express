import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t-2 border-gray-100 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="text-gray-600">&copy; 2024 coffyexpress.com</p>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#" className="text-gray-600 hover:text-white">Terms of use</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-white">Policy privace</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
