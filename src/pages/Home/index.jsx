import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Category } from "@mui/icons-material";
import category from "../../components/Catergory";

const Home = () => {
  const cards = [
    { imgURL: "./images/list.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list2.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list3.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list4.jpeg", text: "Bali.Indoesia" },
  ];
  return (
    <Box>
      <Box className="Hero">
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            boxShadow: 4,
          }}
          className="container"
        >
          <Typography
            variant="h1"
            style={{ fontSize: "80px", width: "600px", color: "white" }}
          >
            The whole world awaits.
          </Typography>
          <div className="input">
            <div className="row3">
              <img
                style={{ height: "30px" }}
                src="./images/searchLogo.svg"
                alt=""
              />
              <input type="text" placeholder="Search destinations, hotels" />
            </div>
            <div className="row2">
              <div className="row">
                <img src="./images/checkImg.svg" alt="" />
              </div>
              <div className="row">
                <img src="./images/checkoutImg.svg" alt="" />
              </div>
              <div className="row">
                <img src="./images/profile.svg" alt="" />
              </div>
              <button>
                <img src="./images/searchBtn.svg" alt="" />
              </button>
            </div>
          </div>
          <Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              Top Categories
            </Typography>
            <img className="top" src="./images/top.svg" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "105px",
            left: 0,
            top: "72.83%",
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 89.58%)",
          }}
        ></Box>
      </Box>
      <category/>
      <Box className="MidlleContainer">
        <Typography variant="h3">Offers</Typography>
      </Box>
    </Box>
  );
};

export default Home;
