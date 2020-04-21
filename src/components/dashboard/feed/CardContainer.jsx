import React from "react";
import Card from "./Card";

const CardContainer = () => {
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default CardContainer;
