import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";

import Header from "./Component/Header";
import Home from "./Component/Home";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Upload from "./Component/Upload";
import Videos from "./Component/Videos";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpass" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
