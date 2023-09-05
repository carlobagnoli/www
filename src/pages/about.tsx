import moment from "moment"
import { AnimatedText } from "../animated-text";

import Me from "../assets/me.jpg";

export const About = () => {
  return (
    <div>
      <div
        style={{
          padding: "12px",
          border: "3px solid white",
          height: "min-content",
          width: "min-content",
          position: "absolute",
          transform: "translate(0%, -50%)",
          top: "calc(50% - 100px)",
          left: "calc(50% - 180px)",
        }}
      >
        <img
          src={Me}
          style={{
            clipPath: "inset(80px 55px 40px 90px)",
            height: "300px",
            margin: "-80px -55px -44px -90px",
            filter: "grayscale(100%)",
          }}
        />
      </div>

      {[
        "NAME: CARLO BAGNOLI",
        `AGE: ${moment().diff(moment("2001-11-15"), "years")}`,
        "SEX: MALE",
        "PROFESSION: SOFTWARE ENGINEERING",
        "EXPERIENCE: 2 YEARS",
        "CURRENT POSITION: JUNIOR FULL STACK",
        "HOBBIES: CHESS, CLASSICAL GUITAR",
        "INTERESTS: MATH, GAMES",
      ].map((text, i) => 
        <AnimatedText
          delay={0.2 + i * 0.1}
          right="auto"
          left="calc(50% + 20px)"
          top={`calc(50% - ${183 - i * 24}px)`}
          text={text}
          size="14px"
        />
      )}

      {[
        "I'm a software developer interested in anything not web related.",
        "That being said, most of my experience is web related.",
        "I'm aware of the irony.",
        "I specialize in frontend, though most of my personal",
        "projects take a different route.",
        "I like building software that is useful for developers.",
        "My most proficient languages are in order: Typescript, Python, Rust and C/C++",
        "My professional experience focuses on Typescript and Python.",
        "My personal projects are almost always in Rust.",
        "I like functional programming and simple but effective solutions.",
      ].map((text, i) => 
        <AnimatedText
          delay={1.4}
          right="auto"
          left="calc(50% - 180px)"
          top={`calc(50% + ${40 + i * 24}px)`}
          text={text}
          size="14px"
        />
      )}
    </div>
  );
};
