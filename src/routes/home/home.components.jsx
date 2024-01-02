import { Outlet } from "react-router-dom";
import { Category_menu } from "../../components/Category_menu/Category_menu";


const  Home = () => {


  return (

    <>
    <Category_menu  />
    <Outlet/>
    </>
  );
}

export default Home;
