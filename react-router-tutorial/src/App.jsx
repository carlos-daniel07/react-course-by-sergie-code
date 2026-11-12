import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomeScreen from "./routes/HomeScreen";
import AboutScreen from "./routes/AboutScreen";
import ContactScreen from "./routes/ContactScreen";
import UserProvider from "./context/UserProvider";
import LoginScreen from "./routes/LoginScreen";

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
