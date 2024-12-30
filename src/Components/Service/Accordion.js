import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

const AccordionItem = ({ title, content, isOpen, onToggle, nestedItems }) => {
  return (
    <div className="border-b">
      <button
        className="flex justify-between w-full py-4 text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className={`text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          {content && <div className="text-gray-700">{content}</div>}
          {nestedItems && (
            <div className="mt-4 ml-4 border-l pl-4">
              {nestedItems.map((nestedItem, index) => (
                <AccordionItem
                  key={index}
                  title={nestedItem.title}
                  content={nestedItem.content}
                  isOpen={nestedItem.isOpen}
                  onToggle={nestedItem.onToggle}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [nestedOpenIndex, setNestedOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleNestedAccordion = (index) => {
    setNestedOpenIndex(nestedOpenIndex === index ? null : index);
  };

  const items = [
    {
      title: 'Engine Overheating $240.00',
      nestedItems: [
        {
          title: 'Cooling System Repair',
          content: (
            <>
              <h3 className="text-md font-semibold mb-2">Parts</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left mb-6 ">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-sm">Part Number</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">Part Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">OTY</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">WTY MO.</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">WTY MIL</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">Amount</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1233435AA</td>
                    <td className="border border-gray-300 px-4 py-2">Radiator</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">24</td>
                    <td className="border border-gray-300 px-4 py-2">50,000</td>
                    <td className="border border-gray-300 px-4 py-2">$30.00</td>
                    <td className="border border-gray-300 px-4 py-2">$25.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">677567456AA</td>
                    <td className="border border-gray-300 px-4 py-2">Coolant</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">12</td>
                    <td className="border border-gray-300 px-4 py-2">30,000</td>
                    <td className="border border-gray-300 px-4 py-2">$30.00</td>
                    <td className="border border-gray-300 px-4 py-2">$23.00</td>
                  </tr>
                </tbody>
              </table>
  
              {/* Second Table */}
              <h3 className="text-md font-semibold mb-2">LABOR</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-5 py-2 text-sm">Labor Description</th>
                    <th className="border border-gray-300 px-2 py-2 text-sm">Menu</th>
                    <th className="border border-gray-300 px-2 py-2 text-sm">Hour</th>
                    <th className="border border-gray-300 px-2 py-2 text-sm">Rate</th>
                    <th className="border border-gray-300 px-2 py-2 text-sm">Tax(%)</th>
                    <th className="border border-gray-300 px-2 py-2 text-sm">Tax Per</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">44556789BB</td>
                    <td className="border border-gray-300 px-4 py-2"><TiTick /></td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">36</td>
                    <td className="border border-gray-300 px-4 py-2">15%</td>
                    <td className="border border-gray-300 px-4 py-2">$50.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">9988765CC</td>
                    <td className="border border-gray-300 px-4 py-2"><TiTick /></td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">$60.00</td>
                    <td className="border border-gray-300 px-4 py-2">15%</td>
                    <td className="border border-gray-300 px-4 py-2">$20.00</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
          isOpen: nestedOpenIndex === 0,
          onToggle: () => toggleNestedAccordion(0),
        },
        {
          title: 'Thermostat Replacement',
          content: 'Hello My name is Mukesh pandey.',
          isOpen: nestedOpenIndex === 1,
          onToggle: () => toggleNestedAccordion(1),
        },
      ],
    },
    {
      title: 'Break System issue',
      content: 'All about break system issue',
    },
  ];
  
  

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-xl font-bold mb-1 mt-9">Service</h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
          nestedItems={item.nestedItems}
        />
      ))}
    </div>
  );
};

export default Accordion;
