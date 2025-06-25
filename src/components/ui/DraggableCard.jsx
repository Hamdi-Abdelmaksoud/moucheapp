"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion"; // ✅ corriger ici aussi

export const DraggableCardBody = ({
  className,
  children,
  reset = false, // ✅ prop reset
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useMotionValue(0); // ✅ position drag
  const y = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();

  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig);
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig);

  // ✅ RESET LOGIC
  useEffect(() => {
    if (reset) {
      x.set(0);
      y.set(0);
      mouseX.set(0);
      mouseY.set(0);
      controls.start({
        rotateX: 0,
        rotateY: 0,
        transition: {
          type: "spring",
          ...springConfig,
        },
      });
    }
  }, [reset]);

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: { type: "spring", ...springConfig },
        });

        const vX = velocityX.get();
        const vY = velocityY.get();
        const velocityMagnitude = Math.sqrt(vX * vX + vY * vY);
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + vX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + vY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-[250px] w-[202px] overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
        className
      )}
    >
      {children}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

// Container inchangé
export const DraggableCardContainer = ({ className, children }) => {
  return <div className={cn("[perspective:3000px]", className)}>{children}</div>;
};
