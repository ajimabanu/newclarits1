import { Box, Container, Stack, Typography, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import Codedet from "./Codedet";

import "../App.css";
import "../styles/Main.css";
import Tabeffect from "./Tabeffect";



export const Main = ({ isValueSelected }) => {
  
  return (
    <div>
      <Container maxWidth="4px">
        <Stack direction={"row"} gap={"10px"} mt={-2.5}>
          <Box
            classname="indexpage"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              border: "0.5px solid grey",
            }}
          >
            <Box
              className="wrapper"
              sx={{
                height: "20px",
                width: "100%",
                textAlign: "left",
                mt: "8px",
              }}
            >
              <Typography
                classname="indexSearch"
                sx={{
                  backgroundColor: "#c8e2dd",
                  color: "#4185d2",
                  mt: "-8px",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                noWrap
                width="610px"
              >
                Index Search
              </Typography>
            </Box>
          </Box>

          <Box
            classname="Tabularsearch"
            sx={{
              height: "590px",
              width: "60%",
              display: "flex",
              backgroundColor: "white",
              border: "0.5px solid grey",
            }}
          >
            <Box
              className="wrapper"
              sx={{
                height: "20px",
                width: "50%",
                mt: "10px",
              }}
            >
              <Typography
                className="tabularsearch"
                variant="subtitle1"
                fontFamily={"sans-serif"}
                noWrap
                width="930px"
                sx={{
                  backgroundColor: "#c8e2dd",
                  color: "#4185d2",
                  mt: "-10px",
                }}
              >
                Tabular Search
              </Typography>
            </Box>
            <Stack direction={"column"} ml={-30} mt={10}>
               <Typography
                className="codedetails"
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={" #4185d2"}
                fontWeight={600}
                ml={-28}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "132%",
                }}
              >
                Code details
              </Typography>
              <Box sx={{ marginRight: "20px" }}>
                {isValueSelected && <Codedet />}
              </Box>
              <Box
                sx={{
                  height: "500px",
                  width: "930px",
                  ml: "-200px",
                  overflowY: "scroll",
                  mt: "10px"
                }}
              >  <Tabeffect/>    
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
