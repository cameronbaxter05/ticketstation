import React from "react";
import { Navbar, PostCard} from '../components'
import {Container} from "@mui/material";
const Home = () => {
  return (
  <div className="home">
     <Navbar
      nav_item1="Home"
      nav_item2="La Liga"
      nav_item3 = "La Serie Italiana"
      nav_item4 ="Premier Ligue"
     />

      <Container style={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: "1",
          gap: "30px",
          marginTop: 25
      }}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
      </Container>

  </div>);
};

export default Home;
