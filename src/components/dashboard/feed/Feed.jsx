import React from "react";
import CardContainer from "./CardContainer";
import Qnt from "./Qnt";
import Mapper from "./Mapper";
import Pay from "./Pay";

const Feed = ({ qnt, mapper, pay }) => {
  const content = () => {
    if (qnt) {
      return <Qnt></Qnt>;
    } else if (mapper) {
      return <Mapper></Mapper>;
    } else if (pay) {
      return <Pay></Pay>;
    }

    return <CardContainer></CardContainer>;
  };

  return content();
};

export default Feed;
