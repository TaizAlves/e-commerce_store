import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import styles from './styles.module.scss';
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/Cart_Icon";
import { CartDropDown } from "../../components/cart-dropdown/Cart_DropDown";
import { CartContext } from "../../context/cart.context";

export const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext)


  const signOutHandler = async () => {
    await signOutAuthUser();

  };
    return (
        <Fragment>
        <div className={styles.navigation}>
        <Link className={styles.logo_container} to='/'>
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className= {styles.nav_links_container}>
          <Link className= {styles.nav_link} to='/shop'>
            SHOP
          </Link>
          { currentUser ? (
            <span className= {styles.nav_link} onClick={signOutHandler}>SIGN OUT</span>)
            : (<Link className={styles.nav_link}  to='/auth'>
            SIGN IN
          </Link>
          )}
          <CartIcon/>
        </div>
        { isCartOpen && <CartDropDown/>}
      </div>
          <Outlet/>
        </Fragment>
    );
};