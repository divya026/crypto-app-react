import React from "react";
import { Box, Image, VStack } from "@chakra-ui/react";
import img1 from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor="blackAlpha.900" color="white" w="full" h="100vh">
      <VStack>
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image src={img1} h="80vh"></Image>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Home;
