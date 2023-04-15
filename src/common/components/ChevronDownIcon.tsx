type IIcon = {
  onClick?: () => void;
};

export const ChevronDownIcon = ({ onClick }: IIcon): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_287)">
        <path
          d="M4 10L17 22C21.3333 18 30 10 30 10"
          stroke="#646464"
          strokeWidth="3"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_287">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(32.5) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
