import React, { memo } from "react";
import { Link, Container, Wrapper } from "./styled";
import { Outlet, useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import BrandName from "../Generic/BrandName";
import Setting from "../Sittings";
import Button from "../Generic/Button";
export const Navbar = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Container>
        <BrandName />
        <Wrapper width={"700"}>
          {navbar.map(
            ({ id, pathname, title, hidden }) =>
              !hidden && (
                <Link
                  active={`${(location?.pathname === pathname)}`}
                  key={id}
                  to={pathname}
                >
                  {title}
                </Link>
              )
          )}
        </Wrapper>
        <Wrapper width={"130"}>
          <Button border>
            <a style={{ textDecoration: "none" }} href="/signin">
              Kirish
            </a>
          </Button>
        </Wrapper>
      </Container>
      <Setting />
      <Outlet />
    </React.Fragment>
  );
};
export default memo(Navbar);
