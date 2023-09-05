import { AnimatedText } from "../animated-text";
import { motion } from "framer-motion";

const D = 250;
const R = D / 2;
const W = 30;
const C = D * Math.PI;

export const Work = () => {
  return (
    <>
      <svg
        style={{
          height: `${D + W * 2}px`,
          width: `${D + W * 2}px`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "calc(50% + 170px)",
        }}
      >
        <motion.circle
          r={`${R}px`}
          cx={`${R + W}px`}
          cy={`${R + W}px`}
          strokeDasharray={`${C} ${C}`}
          strokeDashoffset={`${C - (C * 6) / 41}`}
          style={{
            stroke: "#FFFFFF55",
            strokeWidth: `${W}px`,
            fill: "transparent",
            transform: `rotate(${(0 / 41) * 360 - 180}deg)`,
            transformOrigin: "50% 50%",
          }}
        />

        <circle
          r={`${R}px`}
          cx={`${R + W}px`}
          cy={`${R + W}px`}
          strokeDasharray={`${C} ${C}`}
          strokeDashoffset={`${C - (C * 3) / 41}`}
          style={{
            stroke: "#FFFFFF88",
            strokeWidth: `${W}px`,
            fill: "transparent",
            transform: `rotate(${(6 / 41) * 360 - 180}deg)`,
            transformOrigin: "50% 50%",
          }}
        />

        <circle
          r={`${R}px`}
          cx={`${R + W}px`}
          cy={`${R + W}px`}
          strokeDasharray={`${C} ${C}`}
          strokeDashoffset={`${C - (C * 8) / 41}`}
          style={{
            stroke: "#FFFFFFAA",
            strokeWidth: `${W}px`,
            fill: "transparent",
            transform: `rotate(${(9 / 41) * 360 - 180}deg)`,
            transformOrigin: "50% 50%",
          }}
        />

        <circle
          r={`${R}px`}
          cx={`${R + W}px`}
          cy={`${R + W}px`}
          strokeDasharray={`${C} ${C}`}
          strokeDashoffset={`${C - (C * 24) / 41}`}
          style={{
            stroke: "#FFFFFFEE",
            strokeWidth: `${W}px`,
            fill: "transparent",
            transform: `rotate(${(17 / 41) * 360 - 180}deg)`,
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      <svg
        style={{
          height: `${D + W * 2}px`,
          width: `${D + W * 2}px`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "calc(50% - 50px)",
        }}
      >
        <line
          x1="214px"
          x2="264px"
          y1="50px"
          y2="100px"
          stroke="white"
          strokeWidth="3px"
        />
        <line
          x1="0px"
          x2="215px"
          y1="50px"
          y2="50px"
          stroke="white"
          strokeWidth="3px"
        />
      </svg>

      <AnimatedText
        text="BACKEND INTERN"
        top="calc(50% - 140px)"
        left="calc(50% - 205px)"
        delay={0}
        size="12px"
      />

      <AnimatedText
        text="PUBLIC DEFENSE"
        top="calc(50% - 120px)"
        left="calc(50% - 205px)"
        delay={0}
        size="12px"
      />

      <AnimatedText
        text="6 MONTHS"
        top="calc(50% - 90px)"
        left="calc(50% - 205px)"
        delay={0.7}
        size="8px"
      />

      <svg
        style={{
          height: `${D + W * 2}px`,
          width: `${D + W * 2}px`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "calc(50% - 60px)",
          left: "calc(50% + 10px)",
        }}
      >
        <line
          x1="214px"
          x2="264px"
          y1="50px"
          y2="100px"
          stroke="white"
          strokeWidth="3px"
        />
        <line
          x1="115px"
          x2="215px"
          y1="50px"
          y2="50px"
          stroke="white"
          strokeWidth="3px"
        />
      </svg>

      <AnimatedText
        text="FREELANCING"
        top="calc(50% - 180px)"
        left="calc(50% - 30px)"
        delay={0}
        size="12px"
      />

      <AnimatedText
        text="3 MONTHS"
        top="calc(50% - 150px)"
        left="calc(50% - 30px)"
        delay={0.7}
        size="8px"
      />

      <svg
        style={{
          height: `${D + W * 2}px`,
          width: `500px`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "calc(50% - 55px)",
          left: "calc(50% + 260px)",
        }}
      >
        <line
          x1="264px"
          x2="214px"
          y1="50px"
          y2="100px"
          stroke="white"
          strokeWidth="3px"
        />
        <line
          x1="263px"
          x2="483px"
          y1="50px"
          y2="50px"
          stroke="white"
          strokeWidth="3px"
        />
      </svg>

      <AnimatedText
        text="ENGLISH TEACHER"
        top="calc(50% - 195px)"
        left="calc(50% + 280px)"
        delay={0}
        size="12px"
        width="148px"
      />

      <AnimatedText
        text='"12 DE FEBRERO" HIGHSCHOOL'
        top="calc(50% - 177px)"
        left="calc(50% + 280px)"
        delay={0}
        size="12px"
        width="220px"
      />

      <AnimatedText
        text="8 MONTHS"
        top="calc(50% - 147px)"
        left="calc(50% + 280px)"
        delay={0.7}
        size="8px"
      />

      <svg
        style={{
          height: `${D + W * 2}px`,
          width: `${D + W * 2}px`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "calc(50% + 120px)",
          left: "calc(50% - 50px)",
        }}
      >
        <line
          x1="214px"
          x2="264px"
          y1="150px"
          y2="100px"
          stroke="white"
          strokeWidth="3px"
        />
        <line
          x1="50px"
          x2="215px"
          y1="150px"
          y2="150px"
          stroke="white"
          strokeWidth="3px"
        />
      </svg>

      <AnimatedText
        text="FULL STACK ENGINEER"
        top="calc(50% + 80px)"
        left="calc(50% - 155px)"
        delay={0}
        size="12px"
      />

      <AnimatedText
        text="SELFDECODE"
        top="calc(50% + 100px)"
        left="calc(50% - 155px)"
        delay={0}
        size="12px"
      />

      <AnimatedText
        text="24 MONTHS"
        top="calc(50% + 130px)"
        left="calc(50% - 155px)"
        delay={0.7}
        size="8px"
      />

      <AnimatedText
        text="*THE SPANS ARE IN ORDER, THOUGH IT IS NOT A TIMELINE"
        top="calc(50% + 130px)"
        left="calc(50% + 280px)"
        delay={1.5}
        width="200px"
        size="8px"
      />
    </>
  );
};
