import React from "react";
import { Box, Button } from "@mui/material";

const DesktopMenu = ({ styles, menuItems, handleClick, ...rest }) => {  
  return (
    <Box sx={{ ...sx.root, ...styles }}>
    { menuItems?.header?.map((item, i) => (
        <Button
          key={i}
          sx={sx.menuItem}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopMenu;

const sx = {
  root: {
    display: {
      xs: "none",
      sm: "block",
    },
  },
  menuItem: {
    py: 1.5,
    px: 3,
  },
};
