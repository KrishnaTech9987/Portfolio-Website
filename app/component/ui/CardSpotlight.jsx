"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
// import { CanvasRevealEffect } from "./canvas-reveal-effect";
import CanvasRevealEffect from "./canvas-reveal-effect";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return React.createElement(
    "div",
    {
      className: cn(
        "group/spotlight p-10 h-[300px] rounded-md relative border border-neutral-800 bg-white dark:border-neutral-800",
        className
      ),
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...props,
    },
    React.createElement(
      motion.div,
      {
        className:
          "pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100",
        style: {
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        },
      },
      isHovering &&
        React.createElement(CanvasRevealEffect, {
          animationSpeed: 5,
          containerClassName:
            "bg-transparent absolute inset-0 pointer-events-none",
          colors: [
            [59, 130, 246],
            [139, 92, 246],
          ],
          dotSize: 3,
        }),
      children
    )
  );
};