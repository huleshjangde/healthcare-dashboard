import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="bg-white fixed rounded-lg left-0 top-0 w-[64px] gap-20 h-screen flex flex-col items-center px-10 py-10 shadow-lg">
      <Link href={"/"}>
        <FlagIcon className="h-10 w-10 " />
      </Link>

      <div className="flex flex-col gap-10 justify-center items-center">
        <Link href={"/"}>
          {" "}
          <LayoutDashboardIcon className="h-6 w-6 mb-6 bg-black text-white" />
        </Link>
        <Link href={"/"}>
          {" "}
          <FolderIcon className="h-6 w-6 mb-6" />{" "}
        </Link>
        <Link href={"/"}>
          {" "}
          <MailIcon className="h-6 w-6 mb-6" />{" "}
        </Link>
        <Link href={"/"}>
          {" "}
          <TextIcon className="h-6 w-6 mb-6" />{" "}
        </Link>
        <Link href={"/"}>
          {" "}
          <SettingsIcon className="h-6 w-6 mb-6" />
        </Link>
        <Link href={"/"}>
          {" "}
          <LogOutIcon className="h-6 w-6 mb-6" />{" "}
        </Link>
      </div>
    </nav>
  );
}

function FlagIcon(props: any) {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0671 6.96338L23.6118 5.41866C26.6453 2.38522 31.5837 2.31014 34.6347 5.3261C35.7907 6.47144 36.559 7.95014 36.8315 9.5545C37.104 11.1589 36.867 12.8083 36.154 14.2711C35.8119 14.9698 35.6967 15.758 35.8242 16.5254C35.952 17.2929 36.316 18.0013 36.8658 18.5517C37.8768 17.5384 38.6781 16.3358 39.2241 15.0127C39.7702 13.6895 40.0502 12.2718 40.0482 10.8404C40.0461 9.40908 39.7622 7.99213 39.2124 6.67057C38.6626 5.34898 37.8578 4.14868 36.844 3.13822C32.5779 -1.10386 25.6531 -1.01944 21.3989 3.23455L6.67509 17.958L5.46466 16.7476C2.37978 13.6627 2.36012 8.62013 5.49942 5.59008C6.66145 4.47194 8.1419 3.74203 9.73644 3.50109C11.331 3.26016 12.961 3.52008 14.4015 4.24497C15.059 4.5819 15.8061 4.70243 16.5362 4.58935C17.2663 4.47627 17.942 4.13537 18.4668 3.61532L18.5043 3.57798C18.516 3.56638 18.5253 3.55258 18.5316 3.53736C18.5379 3.52217 18.5412 3.50586 18.5412 3.48939C18.5412 3.47293 18.5379 3.45662 18.5316 3.44143C18.5253 3.42623 18.516 3.41243 18.5043 3.40081C16.4778 1.42519 13.7622 0.315486 10.932 0.306514C8.10181 0.297544 5.37915 1.39001 3.34014 3.35274C-1.0521 7.59283 -1.03641 14.6437 3.28056 18.9607L18 33.6801L16.4364 35.2437C13.403 38.2772 8.46433 38.3522 5.41361 35.3363C4.25758 34.191 3.48935 32.7122 3.21682 31.1079C2.9443 29.5036 3.18114 27.8542 3.89411 26.3913C4.23617 25.6925 4.35145 24.9044 4.22388 24.1371C4.09628 23.3696 3.73217 22.6611 3.18243 22.1107C2.17148 23.1241 1.37009 24.3266 0.824041 25.6496C0.277989 26.9729 -0.00201806 28.3905 1.09485e-05 29.822C0.00203997 31.2533 0.286065 32.6703 0.835867 33.9918C1.38567 35.3134 2.19047 36.5137 3.20428 37.5242C7.4702 41.7664 14.3951 41.6822 18.6493 37.428L33.3922 22.6849L34.6072 23.8999C37.6407 26.9334 37.7158 31.8718 34.6998 34.9225C33.5545 36.0788 32.0757 36.8468 30.4714 37.1196C28.8671 37.3921 27.2177 37.1551 25.7548 36.442C25.0559 36.0998 24.2673 35.9844 23.4996 36.1123C22.7319 36.24 22.0232 36.6045 21.4728 37.1547C22.4862 38.1657 23.6887 38.9672 25.0118 39.5132C26.335 40.0592 27.7526 40.3393 29.1841 40.3373C30.6154 40.3351 32.0324 40.0511 33.3539 39.5013C34.6756 38.9515 35.8759 38.1467 36.8863 37.1329C41.1286 32.867 41.0442 25.942 36.7902 21.688L22.0671 6.96338ZM20.198 31.4811L8.8737 20.1568L19.8683 9.16239L31.1926 20.4867L20.198 31.4811Z"
        fill="#D08726"
      />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_530)">
        <path
          d="M21.25 3.75H26.25C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H8.75V1.25H11.25V3.75H18.75V1.25H21.25V3.75ZM5 11.25V23.75H25V11.25H5ZM7.5 16.25H13.75V21.25H7.5V16.25Z"
          fill="#707070"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_530">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LayoutDashboardIcon(props: any) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="12" fill="#303030" />
      <g clip-path="url(#clip0_1_523)">
        <path
          d="M18.75 31.25H28.75V18.75H18.75V31.25ZM18.75 41.25H28.75V33.75H18.75V41.25ZM31.25 41.25H41.25V28.75H31.25V41.25ZM31.25 18.75V26.25H41.25V18.75H31.25Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_523">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(15 15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogOutIcon(props: any) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_656)">
        <path
          d="M5 22.5H7.5V25H22.5V5H7.5V7.5H5V3.75C5 3.41848 5.1317 3.10054 5.36612 2.86612C5.60054 2.6317 5.91848 2.5 6.25 2.5H23.75C24.0815 2.5 24.3995 2.6317 24.6339 2.86612C24.8683 3.10054 25 3.41848 25 3.75V26.25C25 26.5815 24.8683 26.8995 24.6339 27.1339C24.3995 27.3683 24.0815 27.5 23.75 27.5H6.25C5.91848 27.5 5.60054 27.3683 5.36612 27.1339C5.1317 26.8995 5 26.5815 5 26.25V22.5ZM7.5 13.75H16.25V16.25H7.5V20L1.25 15L7.5 10V13.75Z"
          fill="#707070"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_656">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_540)">
        <path
          d="M2.5 11.2425C2.49934 10.2578 2.69294 9.28256 3.06971 8.37274C3.44648 7.46292 3.99902 6.63636 4.69569 5.94039C5.39236 5.24442 6.21947 4.69271 7.12967 4.31685C8.03986 3.94099 9.01526 3.74837 10 3.75001H20C24.1413 3.75001 27.5 7.11876 27.5 11.2425V26.25H10C5.85875 26.25 2.5 22.8813 2.5 18.7575V11.2425ZM25 23.75V11.2425C24.9967 9.91814 24.4686 8.64906 23.5314 7.71328C22.5943 6.77751 21.3244 6.25133 20 6.25001H10C9.34356 6.24836 8.69325 6.37632 8.08637 6.62654C7.47949 6.87676 6.92798 7.24433 6.46345 7.70815C5.99893 8.17198 5.63054 8.72294 5.37941 9.32945C5.12827 9.93595 4.99934 10.5861 5 11.2425V18.7575C5.00331 20.0819 5.53139 21.351 6.46857 22.2867C7.40576 23.2225 8.67562 23.7487 10 23.75H25ZM17.5 13.75H20V16.25H17.5V13.75ZM10 13.75H12.5V16.25H10V13.75Z"
          fill="#707070"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_540">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_545)">
        <path
          d="M4.45244 22.6664C3.8888 21.6917 3.45066 20.6497 3.14844 19.5651C3.80618 19.2306 4.35856 18.7206 4.74448 18.0916C5.13039 17.4626 5.33479 16.7392 5.33507 16.0012C5.33534 15.2633 5.13148 14.5397 4.74604 13.9104C4.3606 13.2812 3.8086 12.7708 3.1511 12.4358C3.75382 10.2564 4.90141 8.26637 6.48577 6.6531C7.10456 7.0554 7.8226 7.27865 8.56041 7.29814C9.29822 7.31763 10.027 7.13261 10.6662 6.76354C11.3054 6.39447 11.83 5.85576 12.1819 5.20702C12.5339 4.55827 12.6995 3.8248 12.6604 3.08776C14.8499 2.52193 17.1474 2.52284 19.3364 3.09043C19.2977 3.82745 19.4636 4.56082 19.8159 5.20937C20.1681 5.85793 20.6929 6.3964 21.3322 6.76518C21.9715 7.13396 22.7004 7.31868 23.4381 7.2989C24.1759 7.27912 24.8938 7.05561 25.5124 6.6531C26.2844 7.43976 26.9698 8.33443 27.5458 9.3331C28.1231 10.3318 28.5551 11.3731 28.8498 12.4344C28.192 12.769 27.6396 13.2789 27.2537 13.9079C26.8678 14.5369 26.6634 15.2604 26.6631 15.9983C26.6629 16.7362 26.8667 17.4598 27.2522 18.0891C27.6376 18.7184 28.1896 19.2287 28.8471 19.5638C28.2444 21.7431 27.0968 23.7332 25.5124 25.3464C24.8936 24.9441 24.1756 24.7209 23.4378 24.7014C22.7 24.6819 21.9712 24.8669 21.332 25.236C20.6928 25.6051 20.1682 26.1438 19.8163 26.7925C19.4643 27.4413 19.2987 28.1747 19.3378 28.9118C17.1483 29.4776 14.8508 29.4767 12.6618 28.9091C12.7005 28.1721 12.5346 27.4387 12.1823 26.7902C11.8301 26.1416 11.3053 25.6031 10.666 25.2344C10.0267 24.8656 9.29784 24.6808 8.56007 24.7006C7.8223 24.7204 7.10439 24.9439 6.48577 25.3464C5.69776 24.5424 5.01456 23.6419 4.45244 22.6664ZM11.9991 22.9278C13.4199 23.7473 14.4882 25.0625 14.9991 26.6211C15.6644 26.6838 16.3324 26.6851 16.9978 26.6224C17.509 25.0636 18.5778 23.7484 19.9991 22.9291C21.4194 22.1073 23.0931 21.8391 24.6991 22.1758C25.0858 21.6318 25.4191 21.0518 25.6964 20.4451C24.6023 19.223 23.9979 17.64 23.9991 15.9998C23.9991 14.3198 24.6258 12.7504 25.6964 11.5544C25.4171 10.948 25.0824 10.3686 24.6964 9.82376C23.0915 10.1602 21.4188 9.8924 19.9991 9.07176C18.5783 8.25226 17.51 6.93707 16.9991 5.37843C16.3338 5.31576 15.6658 5.31443 15.0004 5.3771C14.4892 6.93596 13.4204 8.25118 11.9991 9.07043C10.5788 9.89218 8.90507 10.1605 7.2991 9.82376C6.91319 10.3681 6.57928 10.9476 6.30177 11.5544C7.39586 12.7765 8.00028 14.3595 7.9991 15.9998C7.9991 17.6798 7.37244 19.2491 6.30177 20.4451C6.58107 21.0516 6.91582 21.6309 7.30177 22.1758C8.90673 21.8394 10.5794 22.1071 11.9991 22.9278ZM15.9991 19.9998C14.9382 19.9998 13.9208 19.5783 13.1707 18.8282C12.4205 18.078 11.9991 17.0606 11.9991 15.9998C11.9991 14.9389 12.4205 13.9215 13.1707 13.1713C13.9208 12.4212 14.9382 11.9998 15.9991 11.9998C17.06 11.9998 18.0774 12.4212 18.8275 13.1713C19.5777 13.9215 19.9991 14.9389 19.9991 15.9998C19.9991 17.0606 19.5777 18.078 18.8275 18.8282C18.0774 19.5783 17.06 19.9998 15.9991 19.9998ZM15.9991 17.3331C16.3527 17.3331 16.6919 17.1926 16.9419 16.9426C17.192 16.6925 17.3324 16.3534 17.3324 15.9998C17.3324 15.6461 17.192 15.307 16.9419 15.057C16.6919 14.8069 16.3527 14.6664 15.9991 14.6664C15.6455 14.6664 15.3063 14.8069 15.0563 15.057C14.8062 15.307 14.6658 15.6461 14.6658 15.9998C14.6658 16.3534 14.8062 16.6925 15.0563 16.9426C15.3063 17.1926 15.6455 17.3331 15.9991 17.3331Z"
          fill="#707070"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_545">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TextIcon(props: any) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_535)">
        <path
          d="M15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 9.4025 6.17875 4.665 11.25 3.0725V5.7275C9.10116 6.60006 7.32225 8.19213 6.21757 10.2314C5.1129 12.2707 4.7511 14.6304 5.19407 16.9069C5.63703 19.1835 6.85724 21.2354 8.64596 22.7117C10.4347 24.1879 12.6808 24.9968 15 25C16.9922 24.9999 18.9391 24.4051 20.5911 23.2915C22.243 22.178 23.5249 20.5967 24.2725 18.75H26.9275C25.335 23.8213 20.5975 27.5 15 27.5ZM27.4375 16.25H13.75V2.5625C14.1613 2.52125 14.5787 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 15.4213 27.4788 15.8387 27.4375 16.25ZM16.25 5.0775V13.75H24.9225C24.6443 11.547 23.6411 9.49917 22.071 7.92904C20.5008 6.35892 18.453 5.35573 16.25 5.0775Z"
          fill="#707070"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_535">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
