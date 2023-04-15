import SectionDescription from "../../common/components/SectionDescription";
import SectionTitle from "../../common/components/SectionTitle";
import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IPortfolio } from "../../types";
import styles from "./OurWorkStyles.module.css";

export type IOurWork = {
  portfolio: IPortfolio;
};

const OurWork = ({ portfolio }: IOurWork): JSX.Element => {
  return (
    <LayoutWrapper>
      <SectionTitle title={portfolio.title} align="center" />
      <SectionDescription description={portfolio.description} />
      <div className={styles.portfolio_wrapper}>
        {portfolio.items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? styles.item_holder
                  : styles.reverse_item_holder
              }
            >
              <div className={styles.item_info}>
                <p className={styles.item_title}>{item.title}</p>
                <p className={styles.item_description}>{item.description}</p>
                <a className={styles.button} href={item.buttonUrl}>
                  {item.buttonLabel.toUpperCase()}
                </a>
              </div>
              <div className={styles.item_image}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
    </LayoutWrapper>
  );
};

export default OurWork;
