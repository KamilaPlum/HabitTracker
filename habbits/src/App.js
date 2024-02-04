import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout, Login } from './pages/Login'
import "./App.css";
import Habits from "./pages/Habits/Habits";

function App() {
  const isLoggedIn = true;

  return (
    <Box
      sx={{
        height: "100%"
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
        {<Route path="/habits" element={<Habits />} />}
      </Routes>
    </Box>
  );
}

export default App;
