import React from "react";
import ContainerWide from "./../ContainerWide";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import Feed from "./feed/Feed";
import Previous from "./Previous";

const Dashboard = ({ profile, previous }) => {
  const content = () => {
    if (profile) {
      return <Profile></Profile>;
    } else if (previous) {
      return <Previous></Previous>;
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
