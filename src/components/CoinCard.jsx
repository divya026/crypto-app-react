import React from "react";
import {
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Container,
} from "@chakra-ui/react";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <a href={`/coin/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Heading noOfLines={1}>{name}</Heading>
        <Text noOfLines={1}>{symbol}</Text>
        <Image src={img} h={50} w={50}></Image>

        <Text>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </a>
  );
};

export default CoinCard;
