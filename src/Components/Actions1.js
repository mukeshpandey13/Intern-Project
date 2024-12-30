import logo from "./logo.png";
import { FaStickyNote } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";


const Action1 = () => {
  return (
    <div className="flex justify-between w-4/5 mx-auto space-x-6 h-[200px]">
      {/* First Box */}
      <div className="bg-white text-black p-6 flex items-start space-x-2 flex-1 rounded border border-gray text-sm w-1/3">
        <img src={logo} alt="Logo" className="w-8 h-8 rounded-xl" />
        <div>
          <h5 className="text-lg font-medium mb-1">Support Chat</h5>
          <div className="bg-slate-200 w-full rounded flex p-2">
            <p>
              Do you have any questions or additional notes about this Claim? Write them here.
            </p>
          </div>
          <input type="text" placeholder="Enter your issue." className="bg-slate-200 rounded  mt-2  w-full " />
        </div>
      </div>

      {/* Second Box */}
      <div className="bg-white text-black p-6 flex flex-col flex-1 rounded border border-gray w-1/3">
        <div className="flex items-center mb-1 space-x-2">
          <FaStickyNote />
          <h5 className="font-medium text-lg">NOTES</h5>
        </div>
        <div>
          <textarea
            name="comment"
            form="usrform"
            className="bg-slate-200 w-full rounded px-3 text-sm p-3 h-[100px] flex justify-end"
            placeholder="Enter note here."
          />
        </div>
      </div>

      {/* Third Box */}
      <div className="bg-white text-black p-6 flex flex-col flex-1 rounded border border-gray w-1/3">
        <div className="flex items-center mb-1 space-x-2">
          <FaFile />
          <h5 className="font-medium text-lg">FILES</h5>
        </div>
        <div className="bg-slate-200 w-full  rounded flex p-2">
            <p className="h-[85px] text-sm flex pl-5 items-center">
            <IoDocumentAttach />
              Drop your Document
            </p>
          </div>
      </div>
    </div>
  );
};

export default Action1;
