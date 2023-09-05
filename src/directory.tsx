import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const W = "#FFFFFF";
const T = "#FFFFFF00";

const Entry = ({ text, goto }: { text: string; goto: string }) => {
  const isWelcome = window.location.pathname === "/";

  const [isDown, setIsDown] = useState(false);

  return (
    <motion.div
      initial={{ backgroundColor: "#FFFFFF" }}
      animate={{
        backgroundColor: [W, W, W, T, W, T],
        color: [T, T, T, W, T, W],
      }}
      transition={{ delay: isWelcome ? 2.5 + 0.1 : 0, duration: 0.3 }}
    >
      <Link to={goto} style={{ textDecoration: "none" }}>
        <motion.h3
          style={{
            color: "white",
            fontFamily: "JetBrains Mono",
            letterSpacing: "1px",
            width: "170px",
            padding: "5px 10px",
            cursor: "pointer",
            background: isDown ? W : T,
          }}
          whileHover={{
            border: `2px solid white`,
            padding: "3px 8px",
          }}
          transition={{ duration: 0 }}
          onMouseDown={() => setIsDown(true)}
          onMouseUp={() => setIsDown(false)}
        >
          {text}
        </motion.h3>
      </Link>
    </motion.div>
  );
};

export const Directory = () => {
  const isWelcome = window.location.pathname === "/";

  return (
    <div>
      <motion.div
        style={{
          position: "absolute",
          display: "flex",
          gap: "1px",
          flexDirection: "column",
          top: "50%",
          transform: "translate(0%, -50%)",
          left: "calc(50% - 400px)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: isWelcome ? 11.5 : 0, duration: 0.1 }}
      >
        <Entry text="HOME" goto="/" />
        <Entry text="ABOUT ME" goto="/about" />
        <Entry text="WORK" goto="/work" />
        <Entry text="BLOG" goto="/blog" />
        <Entry text="CONTACT" goto="/contact" />
        <Entry text="BUY ME A BOOK" goto="https://paypal.me/carloabagnoli" />
      </motion.div>
    </div>
  );
};
