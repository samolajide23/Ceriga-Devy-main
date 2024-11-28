import {
  IArrowFull,
  IArrowHorizontal,
  ICloseIcon,
  IIcon,
  IIconProps,
  IMenuIcon,
} from "./Icon.interfaces";
import { FC } from "react";

const NotificationIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2968 16.8777C17.8242 16.7137 18.1189 16.1533 17.9549 15.6259C17.791 15.0985 17.2306 14.8039 16.7032 14.9678L17.2968 16.8777ZM8.97367 16.2458C8.42157 16.2603 7.9858 16.7197 8.00035 17.2717C8.01489 17.8238 8.47424 18.2596 9.02633 18.2451L8.97367 16.2458ZM16.1058 16.3598C16.3531 16.8537 16.9539 17.0535 17.4478 16.8062C17.9416 16.5589 18.1414 15.9581 17.8942 15.4643L16.1058 16.3598ZM16.1253 14.1654L15.2119 14.5724C15.218 14.5861 15.2244 14.5997 15.2312 14.6132L16.1253 14.1654ZM14.8013 9.40808L15.7937 9.28464C15.7918 9.26978 15.7897 9.25497 15.7871 9.24021L14.8013 9.40808ZM9.00933 2.92141C8.45705 2.92141 8.00933 3.36913 8.00933 3.92141C8.00933 4.4737 8.45705 4.92141 9.00933 4.92141V2.92141ZM9.00933 4.92141C9.56162 4.92141 10.0093 4.4737 10.0093 3.92141C10.0093 3.36913 9.56162 2.92141 9.00933 2.92141V4.92141ZM3.19867 9.40942L2.21292 9.24121C2.21038 9.25604 2.20819 9.27093 2.20633 9.28586L3.19867 9.40942ZM1.87467 14.1654L2.76882 14.6132C2.77555 14.5997 2.78198 14.5861 2.7881 14.5724L1.87467 14.1654ZM0.105846 15.4643C-0.141445 15.9581 0.0584128 16.5589 0.55224 16.8062C1.04607 17.0535 1.64686 16.8537 1.89415 16.3598L0.105846 15.4643ZM8.00933 3.92141C8.00933 4.4737 8.45705 4.92141 9.00933 4.92141C9.56162 4.92141 10.0093 4.4737 10.0093 3.92141H8.00933ZM10.0093 1.66675C10.0093 1.11446 9.56162 0.666748 9.00933 0.666748C8.45705 0.666748 8.00933 1.11446 8.00933 1.66675H10.0093ZM8.00933 3.92141C8.00933 4.4737 8.45705 4.92141 9.00933 4.92141C9.56162 4.92141 10.0093 4.4737 10.0093 3.92141H8.00933ZM10.0093 1.66675C10.0093 1.11446 9.56162 0.666748 9.00933 0.666748C8.45705 0.666748 8.00933 1.11446 8.00933 1.66675H10.0093ZM1.29682 14.9678C0.769429 14.8039 0.208999 15.0985 0.0450677 15.6259C-0.118864 16.1533 0.175782 16.7137 0.703176 16.8777L1.29682 14.9678ZM8.97367 18.2451C9.52576 18.2596 9.98511 17.8238 9.99965 17.2717C10.0142 16.7197 9.57843 16.2603 9.02633 16.2458L8.97367 18.2451ZM7.33333 17.0307C7.33333 16.4785 6.88562 16.0307 6.33333 16.0307C5.78105 16.0307 5.33333 16.4785 5.33333 17.0307H7.33333ZM12.6733 17.0307C12.6733 16.4785 12.2256 16.0307 11.6733 16.0307C11.121 16.0307 10.6733 16.4785 10.6733 17.0307H12.6733ZM16.7032 14.9678C14.1976 15.7466 11.5966 16.1767 8.97367 16.2458L9.02633 18.2451C11.8329 18.1711 14.6158 17.711 17.2968 16.8777L16.7032 14.9678ZM17.8942 15.4643L17.0195 13.7177L15.2312 14.6132L16.1058 16.3598L17.8942 15.4643ZM17.0388 13.7585C16.4054 12.3368 15.9858 10.8292 15.7937 9.28464L13.809 9.53152C14.0255 11.2718 14.4982 12.9705 15.2119 14.5724L17.0388 13.7585ZM15.7871 9.24021C15.4958 7.52936 14.8754 5.94346 13.7518 4.77622C12.6034 3.58333 11.019 2.92141 9.00933 2.92141V4.92141C10.545 4.92141 11.5853 5.4095 12.3109 6.16328C13.0612 6.9427 13.5642 8.10014 13.8155 9.57596L15.7871 9.24021ZM9.00933 2.92141C6.99936 2.92141 5.4115 3.58302 4.25912 4.77478C3.13082 5.94164 2.50529 7.52782 2.21292 9.24121L4.18442 9.57762C4.43605 8.10301 4.94251 6.94519 5.69688 6.16505C6.42716 5.40981 7.47264 4.92141 9.00933 4.92141V2.92141ZM2.20633 9.28586C2.01408 10.83 1.59451 12.3371 0.961232 13.7584L2.7881 14.5724C3.50164 12.9709 3.97439 11.2728 4.191 9.53297L2.20633 9.28586ZM0.980513 13.7177L0.105846 15.4643L1.89415 16.3598L2.76882 14.6132L0.980513 13.7177ZM10.0093 3.92141V1.66675H8.00933V3.92141H10.0093ZM10.0093 3.92141V1.66675H8.00933V3.92141H10.0093ZM0.703176 16.8777C3.38415 17.711 6.16713 18.1711 8.97367 18.2451L9.02633 16.2458C6.40338 16.1767 3.80244 15.7466 1.29682 14.9678L0.703176 16.8777ZM5.33333 17.0307V17.6974H7.33333V17.0307H5.33333ZM5.33333 17.6974C5.33333 19.7243 6.97645 21.3674 9.00333 21.3674V19.3674C8.08102 19.3674 7.33333 18.6197 7.33333 17.6974H5.33333ZM9.00333 21.3674C11.0302 21.3674 12.6733 19.7243 12.6733 17.6974H10.6733C10.6733 18.6197 9.92565 19.3674 9.00333 19.3674V21.3674ZM12.6733 17.6974V17.0307H10.6733V17.6974H12.6733Z"
      fill={color}
    />
  </svg>
);

const ArrowIcon: FC<IArrowHorizontal> = ({ color, width, height, type }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        type === "left"
          ? "M8.9545 19.5454L1.409 11.9999L8.9545 4.4544L10.5455 6.0454L5.716 10.8749H21V13.1249H5.716L10.5455 17.9544L8.9545 19.5454Z"
          : "M15.0455 4.45459L22.591 12.0001L15.0455 19.5456L13.4545 17.9546L18.284 13.1251H3V10.8751H18.284L13.4545 6.04558L15.0455 4.45459Z"
      }
      fill={color}
    />
  </svg>
);

const ErrorIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_275_344)">
      <path
        d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33325V7.99992"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.6667H8.00667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_275_344">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MoreVerticalIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon: FC<IMenuIcon> = ({ width, height, color, type }) =>
  type === "close" ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12L21 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18L21 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const CloseIcon: FC<ICloseIcon> = ({ width, height, color, type }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_667_623)">
      {!type && (
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <path
        d="M14 8L8 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L14 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_667_623">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const PlusIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.33325V12.6666"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33301 8H12.6663"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UploadFileIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1125_851)">
      <path
        d="M8 17L12 21L16 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8802 18.0899C21.7496 17.4786 22.4015 16.6061 22.7415 15.5991C23.0814 14.5921 23.0916 13.503 22.7706 12.4898C22.4496 11.4766 21.814 10.592 20.9562 9.96449C20.0985 9.33697 19.063 8.9991 18.0002 8.99993H16.7402C16.4394 7.82781 15.8767 6.73918 15.0943 5.81601C14.3119 4.89285 13.3303 4.15919 12.2234 3.67029C11.1164 3.18138 9.91302 2.94996 8.7037 2.99345C7.49439 3.03694 6.31069 3.3542 5.24173 3.92136C4.17277 4.48851 3.2464 5.29078 2.53236 6.26776C1.81833 7.24474 1.33523 8.37098 1.11944 9.56168C0.903647 10.7524 0.960787 11.9765 1.28656 13.142C1.61233 14.3074 2.19824 15.3837 3.00018 16.2899"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1125_851">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
);

const UploadFileBigIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 72 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.0834 13.9735C36.9399 14.4507 37.2143 14.9506 37.6927 15.0921L37.7843 15.1192L37.7882 15.1148C38.2377 15.1972 38.6856 14.931 38.8183 14.4867C40.0279 10.4556 43.8395 7.63841 48.0874 7.63841C48.5861 7.63841 48.9928 7.23693 48.9928 6.73932C48.9928 6.2417 48.5861 5.84023 48.0874 5.84023C42.8734 5.84023 38.4908 9.28313 37.0834 13.9735ZM37.0834 13.9735L37.2266 14.0166L37.0833 13.9736C37.0833 13.9736 37.0833 13.9735 37.0834 13.9735Z"
      fill={color}
      strokeWidth="0.3"
    />
    <path
      d="M58.6599 43.4447H54.1281C53.711 43.4447 53.3727 43.1092 53.3727 42.6956C53.3727 42.282 53.711 41.9465 54.1281 41.9465H58.6599C64.9069 41.9465 69.9896 36.9057 69.9896 30.7103C69.9896 24.5149 64.9069 19.4741 58.6599 19.4741H58.5509C58.3319 19.4741 58.1236 19.3799 57.9801 19.2157C57.8366 19.0514 57.7719 18.8336 57.8032 18.6185C57.8706 18.152 57.9046 17.6833 57.9046 17.2269C57.9046 11.8576 53.4994 7.48876 48.0854 7.48876C45.9792 7.48876 43.9705 8.14153 42.2764 9.37696C41.9042 9.64824 41.3754 9.52786 41.1602 9.12174C36.3623 0.0611148 23.8308 -1.15563 17.3339 6.72632C14.597 10.0469 13.5216 14.3664 14.3833 18.5763C14.4783 19.0413 14.1195 19.4747 13.6431 19.4747H13.3404C7.09349 19.4747 2.01071 24.5155 2.01071 30.7109C2.01071 36.9062 7.09349 41.9471 13.3404 41.9471H17.8723C18.2893 41.9471 18.6276 42.2825 18.6276 42.6961C18.6276 43.1097 18.2893 43.4452 17.8723 43.4452H13.3404C6.26038 43.4452 0.5 37.7324 0.5 30.7108C0.5 23.8862 5.94147 18.298 12.7475 17.9898C12.1082 13.6221 13.3307 9.21642 16.1642 5.77821C23.1201 -2.66124 36.4506 -1.71529 42.0857 7.69531C43.8834 6.57756 45.9405 5.9912 48.0852 5.9912C54.6445 5.9912 59.8422 11.528 59.3874 17.9968C66.1308 18.3719 71.5 23.9305 71.5 30.7103C71.5 37.7324 65.7396 43.4447 58.6595 43.4447L58.6599 43.4447Z"
      fill={color}
    />
    <path
      d="M16.8666 42.2726C16.8666 52.6829 25.406 61.1499 35.8997 61.1499C46.3937 61.1499 54.9329 52.6828 54.9329 42.2726C54.9329 31.8623 46.3936 23.3954 35.8997 23.3954C25.4058 23.3954 16.8666 31.8625 16.8666 42.2726ZM18.6776 42.2726C18.6776 32.8569 26.4024 25.1939 35.8997 25.1939C45.3969 25.1939 53.1219 32.8567 53.1219 42.2726C53.1219 51.6884 45.3969 59.3514 35.8997 59.3514C26.4026 59.3514 18.6776 51.6885 18.6776 42.2726Z"
      fill={color}
      strokeWidth="0.3"
    />
    <path
      d="M35.5395 49.8116C35.5395 50.1985 35.8555 50.5101 36.2424 50.5101C36.6294 50.5101 36.9454 50.1989 36.9454 49.8116V35.5528C36.9454 35.166 36.6294 34.8544 36.2424 34.8544C35.8554 34.8544 35.5395 35.166 35.5395 35.5528V49.8116Z"
      fill={color}
      stroke={color}
      strokeWidth="0.3"
    />
    <path
      d="M40.1696 40.4359C40.3068 40.572 40.4871 40.64 40.6663 40.64L32.3155 40.4358L36.2425 36.5412L40.1696 40.4359ZM31.322 40.4359C31.5965 40.7081 32.0411 40.7083 32.3154 40.4359L35.7457 35.0602L31.322 39.4473C31.0468 39.7203 31.0468 40.163 31.322 40.4359ZM36.7391 35.0601C36.4647 34.7879 36.02 34.7877 35.7458 35.0601L40.6663 40.64C40.8452 40.64 41.0257 40.5725 41.1631 40.4357C41.4381 40.1628 41.4381 39.7202 41.1629 39.4473L36.7391 35.0601Z"
      fill={color}
      stroke={color}
      strokeWidth="0.3"
    />
  </svg>
);

const SearchIcon: FC<IIcon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#C80F0F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0004 20.9999L16.6504 16.6499"
      stroke="#C80F0F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyIcon: FC<IIcon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FullArrowIcon: FC<IArrowFull> = ({ size, color, type }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={type === "left" ? "M19 12H5" : "M5 12H19"}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={type === "left" ? "M12 19L5 12L12 5" : "M12 5L19 12L12 19"}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotifyIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M22 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V14C19 14.7956 19.3161 15.5587 19.8787 16.1213C20.4413 16.6839 21.2044 17 22 17Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon: FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1465_1417)">
      <path
        d="M6.66602 8.66672C6.95232 9.04948 7.31759 9.36618 7.73705 9.59535C8.15651 9.82452 8.62035 9.9608 9.09712 9.99495C9.57388 10.0291 10.0524 9.9603 10.5002 9.79325C10.9481 9.62619 11.3548 9.36477 11.6927 9.02672L13.6927 7.02672C14.2999 6.39805 14.6359 5.55604 14.6283 4.68205C14.6207 3.80806 14.2701 2.97202 13.6521 2.354C13.0341 1.73597 12.198 1.38541 11.324 1.37781C10.45 1.37022 9.60802 1.7062 8.97935 2.31339L7.83268 3.45339"
        stroke="#008FE0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33347 7.33332C9.04716 6.95057 8.68189 6.63387 8.26243 6.40469C7.84297 6.17552 7.37913 6.03924 6.90237 6.0051C6.4256 5.97095 5.94707 6.03974 5.49924 6.2068C5.0514 6.37386 4.64472 6.63527 4.3068 6.97332L2.3068 8.97332C1.69961 9.60199 1.36363 10.444 1.37122 11.318C1.37881 12.192 1.72938 13.028 2.3474 13.646C2.96543 14.2641 3.80147 14.6146 4.67546 14.6222C5.54945 14.6298 6.39146 14.2938 7.02013 13.6867L8.16013 12.5467"
        stroke="#008FE0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1465_1417">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TrashIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6H5H21"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11V17"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11V17"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InviteIcon: FC = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 5V19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 12H19.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoreIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SendIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L11 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CameraIcon = () => (
  <svg
    width="67"
    height="67"
    viewBox="0 0 67 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.2077 53.0417C64.2077 54.5225 63.6194 55.9426 62.5724 56.9897C61.5253 58.0368 60.1051 58.625 58.6244 58.625H8.37435C6.89356 58.625 5.47341 58.0368 4.42634 56.9897C3.37926 55.9426 2.79102 54.5225 2.79102 53.0417V22.3333C2.79102 20.8525 3.37926 19.4324 4.42634 18.3853C5.47341 17.3382 6.89356 16.75 8.37435 16.75H19.541L25.1243 8.375H41.8744L47.4577 16.75H58.6244C60.1051 16.75 61.5253 17.3382 62.5724 18.3853C63.6194 19.4324 64.2077 20.8525 64.2077 22.3333V53.0417Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.5007 47.4583C39.6678 47.4583 44.6673 42.4588 44.6673 36.2917C44.6673 30.1245 39.6678 25.125 33.5007 25.125C27.3335 25.125 22.334 30.1245 22.334 36.2917C22.334 42.4588 27.3335 47.4583 33.5007 47.4583Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadFileIcon: FC = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"
      fill="#000000"
    />
    <path
      d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"
      fill="#000000"
    />
  </svg>
);

const PriceIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 59.998 59.998"
    version="1.1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M59.206,0.293c-0.391-0.391-1.023-0.391-1.414,0L54.085,4H30.802L1.532,33.511c-0.666,0.666-1.033,1.553-1.033,2.495   s0.367,1.829,1.033,2.495l20.466,20.466c0.687,0.687,1.588,1.031,2.491,1.031c0.907,0,1.814-0.347,2.509-1.041l28.501-29.271V5.414   l3.707-3.707C59.597,1.316,59.597,0.684,59.206,0.293z M53.499,28.874L25.574,57.553c-0.596,0.596-1.566,0.596-2.162,0   L2.946,37.087c-0.596-0.596-0.596-1.566,0.003-2.165L31.636,6h20.449l-4.833,4.833C46.461,10.309,45.516,10,44.499,10   c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5c0-1.017-0.309-1.962-0.833-2.753l4.833-4.833V28.874z M47.499,15   c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3c0.462,0,0.894,0.114,1.285,0.301l-1.992,1.992c-0.391,0.391-0.391,1.023,0,1.414   C43.987,15.902,44.243,16,44.499,16s0.512-0.098,0.707-0.293l1.992-1.992C47.386,14.106,47.499,14.538,47.499,15z" />
    <path d="M42.246,31.281L31.64,41.888c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293L43.66,32.695c0.391-0.391,0.391-1.023,0-1.414S42.637,30.891,42.246,31.281z" />
    <path d="M45.779,27.74c-0.181,0.189-0.29,0.449-0.29,0.71c0,0.27,0.109,0.529,0.29,0.71c0.189,0.189,0.449,0.29,0.71,0.29   c0.26,0,0.52-0.101,0.699-0.29c0.19-0.181,0.301-0.44,0.301-0.71c0-0.261-0.11-0.521-0.301-0.71   C46.818,27.37,46.159,27.37,45.779,27.74z" />
    <path d="M37.296,19.26c0.391-0.391,0.391-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L25.275,28.453   c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L37.296,19.26z" />
    <path d="M33.761,31.281c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l7.071-7.071c0.391-0.391,0.391-1.023,0-1.414   s-1.023-0.391-1.414,0l-7.071,7.071C33.37,30.258,33.37,30.891,33.761,31.281z" />
    <path d="M28.104,35.523l-1.414,1.414c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293l1.414-1.414c0.391-0.391,0.391-1.023,0-1.414S28.494,35.133,28.104,35.523z" />
    <path d="M17.497,28.745c0.256,0,0.512-0.098,0.707-0.293l10.606-10.606c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0   L16.79,27.038c-0.391,0.391-0.391,1.023,0,1.414C16.985,28.647,17.241,28.745,17.497,28.745z" />
    <path d="M31.639,14.6c0.26,0,0.521-0.1,0.71-0.29c0.181-0.189,0.29-0.439,0.29-0.71c0-0.26-0.109-0.52-0.3-0.71   c-0.37-0.37-1.03-0.37-1.41,0.01c-0.18,0.181-0.29,0.44-0.29,0.7s0.11,0.521,0.29,0.71C31.119,14.5,31.379,14.6,31.639,14.6z" />
    <path d="M22.449,31.28c-0.19,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.699c0.18,0.19,0.439,0.301,0.71,0.301   c0.26,0,0.52-0.11,0.699-0.29c0.19-0.19,0.301-0.45,0.301-0.71c0-0.261-0.11-0.521-0.301-0.71   C23.489,30.91,22.818,30.91,22.449,31.28z" />
    <path d="M32.349,34.109c0.181-0.18,0.29-0.439,0.29-0.71c0-0.26-0.109-0.52-0.29-0.71c-0.38-0.37-1.04-0.37-1.42,0   c-0.18,0.19-0.29,0.45-0.29,0.71c0,0.271,0.11,0.521,0.29,0.71c0.19,0.19,0.45,0.29,0.71,0.29S32.159,34.3,32.349,34.109z" />
    <path d="M24.651,47.627c0.615-0.929,0.909-2.041,0.814-3.172c-0.078-0.944-0.533-1.797-1.28-2.403   c-0.765-0.619-1.769-0.903-2.738-0.781l-2.802,0.35l-3.846-3.846c1.114-0.529,2.485-0.344,3.406,0.577   c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414c-1.707-1.707-4.352-1.918-6.293-0.635l-0.779-0.779   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.781,0.781c-0.614,0.928-0.908,2.041-0.813,3.172   c0.078,0.943,0.533,1.797,1.279,2.402c0.765,0.619,1.763,0.904,2.739,0.783l2.802-0.35l3.836,3.836   c-1.111,0.501-2.51,0.318-3.396-0.568c-0.391-0.391-1.023-0.391-1.414,0c-0.391,0.39-0.391,1.023,0,1.414   c0.943,0.944,2.199,1.465,3.535,1.465c0.996,0,1.946-0.291,2.757-0.829l0.622,0.622c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L24.651,47.627z M14.871,42.092c-0.438,0.054-0.889-0.072-1.231-0.352   c-0.319-0.26-0.514-0.62-0.547-1.016c-0.044-0.536,0.07-1.059,0.295-1.532l2.742,2.742L14.871,42.092z M21.695,43.255   c0.433-0.059,0.886,0.072,1.229,0.351c0.32,0.26,0.515,0.62,0.548,1.016c0.044,0.536-0.07,1.059-0.296,1.532l-2.741-2.741   L21.695,43.255z" />
  </svg>
);

export {
  NotificationIcon,
  ArrowIcon,
  ErrorIcon,
  MoreVerticalIcon,
  MenuIcon,
  CloseIcon,
  PlusIcon,
  UploadFileIcon,
  UploadFileBigIcon,
  SearchIcon,
  CopyIcon,
  FullArrowIcon,
  NotifyIcon,
  LinkIcon,
  TrashIcon,
  InviteIcon,
  MoreIcon,
  SendIcon,
  CameraIcon,
  DownloadFileIcon,
  PriceIcon,
};
