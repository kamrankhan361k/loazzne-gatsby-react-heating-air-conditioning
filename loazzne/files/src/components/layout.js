import React, { Fragment, useContext, useEffect, useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";
import SimpleReactLightbox from "simple-react-lightbox";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/600-italic.css";
import "@fontsource/josefin-sans/700.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/fontello.css";
import "@/css/style.css";
import "@/css/responsive.css";

const Layout = ({ PageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);
  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Head>
        <title>
          {PageTitle} - Loazzne - Heating & Air Conditioning Services GatsbyJs
          Template{" "}
        </title>
      </Head>
      <SimpleReactLightbox>
        <div id="wrapper">{children}</div>
      </SimpleReactLightbox>

      {true === menuStatus ? <MobileMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
