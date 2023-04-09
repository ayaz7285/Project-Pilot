import React,{useContext} from "react";
import AuthRoutes from "./AuthRoutes";
import NoAuthRoutes from "./NoAuthRoutes";
import AuthContext from "./AuthContext";
export default function Routes() {

  const { auth } = useContext(AuthContext);
  console.log(auth);

  return <div>{auth!=="" ? <AuthRoutes /> : <NoAuthRoutes />}</div>;
}
