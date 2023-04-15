type IIcon = {
  onClick?: () => void;
  fill: string;
};

export const BurgerMenuIcon = ({ onClick, fill }: IIcon): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      width="38"
      height="33"
      viewBox="0 0 38 33"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.866733V6.185L37.2279 6.18499V0.86673L0 0.866733ZM0 19.5259V14.2076L37.2279 14.2076V19.5259L0 19.5259ZM0 32.8667V27.5485L37.2279 27.5485V32.8667L0 32.8667Z"
        fill={fill}
      />
    </svg>
  );
};
