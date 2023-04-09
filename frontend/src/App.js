import { useState} from "react";
import "./App.css";
import Home from "./Components/Home";
import MiniDrawer from "./MiniDrawer";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;





// import { useState} from "react";
// import "./App.css";
// import Routes from "./Components/Routes";
// import AuthContext from "./Components/AuthContext";

// function App() {
//   const [auth, setAuth] = useState(localStorage.getItem("token") || "");
//   const context = {
//     auth,
//   };

//   return (
//     <AuthContext.Provider value={context}>
//       <Routes />
//     </AuthContext.Provider>
//   );
// }

// export default App;


