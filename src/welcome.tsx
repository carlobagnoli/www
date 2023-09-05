import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCounter } from "./core";

const loading = "LOADING";
const welcome = "WELCOME";

const WelcomeText = () => {
  const [text, setText] = useState("");

  const counter = useCounter(80);

  useEffect(() => {
    if (!counter) return;

    if (counter < loading.length + 20) {
      setText((text) => {
        return loading.slice(0, text.length + 1);
      });
    }

    if (counter > loading.length * 2 + 23) {
      setText((text) => welcome.slice(0, text.length + 1));
      return;
    }

    if (counter > loading.length + 20) {
      setText((text) => text.slice(0, text.length - 1));
      return;
    }
  }, [counter]);

  return (
    <>
      <motion.h1
        style={{
          color: "white",
          fontFamily: "JetBrains Mono",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        {text}
      </motion.h1>
    </>
  );
};

const log = [
  [
    10,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Compiling...
    </p>,
  ],
  [
    14,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Initializing mainframe in address: 0x79F6B5B7E62D7DD6
    </p>,
  ],
  [
    17,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Synchronizing satellites...
    </p>,
  ],
  [
    20,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Authorization in progress...
    </p>,
  ],
  [
    28,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Backup check failed. Adding connection attempt to log...
    </p>,
  ],
  [
    30,
    <p style={{ fontFamily: "JetBrains Mono", color: "#959595", fontSize: 12 }}>
      Initializing user in database...
    </p>,
  ],
  [
    33,
    <p style={{ fontFamily: "JetBrains Mono", color: "#1AB800", fontSize: 12 }}>
      DONE
    </p>,
  ],
];

export const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);

    return () => {
      clearTimeout(loadingInterval);
    };
  }, []);

  const counter = useCounter(150);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50vh",
          left: "50vw",
        }}
      >
        <motion.div animate={{ opacity: 0 }} transition={{ delay: 8.5 }}>
          <motion.div
            style={{
              border: `5px solid white`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            animate={{ height: ["0px", "100px"], width: ["1500px", "300px"] }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            {showWelcome && (
              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 7 }}
              >
                <WelcomeText />
                <motion.div
                  style={{
                    width: "1em",
                    height: "2em",
                    background: "white",
                    marginLeft: "3px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    duration: 0.5,
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            top: "115px",
            left: "0px",
            width: "500px",
          }}
          animate={{ opacity: 0 }}
          transition={{ delay: 8.5 }}
        >
          {log.filter(([n, _]) => counter > n).map(([_, log]) => log)}
        </motion.div>
      </div>

      <motion.div
        style={{
          background: "white",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50vh",
          left: "50vw",
        }}
        initial={{ height: "100vh", width: "100vw" }}
        animate={{ height: "0vh", width: "100vw" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </div>
  );
};
