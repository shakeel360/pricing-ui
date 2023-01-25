import React from "react";
import { HStack, StackProps, Icon, Text, Box, Stack } from "@chakra-ui/react";
import {
  NoMonthlySubscriptionIcon,
  NoSetupFeeIcon,
  MoneyBackGuaranteeIcon,
} from "@/icons/Icon";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
  // The definition for React.ElementType is basically “any valid HTML element or another React component.”
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={['8', '8', '12']}></Icon>
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8" as="section">
      <Stack
        direction={["column", "column", "row"]}
        px="12"
        spacing={["6", "6", "5"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={NoSetupFeeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={NoMonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
