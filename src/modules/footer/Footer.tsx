import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IMenu } from "../../types";
import styles from "./FooterStyles.module.css";

type IFooter = {
  footerMenu: IMenu[];
};

let Logo = require("../../assets/logo.png");
let Facebookicon = require("../../assets/FacebookIcon.png");
let TwitterIcon = require("../../assets/TwitterIcon.png");
let LinkedinIcon = require("../../assets/LinkedinIcon.png");

const Footer = ({ footerMenu }: IFooter): JSX.Element => {
  return (
    <LayoutWrapper>
      <div className={styles.head_footer_holder}>
        <div className={styles.logo_holder}>
          <img src={Logo} alt="logo" />
        </div>
        <a href="/" className={styles.request_call_link}>
          REQUEST A CALL
        </a>
      </div>
      <div className={styles.footer_menu_holder}>
        <div
          className={`${styles.footer_first_section} ${styles.footer_section}`}
        >
          <a href="/">Studio</a>
          <a href="/">Our Work</a>
          <a href="/">Services</a>
          <a href="/">Information</a>
          <p className={styles.description}>
            We are a digital design agency founded in 2004 in Sofia. We are all
            about the never ending journey of discovering, finding the best
            balance between form and function.
          </p>
        </div>

        <div
          className={`${styles.footer_second_section} ${styles.footer_section}`}
        >
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact Us</a>
          <a href="/">Cookie Preferences</a>
        </div>

        <div
          className={`${styles.footer_third_section} ${styles.footer_section}`}
        >
          <p className={styles.section_title}>Follow us:</p>
          <div className={styles.social_icons_holder}>
            <img src={Facebookicon} alt="facebook" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={LinkedinIcon} alt="twitter" />
          </div>
          <p className={styles.section_title}>Contact</p>
          <p className={styles.description}>
            19, Dondukov blvd., Floor 6, Sofia 1000 Bulgaria <br />
            Phone: 00 359 2 9046599
            <br />
            Web: inq@chromeye.com
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Footer;
