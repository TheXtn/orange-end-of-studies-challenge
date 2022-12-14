import React from "react";
import { chakra, Box, Flex, useColorModeValue,Progress, useDisclosure } from "@chakra-ui/react";
import Link from 'next/link'
import { useToast } from "@chakra-ui/react"
import {useRouter} from "next/router";
import { useState } from "react";
import EditItem from "../editItem";
import AddItem from "../addItem";
const AddItemCard = (props) => {
   
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
       
        <Box
            
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              `url(${"https://www.pngitem.com/pimgs/b/65-653761_login-buttons-png.png"})`,
          }}
        >
             
        </Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={useColorModeValue("white", "gray.800")}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue("gray.800", "white")}
            letterSpacing={1}
          >
            Add item
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg={useColorModeValue("gray.200", "gray.700")}
          >
            <chakra.span
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.200")}
            >
             <AddItem/>
            </chakra.span>
            
          </Flex>
        
        </Box>
      </Flex>
    </Flex>
  );
};

export default AddItemCard;