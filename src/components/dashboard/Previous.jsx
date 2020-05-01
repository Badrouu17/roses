import React from "react";

const Previous = () => {
  return (
    <div className="previous py-20 px-20 flex flex-row content-center justify-around align-middle">
      <div class="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-around align-middle">
        <div class="px-10 py-10">
          <div class=" text-red-500 font-black text-center text-6xl mb-2">
            No previous orders for you
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;
