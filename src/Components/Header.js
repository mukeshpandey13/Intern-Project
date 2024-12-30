import React from "react";
import taxi from "./taxi.png";
import { PiFinnTheHumanDuotone } from "react-icons/pi";



const Header = () => {
  return (
    <div className="bg-slate-200">
      <nav className="flex items-center px-50 py-4 space-x-10">
          
        <img src={taxi} alt="Logo" className="w-20 rounded-full" />

        
        <ul className="flex space-x-5">
          <li className="cursor-pointer opacity-50">Home</li>
          <li className="cursor-pointer">Claims</li>
          <li className="cursor-pointer opacity-50">Message</li>
        </ul>
      </nav>

      <br />
      <h1 className="px-28 py-4 font-bold text-2xl">CL-2467802</h1>

    
      <div className="bg-gray-200 p-6 px-28">
        <table className="table-auto text-left border-collapse w-full">
          <thead>
            <tr className="opacity-50">
              <th className="px-4 py-2 text-sm">TYPE</th>
              <th className="px-4 py-2 text-sm">RO NUMBER</th>
              <th className="px-4 py-2 text-sm">DATE</th>
              <th className="px-4 py-2 text-sm">CLIENT</th>
              <th className="px-4 py-2 text-sm">ASSIGNED TO</th>
              <th className="px-4 py-2 text-sm">CURRENT ODO</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-4 font-medium text-sm">Mechanical</td>
              <td className="px-4 py-4 font-medium text-sm">890790123412</td>
              <td className="px-4 py-4 font-medium text-sm">5 May 2024</td>
              <td className="px-4 py-4 font-medium text-sm w-full flex p-2 "><PiFinnTheHumanDuotone />Albert Flores</td>
              <td className="px-4 py-4 font-medium text-sm">Mukesh Pandey</td>
              <td className="px-4 py-4 font-medium text-sm">109,00ml</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
