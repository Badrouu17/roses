import React, { useContext, useEffect } from "react";
import { storeContext } from "./../../../store";
import { getAllRoses } from "../../../services/roses";
import Loader from "react-loader-spinner";
import Card from "./Card";

const CardContainer = () => {
  const { store, setStore } = useContext(storeContext);

  useEffect(() => {
    if (!store.roses) {
      const fetchData = async () => {
        const response = await getAllRoses();
        setStore({ ...store, roses: response.data.data });
      };
      fetchData();
    }
  });

  console.log(store.roses);

  const onWheel = (e) => {
    e.preventDefault();
    var container = document.getElementById("feed");
    var containerScrollPosition = document.getElementById("feed").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  return (
    <div id="feed" className="feed overflow-x-scroll" onWheel={onWheel}>
      <div className="card-container">
        {store.roses ? (
          store.roses.map((rose, i) => <Card key={i} rose={rose}></Card>)
        ) : (
          <div className="loader">
            <Loader
              type="Oval"
              color="#f6505d"
              height={150}
              width={150}
            ></Loader>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
