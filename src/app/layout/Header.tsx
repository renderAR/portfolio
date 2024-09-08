import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Drawer,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomSwitch from "../components/Switch";
import { Box } from "@mui/system";
interface Props {
  dark: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  scrollToSectionById: (event: string) => void;
}

export default function Header({ dark, handleChange, scrollToSectionById }: Props) {
  const appBarColor = dark ? "121212" : "#fff";
  const logoTextColor = dark ? "#fff" : "#121212";
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const headerBtn = [
    { title: "Home", id: "home" },
    { title: "Education", id: "education" },
    { title: "WorkEx", id: "workex" },
    { title: "Projects", id: "projects" },
  ];
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };
  return isSmallScreen ? (
    <>
      <MenuIcon
        style={{
          zIndex: 100,
          position: "fixed",
          top: "2rem",
          left: "2rem",
        }}
        sx={{ height: 40, width: 40, ml: 1, mt: 1 }}
        onClick={toggleDrawer}
      />
      <Box
        style={{
          position: "fixed",
          top: "2rem",
          right: "2rem",
          zIndex: 100,
        }}
      >
        <CustomSwitch checked={dark} handleChange={handleChange} />
      </Box>
      
      <Drawer open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "auto",
            }}
          >
            {headerBtn.map((e) => (
              <ListItemButton onClick={() => scrollToSectionById(e.id)}>
                {e.title}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      </>
  ) : (
    <AppBar position="sticky" sx={{ mt: 2 }} elevation={0}>
      <Toolbar
        sx={{
          backgroundColor: appBarColor,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mr: 2,
            display: "flex",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: logoTextColor,
            textDecoration: "none",
          }}
          style={{ flexGrow: 1 }}
        >
          My Portfolio
        </Typography>

        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "auto",
          }}
        >
          {headerBtn.map((e) => (
            <ListItemButton onClick={() => scrollToSectionById(e.id)} sx={{
              textDecoration: "none",
              color: "primary.main",
              "&:hover": { color: "secondary.light" },
              "&.active": {
                color: "secondary.main",
              },
            }}>
              {e.title}
            </ListItemButton>
          ))}
        </List>

        <CustomSwitch checked={dark} handleChange={handleChange} />
      </Toolbar>
    </AppBar>
  );
}
