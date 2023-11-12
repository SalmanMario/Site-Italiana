import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Applayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
      <Container
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          mr: "5rem",
          minWidth: "1500px",
        }}>
        <Outlet />
      </Container>
    </Box>
  );
}
