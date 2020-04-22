import React from "react";
import CardContainer from "./CardContainer";
import Qnt from "./Qnt";
import Mapper from "./Mapper";
import Place from "./Place";
import Pay from "./Pay";

const Feed = ({ qnt, mapper, place, pay }) => {
  const content = () => {
    if (qnt) {
      return <Qnt></Qnt>;
    } else if (mapper) {
      return <Mapper></Mapper>;
    } else if (place) {
      return <Place></Place>;
    } else if (pay) {
      return <Pay></Pay>;
    }

    return <CardContainer></CardContainer>;
  };

  return content();
};

export default Feed;
