import Home from "./routes/home/home.components";
import {Routes, Route} from 'react-router-dom'

import { Navigation } from "./routes/navigation/navigation.component";

import { Authentication } from "./routes/authentication/authentication";
import { Shop } from "./components/shop/Shop.component";
import { CheckOut } from "./routes/checkout/CheckOut";



const  App = () => {


  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />

      </Route>
    </Routes>
  );
}

export default App;
