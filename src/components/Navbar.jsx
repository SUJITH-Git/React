import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
      <AppBar position="static">
        <Toolbar  sx={{ justifyContent: "center", mt: 0}}>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;


/*Summary*/
/*
 mt- margine top :-  create space on the top side of an HTML element
 justifyContent  :-  justify-content property is used to align and distribute items along the main axis of a flex or grid container,
                     managing any available free space. 
 */
/*Summary*/