import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  StackProps,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "@/icons/Icon";

// Structure of list item for right side box of pricing section.
export const ListItem = (props: StackProps): JSX.Element => {
  // children = whatever is inside the <ListItem></ListItem>
  const { children, ...rest } = props;
  return (
    /* alignItems="start" prop make sure that the icon and text appear on same line, both on small and large screen*/
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px"></Icon>
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  return (
    // outer box margin (mx="6") is applicable to both desktop and mobile screen size, but visible only on mobile.
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 10px 10px -5px #0000000A, 0px 20px 25px -5px #0000001A"
        textAlign="center"
        as="section"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize="xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="gray.900" fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="6">
              Get Started
            </Button>
          </Box>

          {/* Right side box, showing the features */}
          <Box padding="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
