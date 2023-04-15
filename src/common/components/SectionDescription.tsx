import style from "./Styles.module.css";

type IDescription = {
  description: string;
  align?: "center" | "left" | "right" | "justify" | "end";
};

const SectionDescription = ({
  description,
  align,
}: IDescription): JSX.Element => {
  return <p className={style.section_description}>{description}</p>;
};

export default SectionDescription;
