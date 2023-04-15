import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IHero } from "../../types";
import styles from "./HeroSectionStyles.module.css";

type IHeroSection = {
  heroSection: IHero;
};

const HeroSection = ({ heroSection }: IHeroSection): JSX.Element => {
  return (
    <div className={styles.layout}>
      <LayoutWrapper>
        <div className={styles.content_holder}>
          <div className={styles.content_info}>
            <h2 className={styles.title}>{heroSection.title}</h2>
            <p className={styles.description}>{heroSection.description}</p>
            <a className={styles.button} href={heroSection.buttonUrl}>
              {heroSection.buttonLabel.toUpperCase()}
            </a>
          </div>
          <div className={styles.image_holder}>
            <img src={heroSection.image} alt={heroSection.title} />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default HeroSection;
