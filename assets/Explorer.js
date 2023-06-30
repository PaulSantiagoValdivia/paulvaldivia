import React, { useState } from 'react';

export default function Explorer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fill = isHovered ? '#ffffff' : '#605F5F';

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <g clipPath="url(#clip0_126_724)">
        <mask id="mask0_126_724" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_126_724)">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.6836 9.6C16.7556 10.3548 16.8 11.1504 16.8 12C16.8 12.3182 16.6735 12.6235 16.4485 12.8485C16.2235 13.0735 15.9182 13.2 15.6 13.2C15.2818 13.2 14.9765 13.0735 14.7515 12.8485C14.5265 12.6235 14.4 12.3182 14.4 12C14.4 11.1444 14.3532 10.3464 14.274 9.6H9.7104C9.54362 11.1956 9.54202 12.8041 9.7056 14.4H12C12.3182 14.4 12.6235 14.5265 12.8485 14.7515C13.0735 14.9765 13.2 15.2818 13.2 15.6C13.2 15.9182 13.0735 16.2235 12.8485 16.4485C12.6235 16.6735 12.3182 16.8 12 16.8H10.0992C10.662 19.296 11.5416 20.892 12.0012 21.6C12.0012 21.6 12.948 21.6156 13.1124 21.6024C13.4293 21.5819 13.7416 21.6868 13.9818 21.8944C14.222 22.1021 14.371 22.3958 14.3964 22.7124C14.4196 23.0297 14.3158 23.3431 14.1078 23.584C13.8998 23.8247 13.6049 23.9731 13.2876 23.9964C13.1748 24.0048 12 24 12 24C5.3832 24 0 18.6168 0 12C0 5.382 5.3832 0 12 0C18.6168 0 24 5.382 24 12C24 12.4548 23.9568 12.8988 23.9052 13.3392C23.8576 13.6464 23.6927 13.9231 23.4452 14.1113C23.1978 14.2993 22.887 14.3843 22.5784 14.348C22.2696 14.3118 21.9869 14.1574 21.7897 13.9171C21.5924 13.6769 21.4961 13.3694 21.5208 13.0596C21.5628 12.7104 21.6 12.36 21.6 12C21.6 11.1696 21.4824 10.368 21.2844 9.6H16.6836ZM11.9856 2.4432C11.5224 3.1704 10.6656 4.7604 10.1088 7.2H13.8732C13.314 4.7604 12.4512 3.1704 11.9856 2.4432ZM2.7156 14.4H7.2984C7.2288 13.6452 7.1844 12.852 7.1844 12.0048C7.18517 11.2018 7.2236 10.3994 7.2996 9.6H2.7156C2.5164 10.368 2.4 11.1696 2.4 12C2.40299 12.8101 2.50903 13.6166 2.7156 14.4ZM3.6984 16.8C4.8834 18.8444 6.77824 20.3822 9.0228 21.1212C8.39753 19.7392 7.93522 18.289 7.6452 16.8H3.6984ZM7.6476 7.2C8.0088 5.3988 8.5296 3.9564 9.0276 2.8764C6.78082 3.61478 4.88402 5.15365 3.6984 7.2H7.6476ZM16.3344 7.2H20.3004C19.1099 5.14402 17.2018 3.60038 14.9424 2.8656C15.5753 4.2506 16.0426 5.70547 16.3344 7.2Z" />
          <path d="M18.2678 22.7345L15.2077 16.0021C14.9783 15.4974 15.4975 14.9783 16.0022 15.2076L22.7345 18.2678C23.194 18.4766 23.206 19.125 22.7545 19.3507L20.6642 20.3958C20.5481 20.4539 20.454 20.5481 20.3959 20.6641L19.3507 22.7545C19.125 23.206 18.4768 23.194 18.2678 22.7345Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_126_724">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
