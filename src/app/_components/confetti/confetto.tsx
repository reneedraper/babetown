'use client';
import React from 'react';
import { useSpring, animated, config, easings } from '@react-spring/web'
import { init } from 'next/dist/compiled/webpack/webpack';


interface ConfettiProps {
  numberOfConfetti?: number;
}

export default function Confetti({ numberOfConfetti = 200 }) {

  const colors: string[] = ["#ff77d0", "#e8e64a", "#0ce8d2", "#4f0dff", "#8b11ff"];
  const timing: string[] = ["ease", "ease-in-out", "ease-in", "ease-out"];


  const generateConfetti = (): JSX.Element[] => {

    const boxes: JSX.Element[] = [];
    for (let confetti = 0; confetti < numberOfConfetti; confetti++) {
      // const [confettiStyles, animateConfetti] = useSpring(() => ({
      //   from: {
      //     y: 100,
      //   },
      //   config: { duration: 500, mass: 10, tension: 200, friction: 50 }
      // }))

      // const launchConfetti = () => {
      //   animateConfetti.start({
      //     to: [{
      //       y: -510,
      //     },
      //     {
      //       y: 110,
      //     }],
      //     config: { duration: (Math.random() / 2 + 3) * 1000, mass: 10, tension: 20, friction: 26 }
      //   })
      // }

      const time = (Math.random() / 2 + 4);
      const initialRotation = `rotate(${Math.random() * 360})`
      const confettiColor = colors[Math.floor(Math.random() * colors.length)];
      const heightWidth = `${Math.ceil(Math.random() * 10) + 4}px`;
      const right = `${Math.floor((Math.random() * 2 - 1) * 100)}%`;

      // const confettiStyles = useSpring({
      //   config: {
      //     easing: easings.easeOutQuad, duration: (Math.random() / 2 + 3) * 1000, mass: 10, tension: 20, friction: 26, velocity: 1
      //   },
      //   from: {
      //     x: '1',
      //     opacity: 1,
      //     y: '0'

      //   },
      //   to: {
      //     x: right,
      //     opacity: 0,
      //     y: right,
      //   }
      // });
      boxes.push(
        // <span className="cell" key={confetti}>
        <span key={confetti} style={{ position: 'absolute', height: heightWidth, width: heightWidth, right: '50%' }}>
          <animated.div style={{
            // animation: `confetti ${time}s ease-out infinite`,
            zIndex: 99,
            color: confettiColor,
            // filter: `blur(${confettiBlur}rem)`,
            height: heightWidth,
            width: heightWidth,
            // ...confettiStyles
          }}>
            <svg viewBox="0 0 144 154" xmlns="http://www.w3.org/2000/svg" transform={initialRotation}>
              <g clip-path="url(#clip0_2642_1101)" >
                <path fill={confettiColor} d="M8.74221 48.0233C8.74221 48.0233 25.2135 108.104 53.9797 146.044C53.9797 146.044 99.2367 139.345 135.641 108.357C135.641 108.357 126.627 62.4881 90.4033 10.3359C90.4033 10.3359 50.3625 8.86707 8.74221 48.0233Z" stroke="black" stroke-width="4" stroke-miterlimit="10"></path>
              </g>
              <defs>
                <clipPath id="clip0_2642_1101">
                  <rect width="100.57" height="122.918" transform="translate(0.458008 42.3262) rotate(-24.7738)"></rect>
                </clipPath>
              </defs>
            </svg>
          </animated.div>
        </span>
        // </span>
      );
    }
    return boxes;
  };

  return (
    <>

      <div>
        {/* {generateConfetti()} */}
      </div>
    </>
  );
};

