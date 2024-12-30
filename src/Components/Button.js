import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <div className="">
      <button className="bg-black text-white rounded-lg px-1 py-1 text-sm flex justify-center items-center hover:bg-slate-300 hover:text-black">
        {children}
      </button>
    </div>
  );
};

export default Button;
