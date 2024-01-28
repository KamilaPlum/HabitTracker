import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout, Login } from './pages/Login'
import "./App.css";
import Habbits from "./pages/Habbits/Habbits";

function App() {
  const isLoggedIn = false;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Routes>
          {!isLoggedIn &&
              <Route path="/" element={<Layout />}>
                  <Route index element={<Login />} />
                  <Route path={"login"} element={<Login />} />
                  <Route path={"reset"} element={<>Reset </>} />
              </Route>
          }
        {isLoggedIn && <Route path="/" element={<Habbits />} />}
      </Routes>
    </Box>
  );
}

export default App;
