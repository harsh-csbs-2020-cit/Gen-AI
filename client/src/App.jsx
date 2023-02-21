import React, {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost, Landing, SignIn, SignUp } from "./page";

// const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setLoggedIn(true);
//     }
//   }, []);

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="w-full flex justify-between items-center bg-[#333333] sm:px-8 px-4 py-4 border-b border-b-[#404040]">
        <Link to="/">
          <h1 className="w-28 text-white font-bold object-contain">GEN.AI</h1>
        </Link>

        {/* {loggedIn && (
            <Link
              to="/create-post"
              className="font-inter absolute right-5 font-medium bg-[#6469ff] text-white px-4 py-1 rounded-lg hover:bg-[#5458d2]"
            >
              Create
            </Link>
        )} */}
        <Link
          to="/community"
          className="font-inter absolute right-32 font-medium bg-[#6469ff] text-white px-4 py-1 rounded-lg hover:bg-[#5458d2]"
        >
          Community
        </Link>
        <Link to="/signin" className="font-inter absolute right-5 font-medium bg-[#6469ff] text-white px-4 py-1 rounded-lg hover:bg-[#5458d2]">
          Sign In
        </Link>
        {/* <Link to="/signup">Sign Up</Link>  */}

      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#222222] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/community" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
