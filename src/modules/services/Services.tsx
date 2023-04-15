import SectionDescription from "../../common/components/SectionDescription";
import SectionTitle from "../../common/components/SectionTitle";
import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IServices as IServicesType } from "../../types";
import styles from "./ServicesStyle.module.css";

type IServices = {
  services: IServicesType;
};

const Services = ({ services }: IServices): JSX.Element => {
  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <SectionTitle title={services.title} align="center" />
        <SectionDescription description={services.description} />
        <div className={styles.items_holder}>
          {services.items.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <img
                  className={styles.item_icon}
                  src={item.icon}
                  alt={item.title}
                />
                <p className={styles.item_title}>{item.title}</p>

                <p className={styles.item_description}>{item.description}</p>
              </div>
            );
          })}
        </div>
        <a className={styles.button} href={services.buttonUrl}>
          {services.buttonLabel.toUpperCase()}
        </a>
      </div>
    </LayoutWrapper>
  );
};

export default Services;
