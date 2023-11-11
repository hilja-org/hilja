// All thanks to Anima - Figma to React converter https://www.animaapp.com/

import Image from "next/image";
import Link from "next/link";

export default function Journal() {
  return (
    <div className="bg-[#012a36] flex flex-row justify-center w-full">
      <div className="bg-[#012a36] w-[393px] h-[852px] relative">
        <div className="absolute top-[52px] left-[165px] text-shades-of-blackwhite text-[length:var(--app-subhead-16b-font-size)] text-center tracking-[var(--app-subhead-16b-letter-spacing)] leading-[var(--app-subhead-16b-line-height)] whitespace-nowrap [font-style:var(--app-subhead-16b-font-style)] text-xl">
          Journal
        </div>
        <div className="inline-flex flex-col items-start gap-[32px] absolute top-[104px] left-[39px]">
          <div className="inline-flex flex-col h-[318px] items-start gap-[12px] relative">
            <div className="relative w-fit mt-[-1.00px] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
              Monthly highlights
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <div className="flex flex-col w-[312px] items-start gap-[16px] relative">
                <div className="relative self-stretch w-full h-[92px] bg-[#52c3e633] rounded-[12px]" />
                <div className="flex w-[266px] items-center gap-[19px] absolute top-[14px] left-[21px]">
                  <svg
                    width="33"
                    height="30"
                    viewBox="0 0 33 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41667 5.625C4.89844 5.625 3.66667 6.88477 3.66667 8.4375V15H9.16667V8.4375C9.16667 6.88477 7.9349 5.625 6.41667 5.625ZM0 8.4375C0 4.81055 2.87031 1.875 6.41667 1.875C9.96302 1.875 12.8333 4.81055 12.8333 8.4375V21.5625C12.8333 25.1895 9.96302 28.125 6.41667 28.125C2.87031 28.125 0 25.1895 0 21.5625V8.4375ZM31.7911 23.4023C31.3844 24.123 30.4333 24.1699 29.8547 23.584L19.1068 12.5918C18.5339 12.0059 18.574 11.0273 19.2844 10.6113C20.625 9.82617 22.1776 9.375 23.8333 9.375C28.8979 9.375 33 13.5703 33 18.75C33 20.4434 32.5589 22.0312 31.7911 23.4023ZM28.3823 26.8887C27.0417 27.6738 25.4891 28.125 23.8333 28.125C18.7688 28.125 14.6667 23.9297 14.6667 18.75C14.6667 17.0566 15.1078 15.4688 15.8755 14.0977C16.2823 13.377 17.2333 13.3301 17.812 13.916L28.5599 24.9082C29.1328 25.4941 29.0927 26.4727 28.3823 26.8887Z"
                      fill="#52C3E6"
                    />
                  </svg>

                  <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-light text-white text-[12px] text-center tracking-[-0.24px] leading-[20px] whitespace-nowrap">
                      Congratulations!
                    </div>
                    <p className="relative w-[212px] font-normal text-white text-[15px] tracking-[-0.24px] leading-[20px]">
                      <span className="font-normal text-white text-[15px] tracking-[-0.24px] leading-[20px]">
                        Reduced pain medication consumption by{" "}
                      </span>
                      <span className="font-bold">20%</span>
                      <span className="font-normal text-white text-[15px] tracking-[-0.24px] leading-[20px]">
                        &nbsp;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[312px] items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="h-[72px] relative self-stretch w-full bg-[#52c3e633] rounded-[12px]" />
                <div className="flex w-[281px] items-center gap-[24px] absolute top-[14px] left-[21px]">
                  <svg
                    width="29"
                    height="42"
                    viewBox="0 0 29 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_38_564)">
                      <path
                        d="M15.0002 3.9375C15.0002 2.89321 15.4427 1.89169 16.2304 1.15327C17.018 0.414842 18.0863 0 19.2002 0C20.3141 0 21.3824 0.414842 22.1701 1.15327C22.9577 1.89169 23.4002 2.89321 23.4002 3.9375C23.4002 4.98179 22.9577 5.98331 22.1701 6.72173C21.3824 7.46016 20.3141 7.875 19.2002 7.875C18.0863 7.875 17.018 7.46016 16.2304 6.72173C15.4427 5.98331 15.0002 4.98179 15.0002 3.9375ZM12.069 16.3488C11.9815 16.3816 11.9027 16.4145 11.8152 16.4473L11.1152 16.7344C9.68021 17.3332 8.57771 18.4734 8.07896 19.868L7.85146 20.5078C7.36146 21.8859 5.77771 22.6242 4.30771 22.1648C2.83771 21.7055 2.05021 20.2207 2.54021 18.8426L2.76771 18.2027C3.76521 15.4055 5.97021 13.125 8.84021 11.9273L9.54021 11.6402C11.3602 10.8855 13.329 10.4918 15.324 10.4918C19.2265 10.4918 22.744 12.6902 24.2402 16.0617L25.5877 19.0887L27.4602 19.9664C28.8427 20.6145 29.4027 22.1894 28.7115 23.4855C28.0202 24.7816 26.3402 25.3066 24.9577 24.6586L22.6127 23.5676C21.7115 23.141 21.0027 22.4355 20.6177 21.5578L19.7777 19.6711L18.089 25.0441L22.4202 29.4738C22.8927 29.9578 23.2252 30.5402 23.4002 31.1801L25.4127 38.7352C25.789 40.1379 24.879 41.5652 23.374 41.918C21.869 42.2707 20.3552 41.4176 19.979 40.0066L18.054 32.7797L11.8677 26.4551C10.5727 25.1344 10.0915 23.2887 10.5815 21.5578L12.0602 16.3488H12.069ZM7.01146 32.6484L9.19896 27.5297C9.38271 27.7758 9.59271 28.0055 9.81146 28.2352L13.3727 31.8773L12.104 34.8469C11.894 35.3391 11.579 35.7902 11.1765 36.1676L5.77771 41.2289C4.68396 42.2543 2.90771 42.2543 1.81396 41.2289C0.720215 40.2035 0.720215 38.5383 1.81396 37.5129L7.01146 32.6484Z"
                        fill="#52C3E6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_38_564">
                        <rect width="29" height="42" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                    <p className="relative self-stretch mt-[-1.00px] font-normal text-white text-[15px] tracking-[-0.24px] leading-[20px]">
                      <span className="font-bold">Walking</span>
                      <span className="font-SF-subheadline-semibold [font-style:var(--SF-subheadline-semibold-font-style)] font-[number:var(--SF-subheadline-semibold-font-weight)] tracking-[var(--SF-subheadline-semibold-letter-spacing)] leading-[var(--SF-subheadline-semibold-line-height)] text-[length:var(--SF-subheadline-semibold-font-size)]">
                        &nbsp;
                      </span>
                      <span>was the most helpful activity for back pain</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[312px] h-[72px] items-start gap-[16px] relative">
                <div className="h-[86px] mb-[-14.00px] relative self-stretch w-full bg-[#52c3e633] rounded-[12px]" />
                <div className="flex w-[281px] items-center gap-[24px] absolute top-[14px] left-[21px]">
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9311 27.0701L2.69609 17.5148C2.4582 17.2939 2.23164 17.0561 2.02207 16.8125H6.9498C8.22988 16.8125 9.38535 16.0422 9.87812 14.8584L10.4729 13.4311L13.2652 19.6332C13.4805 20.1146 13.9506 20.4262 14.4773 20.4318C15.0041 20.4375 15.4855 20.1486 15.7234 19.6785L18.125 14.8697L18.2213 15.0623C18.7594 16.1385 19.8582 16.8182 21.059 16.8182H26.9779C26.7684 17.0617 26.5418 17.2996 26.3039 17.5205L16.0689 27.0701C15.6441 27.4666 15.0834 27.6875 14.5 27.6875C13.9166 27.6875 13.3559 27.4666 12.9311 27.0701ZM28.5299 14.0937H21.0533C20.8834 14.0937 20.7248 13.9975 20.6455 13.8445L19.3314 11.2221C19.0992 10.7633 18.6291 10.4687 18.1137 10.4687C17.5982 10.4687 17.1281 10.7576 16.8959 11.2221L14.551 15.9119L11.6623 9.46054C11.4414 8.96777 10.943 8.65058 10.4049 8.66191C9.8668 8.67324 9.37969 8.99609 9.17012 9.50019L7.36895 13.8219C7.30098 13.9918 7.13105 14.0994 6.9498 14.0994H0.90625C0.758984 14.0994 0.623047 14.1221 0.492773 14.1617C0.169922 13.2555 0 12.2926 0 11.3127V10.9842C0 7.025 2.86035 3.64922 6.76289 2.99785C9.3457 2.56738 11.9738 3.41133 13.8203 5.25781L14.5 5.9375L15.1797 5.25781C17.0262 3.41133 19.6543 2.56738 22.2371 2.99785C26.1396 3.64922 29 7.025 29 10.9842V11.3127C29 12.2699 28.8414 13.2102 28.5299 14.0937Z"
                      fill="#52C3E6"
                    />
                  </svg>

                  <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                    <p className="relative self-stretch mt-[-1.00px] font-normal text-white text-[15px] tracking-[-0.24px] leading-[20px]">
                      <span className="font-bold">Meditation </span>
                      <span>
                        lowered your resting heart rate on average from
                        <br />
                      </span>
                      <span className="font-bold">69 to 63</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[263px] h-[267px]">
            <p className="absolute -top-px left-0 font-medium text-transparent text-[16px] tracking-[0] leading-[normal]">
              <span className="text-white">Most effective activities</span>
              <span className="text-[#ffffff80]"> - weekly</span>
            </p>
            <div className="absolute w-[248px] h-[232px] top-[35px] left-0">
              <div className="relative h-[231px]">
                <div className="absolute w-[248px] h-[214px] top-[17px] left-0">
                  <div className="absolute w-[24px] h-[247px] top-[79px] left-[111px] bg-color-4 rounded-[10px] rotate-[90.00deg] opacity-20" />
                  <div className="absolute w-[24px] h-[84px] top-[160px] left-[30px] rounded-[10px] rotate-[90.00deg] [background:linear-gradient(180deg,rgb(176,159,255)_0%,rgb(126,82,160)_100%)]" />
                  <div className="absolute top-[147px] left-px font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                    Tai Chi
                  </div>
                  <div className="absolute top-[165px] left-px font-light text-white text-[12px] tracking-[0] leading-[normal]">
                    Alleviated pain 1 time
                  </div>
                  <div className="absolute w-[24px] h-[247px] top-[-3px] left-[112px] bg-color-4 rounded-[10px] rotate-[90.00deg] opacity-20" />
                  <div className="absolute w-[24px] h-[106px] top-[67px] left-[42px] rounded-[10px] rotate-[90.00deg] [background:linear-gradient(180deg,rgb(176,159,255)_0%,rgb(126,82,160)_100%)]" />
                  <div className="absolute top-[65px] left-px font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                    Meditation
                  </div>
                  <div className="absolute top-[83px] left-px font-light text-white text-[12px] tracking-[0] leading-[normal]">
                    Alleviated pain 3 times
                  </div>
                  <div className="absolute w-[24px] h-[247px] top-[-86px] left-[112px] bg-color-4 rounded-[10px] rotate-[90.00deg] opacity-20" />
                  <div className="absolute w-[24px] h-[193px] top-[-60px] left-[85px] rounded-[10px] rotate-[90.00deg] [background:linear-gradient(180deg,rgb(176,159,255)_0%,rgb(126,82,160)_100%)]" />
                  <div className="absolute top-0 left-px font-light text-white text-[12px] tracking-[0] leading-[normal]">
                    Alleviated pain 6 times
                  </div>
                </div>
                <div className="absolute -top-px left-px font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                  Walking
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[312px] h-[302.74px]">
            <p className="absolute -top-px left-0 font-medium text-transparent text-[16px] tracking-[0] leading-[normal]">
              <span className="text-white">Average daily pain</span>
              <span className="text-[#ffffff80]"> - weekly</span>
            </p>
            <svg
              width="312"
              height="247"
              viewBox="0 0 312 247"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-8"
            >
              <rect
                opacity="0.2"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                y="113.829"
                width="24"
                height="133.029"
                rx="10"
                fill="url(#paint0_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="144"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="144"
                y="103.543"
                width="24"
                height="143.314"
                rx="10"
                fill="url(#paint1_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="48"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="48"
                y="82.2856"
                width="24"
                height="164.571"
                rx="10"
                fill="url(#paint2_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="192"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="192"
                y="65.8286"
                width="24"
                height="181.029"
                rx="10"
                fill="url(#paint3_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="96"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="96"
                y="142.629"
                width="24"
                height="104.229"
                rx="10"
                fill="url(#paint4_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="240"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="240"
                y="174.857"
                width="24"
                height="72"
                rx="10"
                fill="url(#paint5_linear_38_569)"
              />
              <rect
                opacity="0.2"
                x="288"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="288"
                y="113.829"
                width="24"
                height="133.029"
                rx="10"
                fill="url(#paint6_linear_38_569)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_38_569"
                  x1="12"
                  y1="113.829"
                  x2="12"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_38_569"
                  x1="156"
                  y1="103.543"
                  x2="156"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_38_569"
                  x1="60"
                  y1="82.2856"
                  x2="60"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_38_569"
                  x1="204"
                  y1="65.8286"
                  x2="204"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_38_569"
                  x1="108"
                  y1="142.629"
                  x2="108"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_38_569"
                  x1="252"
                  y1="174.857"
                  x2="252"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_38_569"
                  x1="300"
                  y1="113.829"
                  x2="300"
                  y2="246.857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute w-[33px] top-[287px] left-0 opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Mon
            </div>
            <div className="absolute w-[34px] top-[287px] left-[46px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Tue
            </div>
            <div className="absolute w-[33px] top-[287px] left-[93px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Wed
            </div>
            <div className="absolute w-[34px] top-[287px] left-[139px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Thu
            </div>
            <div className="absolute w-[33px] top-[287px] left-[186px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Fri
            </div>
            <div className="absolute w-[34px] top-[287px] left-[232px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sat
            </div>
            <div className="absolute w-[33px] top-[287px] left-[279px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sun
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
            <div className="relative w-[312px] h-[302.74px]">
              <p className="absolute -top-px left-0 font-medium text-transparent text-[16px] tracking-[0] leading-[normal]">
                <span className="text-white">Medication used</span>
                <span className="text-[#ffffff80]"> - weekly</span>
              </p>
              <svg
                width="312"
                height="248"
                viewBox="0 0 312 248"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-8"
              >
                <rect
                  opacity="0.2"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  y="195"
                  width="24"
                  height="53"
                  rx="10"
                  fill="url(#paint0_linear_45_820)"
                />
                <rect
                  opacity="0.2"
                  x="144"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  opacity="0.2"
                  x="48"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  opacity="0.2"
                  x="192"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  x="192"
                  y="126"
                  width="24"
                  height="122"
                  rx="10"
                  fill="url(#paint1_linear_45_820)"
                />
                <rect
                  x="192"
                  y="195"
                  width="24"
                  height="53"
                  rx="10"
                  fill="url(#paint2_linear_45_820)"
                />
                <rect
                  opacity="0.2"
                  x="96"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  opacity="0.2"
                  x="240"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <rect
                  opacity="0.2"
                  x="288"
                  y="0.74292"
                  width="24"
                  height="246.857"
                  rx="10"
                  fill="#A08CFB"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_45_820"
                    x1="12"
                    y1="195"
                    x2="12"
                    y2="248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B09FFF" />
                    <stop offset="1" stop-color="#7E52A0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_45_820"
                    x1="204"
                    y1="126"
                    x2="204"
                    y2="248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B09FFF" />
                    <stop offset="1" stop-color="#7E52A0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_45_820"
                    x1="204"
                    y1="195"
                    x2="204"
                    y2="248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7BCEE8" />
                    <stop offset="1" stop-color="#52C3E6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute w-[33px] top-[287px] left-0 opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Mon
              </div>
              <div className="absolute w-[34px] top-[287px] left-[46px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Tue
              </div>
              <div className="absolute w-[33px] top-[287px] left-[93px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Wed
              </div>
              <div className="absolute w-[34px] top-[287px] left-[139px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Thu
              </div>
              <div className="absolute w-[33px] top-[287px] left-[186px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Fri
              </div>
              <div className="absolute w-[34px] top-[287px] left-[232px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Sat
              </div>
              <div className="absolute w-[33px] top-[287px] left-[279px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Sun
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-[32px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <div className="relative w-[24px] h-[24px] rounded-[24px] [background:linear-gradient(180deg,rgb(176,159,255)_0%,rgb(126,82,160)_100%)]" />
                  <div className="relative w-fit font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                    Panadol
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-[24px] h-[24px] rounded-[24px] [background:linear-gradient(180deg,rgb(122.54,205.87,231.68)_0%,rgb(82,195,230)_100%)]" />
                <div className="relative w-fit font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                  Vicodin
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[316px] h-[256.26px]">
            <p className="absolute -top-px left-0 font-medium text-transparent text-[16px] tracking-[0] leading-[normal]">
              <span className="text-white">Pain chart </span>
              <span className="text-[#ffffff80]">- past 6 months</span>
            </p>
            <div className="absolute w-[323px] h-[181px] top-[70px] left-[2px]">
              <div className="absolute w-[315px] h-[158px] top-[-2px] left-[-2px]">
                <svg
                  width="316"
                  height="159"
                  viewBox="0 0 316 159"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 57.7259C22.2174 57.7259 2 78.0001 2 78.0001V158.191H313V19.5115C313 19.5115 302.892 7.68748 286.909 3.85845C258.1 -3.04317 255.308 63.5001 230 63.5001C211.411 63.5001 208.897 15.8591 184.111 12.9894C159.325 10.1197 147.957 110.815 108 110C78.0674 109.39 60.8332 57.7259 44 57.7259Z"
                    fill="url(#paint0_linear_114_157)"
                  />
                  <path
                    d="M3 78.6212C3 78.6212 21.8898 55.4077 43.6387 55.4077C61.7396 55.4077 78.618 111.142 108.504 111.99C148.399 113.124 159.563 12.6079 184.311 16.5977C209.059 20.5875 210.341 64.3583 228.901 64.3582C254.17 64.3582 258.185 -5.69251 286.95 3.90286C302.908 9.2264 313 25.6655 313 25.6655"
                    stroke="url(#paint1_linear_114_157)"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path opacity="0.1" d="M2 158.192H313" stroke="#454459" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_114_157"
                      x1="157.5"
                      y1="3.35645"
                      x2="157.5"
                      y2="158.191"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B09FFF" stop-opacity="0.3" />
                      <stop offset="1" stop-color="#8D79F6" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_114_157"
                      x1="158"
                      y1="3"
                      x2="158"
                      y2="112"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B09FFF" />
                      <stop offset="1" stop-color="#7E52A0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute w-[38px] top-[170px] left-[7px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Jan
              </div>
              <div className="absolute w-[38px] top-[170px] left-[60px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Feb
              </div>
              <div className="absolute w-[38px] top-[170px] left-[113px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Mar
              </div>
              <div className="absolute w-[38px] top-[170px] left-[167px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Apr
              </div>
              <div className="absolute w-[38px] top-[170px] left-[220px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Jun
              </div>
              <div className="absolute w-[38px] top-[170px] left-[273px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Jul
              </div>
            </div>
          </div>
          <div className="relative w-[312px] h-[302.74px]">
            <p className="absolute -top-px left-0 font-medium text-transparent text-[16px] tracking-[0] leading-[normal]">
              <span className="text-white">Average daily activity</span>
              <span className="text-[#ffffff80]"> - weekly</span>
            </p>
            <svg
              width="312"
              height="248"
              viewBox="0 0 312 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-8"
            >
              <rect
                opacity="0.2"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                y="59"
                width="24"
                height="189"
                rx="10"
                fill="url(#paint0_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="144"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="144"
                y="154"
                width="24"
                height="94"
                rx="10"
                fill="url(#paint1_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="48"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="48"
                y="198"
                width="24"
                height="50"
                rx="10"
                fill="url(#paint2_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="192"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="192"
                y="115"
                width="24"
                height="133"
                rx="10"
                fill="url(#paint3_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="96"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="96"
                y="143.371"
                width="24"
                height="104.229"
                rx="10"
                fill="url(#paint4_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="240"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="240"
                y="59"
                width="24"
                height="189"
                rx="10"
                fill="url(#paint5_linear_56_1365)"
              />
              <rect
                opacity="0.2"
                x="288"
                y="0.742676"
                width="24"
                height="246.857"
                rx="10"
                fill="#A08CFB"
              />
              <rect
                x="288"
                y="114.571"
                width="24"
                height="133.029"
                rx="10"
                fill="url(#paint6_linear_56_1365)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_56_1365"
                  x1="12"
                  y1="59"
                  x2="12"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_56_1365"
                  x1="156"
                  y1="154"
                  x2="156"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_56_1365"
                  x1="60"
                  y1="198"
                  x2="60"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_56_1365"
                  x1="204"
                  y1="115"
                  x2="204"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_56_1365"
                  x1="108"
                  y1="143.371"
                  x2="108"
                  y2="247.6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_56_1365"
                  x1="252"
                  y1="59"
                  x2="252"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_56_1365"
                  x1="300"
                  y1="114.571"
                  x2="300"
                  y2="247.6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B09FFF" />
                  <stop offset="1" stop-color="#7E52A0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute w-[33px] top-[287px] left-0 opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Mon
            </div>
            <div className="absolute w-[34px] top-[287px] left-[46px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Tue
            </div>
            <div className="absolute w-[33px] top-[287px] left-[93px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Wed
            </div>
            <div className="absolute w-[34px] top-[287px] left-[139px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Thu
            </div>
            <div className="absolute w-[33px] top-[287px] left-[186px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Fri
            </div>
            <div className="absolute w-[34px] top-[287px] left-[232px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sat
            </div>
            <div className="absolute w-[33px] top-[287px] left-[279px] opacity-50 font-medium text-white text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sun
            </div>
          </div>
          <div className="relative w-[326px] h-[112px]">
            <div className="inline-flex items-center justify-center gap-[10px] px-[60px] py-[16px] absolute top-0 left-0 bg-[#52c3e6] rounded-[12px_12px_0px_12px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#012a36] text-[16px] tracking-[0] leading-[normal]">
                Any questions? Ask me!
              </div>
            </div>
            <Link href="/">
              <Image
                className="absolute w-[56px] h-[56px] top-[56px] left-[270px] object-cover"
                alt="Hilja"
                src="/android-chrome-512x512.png"
                width="512"
                height="512"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
