import React from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
const NavButton = (props) => {
  return (
    <IconButton>
      <Typography>{props.name}</Typography>
    </IconButton>
  );
};

const TopNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavButton name={"Home"} />
      <NavButton name={"Gallery"} />
      <NavButton name={"Services"} />
      <NavButton name={"Qualification"} />
      <NavButton name={"Testimoniyal"} />
      <NavButton name={"About"} />
    </Box>
  );
};
export default TopNav;
