import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
            <div className="negEgnee3">
              <img
                style={{ height: "30px" }}
                src="./images/searchLogo.svg"
                alt=""
              />
              <input type="text" placeholder="Search destinations, hotels" />
            </div>
            <div className="negEgnee2">
              <div className="negEgnee">
                <img src="./images/checkImg.svg" alt="" />
              </div>
              <div className="negEgnee">
                <img src="./images/checkoutImg.svg" alt="" />
              </div>
              <div className="negEgnee">
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
            <img className="topBla2" src="./images/topBla2.svg" alt="" />
          </Box>
          <Box sx={{ paddingTop: "50px" }}>
            <Typography variant="h2" sx={{ color: "white" }}>
              Top Vacation Destinations
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 36,
                overflowX: "scroll",
                width: "90%",
                overflowY: "hidden",
                position: "absolute",
              }}
            >
              {cards.map((item) => (
                <Box
                  key={item.text}
                  sx={{ zIndex: 99999, position: "relative" }}
                >
                  <img
                    style={{
                      height: "300px",
                      width: "511px",
                      borderRadius: "10px",
                    }}
                    src={item.imgURL}
                    alt=""
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      top: "75%",
                      left: "15%",
                      color: "#FFFFFF",
                      position: "absolute",
                      fontWeight: "bold",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
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
      <Box className="MidlleContainer">
        <Typography variant="h3">Offers</Typography>
      </Box>
    </Box>
  );
};

export default Home;
