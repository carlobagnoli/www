import { motion } from "framer-motion";
import { BG } from "./theme";

const W = "#FFFFFF";
const T = "#FFFFFF00";

export const AnimatedText = ({
  text,
  delay = 1.0,
  invertBg,
  left,
  onClick,
  pointer,
  right = "calc(50% - 420px)",
  size,
  top = "50%",
  width = "fit-content",
}: {
  text: string;
  delay?: number;
  invertBg?: boolean;
  left?: string;
  onClick?: () => void;
  pointer?: boolean;
  right?: string;
  size?: string;
  top?: string;
  width?: string;
}) => {
  const colors = [W, W, W, T, W, T];
  const colors_bold = [BG];
  const inv_colors = [W];

  return (
    <motion.div
      style={{
        cursor: pointer ? "pointer" : "inherit",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay, duration: 0.1 }}
      onClick={onClick}
    >
      <motion.h3
        style={{
          fontFamily: "JetBrains Mono",
          letterSpacing: "1px",
          position: "absolute",
          transform: "translate(0%, -50%)",
          top,
          right,
          left,
          width,
          fontSize: size,
        }}
        initial={{ backgroundColor: "#FFFFFF" }}
        animate={{
          backgroundColor: !invertBg ? colors : inv_colors,
          color: invertBg ? colors_bold : inv_colors,
        }}
        transition={{ delay: delay + 0.1, duration: 0.3 }}
      >
        {text}
      </motion.h3>
    </motion.div>
  );
};
