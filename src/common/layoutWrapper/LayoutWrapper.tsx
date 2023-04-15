import styles from "./LayoutWrapperStyles.module.css";

export type ILayoutWrapper = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: ILayoutWrapper): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LayoutWrapper;
