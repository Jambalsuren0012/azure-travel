import React from 'react'
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const category = () => {
     const cards = [
    { imgURL: "./images/list.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list2.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list3.svg", text: "Bali.Indoesia" },
    { imgURL: "./images/list4.jpeg", text: "Bali.Indoesia" },
  ];
  return (
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
  )
}

export default category