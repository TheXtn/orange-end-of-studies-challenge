import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Badge, Container, Heading, HStack, VStack} from "@chakra-ui/react";
import Link from 'next/link'

import {
   
    useColorModeValue
} from "@chakra-ui/react"

import styless from "../config/config.module.css"

import Wrap from "../components/wrapper";

export default function Home() {


    const bg =useColorModeValue("gray.10","whiteAlpha.50")
    return(
        <div className={styless.html}>
            <Wrap/>


              </div>



    )
}