import { Box } from "@mui/material";
import { RoutesPages } from "./routes/index.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

export function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <RoutesPages />
      </ThemeProvider>
    </Box>
  );
}
