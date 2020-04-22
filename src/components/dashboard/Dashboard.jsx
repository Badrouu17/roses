import React from "react";
import ContainerWide from "./../ContainerWide";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import Feed from "./feed/Feed";
import Previous from "./Previous";

const Dashboard = ({ profile, previous, qnt, mapper, place, pay }) => {
  const content = () => {
    if (profile) {
      return <Profile></Profile>;
    } else if (previous) {
      return <Previous></Previous>;
    } else if (qnt) {
      return <Feed qnt></Feed>;
    } else if (mapper) {
      return <Feed mapper></Feed>;
    } else if (place) {
      return <Feed place></Feed>;
    } else if (pay) {
      return <Feed pay></Feed>;
    }

    return <Feed></Feed>;
  };

  return (
    <ContainerWide>
      <Header></Header>
      {content()}
      <Footer></Footer>
    </ContainerWide>
  );
};

export default Dashboard;
