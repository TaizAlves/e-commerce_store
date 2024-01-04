import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/Cart_Icon";
import { CartDropDown } from "../../components/cart-dropdown/Cart_DropDown";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import styles from './styles.module.scss';
import { selectIsCartOpen } from "../../store/cart/cart.selector";


export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)


 
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
            <span className= {styles.nav_link} onClick={signOutAuthUser}>SIGN OUT</span>)
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