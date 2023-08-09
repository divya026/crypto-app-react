import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack bgColor="blackAlpha.900" p="3">
      <Button variant="ghost" color="white">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="ghost" color="white">
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant="ghost" color="white">
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
