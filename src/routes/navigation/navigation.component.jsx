import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-cart-online-store.svg";

import { useContext } from "react";
import { UserContext } from "../../context/user.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contacts">
            CONTACTS
          </Link>
          <Link className="nav-link" to="/authentication">
            SIGN UP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
