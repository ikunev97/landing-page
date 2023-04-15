type IIcon = {
  onClick?: () => void;
};

export const ChevronUpIcon = ({ onClick }: IIcon): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_299)">
        <path
          d="M29 22L16 10C11.6667 14 3 22 3 22"
          stroke="#646464"
          strokeWidth="3"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_299">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0 32) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
