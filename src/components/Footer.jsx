import React from "react";
import { Box, VStack, Text, Stack, Button, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor="blackAlpha.900" w="full" color="white">
      <Stack direction={["column", "row"]}>
        <VStack w="full" alignItems="flex-start" m="3">
          <Text fontWeight="bold">About Us</Text>
          <Text>
            The best Crypto App. Please follow us on Social Media to know more.
          </Text>
        </VStack>
        <VStack w="full" alignItems="flex-end" justifyContent="center" m="3">
          <Text fontWeight="bold">Social Media</Text>
          <Link>Instagram</Link>
          <Link>Youtube</Link>
          <Link>LinkedIn</Link>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
