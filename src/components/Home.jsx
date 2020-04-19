import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h3 className="lobster-font" style={{ fontSize: 110 }}>
        Roses for life.
      </h3>
      <br />
      <p className="lobster-font" style={{ fontSize: 30 }}>
        the worlds symbol of love ❤ share them.
      </p>
      <button
        class="w-3/4 h-16 text-2xl mt-16 py-2 px-4 bg-transparent font-bold text-grey-100 hover:text-red-600 hover:bg-gray-100 border-2 border-solid border-gray-100 rounded-full"
        type="submit"
      >
        L O G I N
      </button>
      <button
        class="w-3/4 h-16 text-2xl mt-8 py-2 px-4 bg-transparent font-bold text-grey-100 hover:text-red-600 hover:bg-gray-100 border-2 border-solid border-gray-100 rounded-full"
        type="submit"
      >
        S I G N U P
      </button>
    </div>
  );
};

export default Home;
