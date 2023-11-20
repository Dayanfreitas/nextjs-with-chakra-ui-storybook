import { Flex } from "@chakra-ui/react";

export default function OrganismsLoginForm ({ children }: { children: React.ReactNode }) {
  return (
    <Flex w="full" direction={'column'}> 
      { children } 
    </Flex>
  )
}