import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Qnt = () => {
  const { rose_name } = useParams();
  const [qnt, setQnt] = useState({ qnt: "4" });

  return (
    <div className="previous py-20 px-20 flex flex-row content-center justify-around align-middle">
      <div class="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-around align-middle">
        <div class="px-10 py-10">
          <div class=" text-red-500 font-black text-center text-6xl mb-2">
            <div>
              <p className="mt-1 text-6xl text-red-500 text-center lobster-font">
                choose how many 🌹
              </p>
            </div>

            <form className=" mt-2 flex flex-col items-center justify-center content-center">
              <select
                placeHolder="quantity"
                className="w-1/2 h-16 mt-12 text-2xl font-bold text-center shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="quantity"
                onChange={(e) => {
                  setQnt({ qnt: e.currentTarget.value });
                }}
              >
                <option value="0">Quantity </option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="40">40</option>
              </select>

              <Link
                class="w-1/2 h-16 text-2xl mt-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                to={`/dashboard/feed/${rose_name}/${qnt.qnt}`}
              >
                NEXT
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qnt;
