import React from "react";
import { Image, VStack } from "@chakra-ui/react";
import pic from "../assets/notFound.png";

const PageNotFound = () => {
  return (
    <VStack h={"80vh"} justifyContent={"center"}>
      <Image src={pic} alt=""></Image>
    </VStack>
  );
};

export default PageNotFound;
