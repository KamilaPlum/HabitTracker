import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useSelector} from "react-redux";
import { Layout, Login } from './pages/Login'

import "./App.css";
import Habits from "./pages/Habits/Habits";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  console.log('isLogged', isLogged);
  return (
    <Box
      sx={{
        height: "100%"
      }}
    >
      <Routes>
          <>
              {!isLogged &&
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Login />} />
                      <Route path={"login"} element={<Login />} />
                      <Route path={"reset"} element={<>Reset </>} />
                  </Route>
              }
              {
                  isLogged && (<Route path="/habits" element={<Habits />} />)
              }
          </>
      </Routes>
    </Box>
  );
}

export default App;
