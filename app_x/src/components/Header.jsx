import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TitleContext } from "../context/TitleContext";
import { useAuth } from "./auth";
import { useModal } from '../hooks/useModal';
import { Modal } from './Modal'

export default function Header() {
  const { title } = React.useContext(TitleContext);
  const auth = useAuth();

  const [isOpenModal1, openModal1, closeModal1] = useModal(false);


  const handleLogout = () => {
    auth.logout();
  }

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', top: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button onClick={openModal1} color="inherit">Log out</Button>

          <Modal isOpen={isOpenModal1} closeModal={closeModal1} >
            <Typography variant="h6" gutterBottom>Deseas salir?</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100px'}}>
            <Button onClick={handleLogout} variant="contained">Salir</Button>
            <Button onClick={closeModal1} variant="outlined">Cancelar</Button>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
