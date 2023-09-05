import { useEffect, useState } from "react";
import { AnimatedText } from "../animated-text"

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [copied])

  return (
    <div>
      <AnimatedText invertBg delay={0} text="EMAIL:" top="calc(50% - 30px)" left="calc(50% - 180px)" />
      <AnimatedText pointer invertBg={copied} delay={0} text={copied ? "COPIED" : "CARLO.BAGNOLI.GOMEZ@GMAIL.COM"} top="calc(50% - 30px)" left="calc(50% - 55px)" onClick={() => {
        navigator.clipboard.writeText("carlo.bagnoli.gomez@gmail.com");
        setCopied(true);
      }} />
      <AnimatedText invertBg delay={0} text="GITHUB:" top="calc(50% + 0px)" left="calc(50% - 180px)" />
      <AnimatedText pointer delay={0} text="GITHUB.COM/CARLOBAGNOLI" top="calc(50% - 0px)" left="calc(50% - 55px)" onClick={() => window.location.replace("https://github.com/carlobagnoli")} />
      <AnimatedText invertBg delay={0} text="LINKEDIN:" top="calc(50% + 30px)" left="calc(50% - 180px)" />
      <AnimatedText pointer delay={0} text="LINKEDIN.COM/IN/CARLO-BAGNOLI" top="calc(50% + 30px)" left="calc(50% - 55px)"onClick={() => window.location.replace("https://linkedin.com/in/carlo-bagnoli")} />
    </div>
  )
}
