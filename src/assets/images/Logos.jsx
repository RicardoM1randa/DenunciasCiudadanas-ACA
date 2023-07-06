import * as React from "react";
const Logo = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 500 500">
    <path fill="#471150" d="m83 367 2-15.5 88.5 85-1.5 17L83 367Z" />
    <path
      fill="#471150"
      d="m173.5 436.5 244.5-38-1 15-245 40 1.5-17ZM162.964 279.777c.231-.767-.495-1.457-1.26-1.22l-30.527 9.459c-.947.293-1.698-.822-1.07-1.589l44.395-54.208a1 1 0 0 1 1.676.203l24.799 51.981a1 1 0 0 0 1.499.372l110.801-82.366a1 1 0 0 1 1.571.574l7.09 30.252c.041.173.127.333.25.462l50.235 52.605c.707.739-.022 1.937-1.004 1.65l-35.64-10.431c-.763-.224-1.478.465-1.246 1.226 3.081 10.098 18.673 61.324 24.967 84.253 7 25.5-68.179 35.01-115 34-43.649-.941-113-12-106.5-34 5.852-19.806 21.834-72.841 24.964-83.223Z"
    />
    <path
      fill="#F85D0E"
      d="M227.264 41.872a1 1 0 0 1 1.127-.725l40.989 6.75a1 1 0 0 1 .797.706l30.48 103.731c.178.604.863.896 1.421.606L456.11 72.9c1.086-.565 2.041.942 1.066 1.683L310.5 186l-102.017 75.77a1 1 0 0 1-1.502-.379L182 208l-24.248-51.824c-.405-.866.52-1.753 1.368-1.311l31.778 16.561a1 1 0 0 0 1.427-.626l34.939-128.928Z"
    />
  </svg>
);

const LogoOscuro = (props) => (
  <svg
    {...props}
    preserveAspectRatio="none"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none">
    <path fill="#fff" d="m83 367 2-15.5 88.5 85-1.5 17L83 367Z" />
    <path
      fill="#fff"
      d="m173.5 436.5 244.5-38-1 15-245 40 1.5-17ZM162.964 279.777c.231-.767-.495-1.457-1.26-1.22l-30.527 9.459c-.947.293-1.698-.822-1.07-1.589l44.395-54.208a1 1 0 0 1 1.676.203l24.799 51.981a1 1 0 0 0 1.499.372l110.801-82.366a1 1 0 0 1 1.571.574l7.09 30.252c.041.173.127.333.25.462l50.235 52.605c.707.739-.022 1.937-1.004 1.65l-35.64-10.431c-.763-.224-1.478.465-1.246 1.226 3.081 10.098 18.673 61.324 24.967 84.253 7 25.5-68.179 35.01-115 34-43.649-.941-113-12-106.5-34 5.852-19.806 21.834-72.841 24.964-83.223Z"
    />
    <path
      fill="#fff"
      d="M227.264 41.872a1 1 0 0 1 1.127-.725l40.989 6.75a1 1 0 0 1 .797.706l30.48 103.731c.178.604.863.896 1.421.606L456.11 72.9c1.086-.565 2.041.942 1.066 1.683L310.5 186l-102.017 75.77a1 1 0 0 1-1.502-.379L182 208l-24.248-51.824c-.405-.866.52-1.753 1.368-1.311l31.778 16.561a1 1 0 0 0 1.427-.626l34.939-128.928Z"
    />
  </svg>
);

const Background404 = (props) => (
  <svg
    {...props}
    preserveAspectRatio="none"
    viewBox="0 0 960 540"
    xmlns="http://www.w3.org/2000/svg">
    <path fill="#F7EEC7" d="M0 0h960v540H0z" />
    <path
      fill="#471150"
      d="M960 162c-27.3-5.8-54.6-11.5-79.5-24.3s-47.4-32.6-60.8-56.7C806.4 56.9 802.2 28.4 798 0h162ZM0 378c28.9 3.9 57.8 7.8 81 21.7 23.2 13.9 40.7 37.8 53.2 62.8 12.6 25 20.2 51.3 27.8 77.5H0Z"
    />
  </svg>
);

const HomeHeroBackground = (props) => (
  <svg
    {...props}
    preserveAspectRatio="none"
    viewBox="0 0 960 540"
    xmlns="http://www.w3.org/2000/svg">
    <path fill="#471150" d="M0 0h960v540H0z" />
    <path
      id="wave1"
      fill="#f7eec7"
      d="m0 368 22.8 9.2c22.9 9.1 68.5 27.5 114.2 29.5s91.3-12.4 137-20c45.7-7.7 91.3-8.7 137.2-7 45.8 1.6 91.8 6 137.6 14.8 45.9 8.8 91.5 22.2 137.2 28 45.7 5.8 91.3 4.2 137-4.5s91.3-24.3 114.2-32.2L960 378v163H0Z"
    />
    <path
      id="wave2"
      fill="#f1d28f"
      d="m0 423 22.8 5c22.9 5 68.5 15 114.2 13.2 45.7-1.9 91.3-15.5 137-15.5s91.3 13.6 137.2 17.5C457 447 503 441 548.8 431.5c45.9-9.5 91.5-22.5 137.2-27 45.7-4.5 91.3-.5 137 2.5s91.3 5 114.2 6l22.8 1v127H0Z"
    />
    <path
      id="wave3"
      fill="#f1b25c"
      d="m0 459 22.8-.2c22.9-.1 68.5-.5 114.2-6.5s91.3-17.6 137-23.5c45.7-5.8 91.3-5.8 137.2.7C457 436 503 449 548.8 456.8c45.9 7.9 91.5 10.5 137.2 5.4 45.7-5.2 91.3-18.2 137-21.7s91.3 2.5 114.2 5.5l22.8 3v92H0Z"
    />
    <path
      id="wave4"
      fill="#f48d30"
      d="m0 492 22.8-.7c22.9-.6 68.5-2 114.2-1.3s91.3 3.3 137 4.7c45.7 1.3 91.3 1.3 137.2-5 45.8-6.4 91.8-19 137.6-18.9 45.9.2 91.5 13.2 137.2 19.5 45.7 6.4 91.3 6 137 .5s91.3-16.1 114.2-21.5L960 464v77H0Z"
    />
    <path
      id="wave5"
      fill="#f85d0e"
      d="m0 515 22.8.8c22.9.9 68.5 2.5 114.2.7s91.3-7.2 137-8.3c45.7-1.2 91.3 1.8 137.2-1 45.8-2.9 91.8-11.5 137.6-15.9 45.9-4.3 91.5-4.3 137.2-3.8 45.7.5 91.3 1.5 137 6.3 45.7 4.9 91.3 13.5 114.2 17.9L960 516v25H0Z"
    />
  </svg>
);

export { Logo, LogoOscuro, Background404, HomeHeroBackground };