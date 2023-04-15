import style from "./Styles.module.css";

type ITitle = {
  title: string;
  align?: "center" | "left" | "right" | "justify" | "end";
};

const SectionTitle = ({ title, align }: ITitle): JSX.Element => {
  return (
    <h2 style={{ textAlign: align }} className={style.section_title}>
      {title}
    </h2>
  );
};

export default SectionTitle;
