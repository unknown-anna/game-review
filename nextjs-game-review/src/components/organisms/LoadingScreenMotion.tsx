'use client';

import type { FC } from 'react';
import { motion } from "framer-motion";

const LoadingScreenMotion: FC = () => {

  const animateKeyfream = {
    opacity: [1,1,1,1,1,1,0], 
    display: ["block", "block", "block", "block", "block", "block", "none"],
  }
  const exitKeyfream = {
    opacity: [0,0,0,0,0,0,1], 
    display: ["none", "none", "none", "none", "none", "none", "block"],
  }

  return (
		<motion.div
      animate={ animateKeyfream }
      initial={{ opacity: 1 }}
      exit = { exitKeyfream }
      transition= {{
        duration: 1
      }}
			
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				backgroundColor: "white",	
				top: 0,
				left: 0,
        zIndex: 100
			}}
		>
			<div className="flex h-screen">
        <motion.div className="m-auto">
          <motion.div
            className="m-auto"
            animate={{
              rotate: 360,
              scale: [0.5, 1, 0.5],
              transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY
              }
            }}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "black"
            }}
          >

          </motion.div>

          <motion.div
            className='mt-4'
            style={{
              textAlign: "center"
            }}
          >Loading...</motion.div>

        </motion.div>
      </div>

		</motion.div>
	);
};
export default LoadingScreenMotion;