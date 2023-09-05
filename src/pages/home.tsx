import { motion } from "framer-motion";
import { AnimatedText } from "../animated-text";

import Logo from "../assets/logo.png";

export const Home = () => {
  return (
    <>
      <motion.img
        src={Logo}
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          height: "500px",
        }}
        initial={{ opacity: 0.0 }}
        animate={{ opacity: 1.0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      <AnimatedText text="CARLO BAGNOLI" />
      <AnimatedText
        text="FULLSTACK DEVELOPER"
        top="calc(50% + 35px)"
        delay={1.5}
      />
    </>
  );
};
