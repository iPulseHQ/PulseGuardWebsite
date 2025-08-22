"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const BoxesContainer = () => {
  const rows = new Array(80).fill(1);
  const cols = new Array(60).fill(1);
  const [hoveredStates, setHoveredStates] = useState<{ [key: string]: { color: string; timestamp: number } }>({});
  const timeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Prachtige, levendige kleuren met extra variatie
  const vibrantColors = [
    "#ff6b6b", // coral red
    "#4ecdc4", // turquoise
    "#45b7d1", // sky blue
    "#96ceb4", // sage green
    "#feca57", // golden yellow
    "#ff9ff3", // light pink
    "#54a0ff", // bright blue
    "#5f27cd", // purple
    "#00d2d3", // cyan
    "#ff6b9d", // rose pink
    "#1dd1a1", // emerald
    "#f368e0", // magenta
    "#00a8cc", // ocean blue
    "#ab83c9", // lavender
    "#f7dc6f", // soft yellow
    "#ff4757", // red salsa
    "#3742fa", // blue jeans
    "#2f3542", // dark slate
    "#ffa502", // orange juice
    "#ff6348", // tomato
    "#7bed9f", // light green
    "#70a1ff", // lighter blue
    "#a29bfe", // light purple
    "#fd79a8", // pink rose
    "#00b894", // mint green
  ];

  const getRandomVibrantColor = () => {
    return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  };

  const handleHoverStart = (i: number, j: number) => {
    const key = `${i}-${j}`;
    const color = getRandomVibrantColor();

    setHoveredStates(prev => {
      // Limiteer het aantal actieve states voor performance
      const activeStates = Object.keys(prev).length;
      if (activeStates > 50) {
        // Verwijder de oudste state
        const sortedKeys = Object.keys(prev).sort((a, b) => prev[a].timestamp - prev[b].timestamp);
        const keyToRemove = sortedKeys[0];
        const newState = { ...prev };
        delete newState[keyToRemove];
        return {
          ...newState,
          [key]: { color, timestamp: Date.now() }
        };
      }
      return {
        ...prev,
        [key]: { color, timestamp: Date.now() }
      };
    });

    // Clear existing timeout
    if (timeoutRef.current[key]) {
      clearTimeout(timeoutRef.current[key]);
    }

    // Set new timeout for fade effect
    timeoutRef.current[key] = setTimeout(() => {
      setHoveredStates(prev => {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      });
      delete timeoutRef.current[key];
    }, 3000); // Fade after 3 seconds
  };

  const getBoxStyle = (i: number, j: number) => {
    const key = `${i}-${j}`;
    const state = hoveredStates[key];

    if (state) {
      const timeElapsed = Date.now() - state.timestamp;
      const fadeProgress = Math.min(timeElapsed / 3000, 1);
      const opacity = 1 - fadeProgress * 0.7; // Fade to 30% opacity

      return {
        backgroundColor: state.color,
        opacity: opacity,
        boxShadow: `0 0 20px ${state.color}40`,
        transition: "all 0.3s ease-out",
      };
    }

    return {};
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute inset-0 flex w-full h-full z-0"
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-12 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className="w-20 h-12 border-r border-t border-slate-700 relative cursor-pointer"
              style={getBoxStyle(i, j)}
              onMouseEnter={() => handleHoverStart(i, j)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
            >
              {j % 4 === 0 && i % 4 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-8 w-12 -top-[16px] -left-[26px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
