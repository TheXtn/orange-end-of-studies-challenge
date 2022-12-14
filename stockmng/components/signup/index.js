import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {chakra, FormLabel, GridItem, Heading, SimpleGrid, VStack} from "@chakra-ui/react";
import Link from 'next/link'

import {
    useToast,
    Fade, ScaleFade, Slide, SlideFade,Progress,
    Divider,
    Box,
    Text,
    Button,
    Center,
    Square,
    Circle,
    Stack,
    Flex,
    FormControl,
    InputGroup,
    InputLeftElement,Input,InputRightElement,FormHelperText,
    useColorModeValue
} from "@chakra-ui/react"
import React, {Fragment, useState} from "react";
import NextImage from "next/image";
import img from "../../public/loginOrange.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Loading from "../UI/loading";
import {signIn} from 'next-auth/client'
import {useRouter} from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function SignUpComp() {
    const [username,setusername]=useState('')
    const [name,setname]=useState("")
    const [pwd,setpwd]=useState('')
    const [showPassword, setShowPassword] = useState(false);
    const toast=useToast()
    const [loading,setloading]=useState(false)
    const router=useRouter()
    const handleShowClick = () => setShowPassword(!showPassword);
    async function handlesubmit(e){
        e.preventDefault()
        setloading(true)
        console.log(username,name,pwd)
        let config={
          headers:{
              'Content-Type':'application/json'
            },
          method:"POST",
          body:JSON.stringify({
              username:username,
              name:name,
              password:pwd
          })
          
      }
      const res=await fetch("http://localhost:3000/api/auth/signup",config)
      const data=await res.json()
      if (res.status==200){
          toast({
              title: "Success.",
              description: data?.message,
              status: "success",
              duration: 9000,
              isClosable: true,
            })
            router.replace('/')
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
    const bg=useColorModeValue("gray.10","whiteAlpha.50")
    return (
        <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']} >

            <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} bg={bg} boxShadow="md" justifyContent="center">
                <VStack spacing={4} alignItems="center">
                    <Heading color={"#FFA500"}>Sign Up</Heading>

                </VStack>
                <Box minW={["full","full"]} justifyContent="center" alignItems="center">
                    <form onSubmit={handlesubmit}>
                        <Center>
                        <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"} justifyContent="center" alignItems="center">

                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                        ><CFaUserAlt color="gray.300" /></InputLeftElement>
                                        <Input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="Username"  disabled={loading} />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                        ><CFaUserAlt color="gray.300" /></InputLeftElement>
                                        <Input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name"  disabled={loading} />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>


                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                        ><CFaLock color="gray.300" /></InputLeftElement>
                                        <Input
                                            disabled={loading}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            value={pwd} onChange={(e)=>setpwd(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Button type="submit"  w={"full"}>Sign up</Button>
                            </GridItem>
                            <GridItem colSpan={2}>
                                {loading?<Progress colorScheme={"#FFA500"} size="xs" isIndeterminate />:""}
                            </GridItem>
                        </SimpleGrid></Center>

                    </form> </Box>

            </VStack>
            <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']} >

                <NextImage
                    src={img}
                    width="500"
                    height="500"
                    alt={"Hello"}
                    placeholder="blur"
                    blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />



            </VStack>

        </Flex>
    )
}
