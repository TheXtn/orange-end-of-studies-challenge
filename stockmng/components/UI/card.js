import React from "react";
import { chakra, Box, Flex, useColorModeValue,Progress, useDisclosure } from "@chakra-ui/react";
import Link from 'next/link'
import { useToast } from "@chakra-ui/react"
import {useRouter} from "next/router";
import { useState } from "react";
import EditItem from "../editItem";
const Ma = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open,setopen]=useState(false)
    const toast=useToast()
    const router=useRouter()
    const [loading,setloading]=useState(false)
  const {id,title,desc,link,img,owner}=props
  async function handleEdit(){
    setopen(true)
  }
  async function handleDelete(){
    setloading(true)
    console.log(id)
    let config={
        headers:{
            'Content-Type':'application/json'
          },
        method:"DELETE",
        body:JSON.stringify({
            itemId:id
        })
        
    }
    const res=await fetch("http://localhost:3000/api/itemsServices",config)
    const data=await res.json()
    if (res.status==200){
        toast({
            title: "Success.",
            description: data?.message,
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          router.replace('/products')
    }
    else{
        toast({
            title: "Error.",
            description: res.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          })
          setloading(false)
    }
  }
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
              `url(${img})`,
          }}
        >
             {loading?<Progress size="xs" isIndeterminate />:""}
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
            {title}
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
              Stock :{owner}
            </chakra.span>
            <chakra.button
                onClick={()=>{handleDelete()}}
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              
                Delete
              

            </chakra.button>
            <chakra.button
                onClick={onOpen}
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              
                Edit
              

            </chakra.button>
            <chakra.button
                
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              <Link href={"http://localhost:3000/item/"+id}>
                View
                </Link>

            </chakra.button>
          </Flex>
          <EditItem itemId={id} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ma;