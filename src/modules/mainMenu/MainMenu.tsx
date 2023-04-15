import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IMenu } from "../../types";
import styles from "./MainMenuStyles.module.css";

let Logo = require("../../assets/logo.png");

type IMainMenuItems = {
  mainMenuItems: IMenu[];
};
const MainMenu = ({ mainMenuItems }: IMainMenuItems): JSX.Element => {
  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <div className={styles.logo_holder}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.menu_items_holder}>
          {mainMenuItems &&
            mainMenuItems.map((item) => {
              if (item.url === null) return null;
              return (
                <a
                  className={styles.menu_item}
                  key={item.order}
                  href={item.url}
                >
                  {item.name.toUpperCase()}
                </a>
              );
            })}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default MainMenu;
