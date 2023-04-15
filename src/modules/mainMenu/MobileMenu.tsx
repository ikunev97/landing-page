import { useState } from "react";
import { BurgerMenuIcon } from "../../common/components/BurgerMenuIcon";
import { IMenu } from "../../types";
import styles from "./MobileMenuStyles.module.css";

let Logo = require("../../assets/logo.png");

type IMainMenuItems = {
  mainMenuItems: IMenu[];
};
const MobileMenu = ({ mainMenuItems }: IMainMenuItems): JSX.Element => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <div className={styles.mobile_menu_wrapper}>
        <div className={styles.mobile_menu_holder}>
          <div className={styles.logo_holder}>
            <img src={Logo} alt="logo" />
          </div>
          <BurgerMenuIcon
            onClick={toggleContent}
            fill={showContent ? "#00BAFF" : "#646464"}
          />
        </div>
      </div>
      {showContent && (
        <div className={styles.menu_items_holder}>
          {mainMenuItems &&
            mainMenuItems.map((item, index) => {
              if (item.url === null) return null;
              return (
                <div
                  key={item.order}
                  className={`${styles.menu_item}  ${
                    mainMenuItems.length - 1 === index ? styles.button : ""
                  }`}
                >
                  <a href={item.url}>{item.name.toUpperCase()}</a>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
