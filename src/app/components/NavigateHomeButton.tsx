import React from "react";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import WiggleComponent from "../animations/WiggleComponent";


const NavigateHomeButton = () => (
  
  <Button
    style={{
      position: "fixed",
      bottom: "3rem",
      left: "3rem",
    }}
    sx={{
      color: "primary.main",
      borderRadius: "20px",
    }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <WiggleComponent>
    <KeyboardDoubleArrowUpIcon fontSize="large" />
    </WiggleComponent>
  </Button>
);

export default NavigateHomeButton;
