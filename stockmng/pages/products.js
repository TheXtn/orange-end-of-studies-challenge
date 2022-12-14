import {useColorModeValue, chakra, Center, Heading, Grid, Box, GridItem, Stack, Flex} from "@chakra-ui/react"

import {useEffect, useState} from "react";
import {getSession} from "next-auth/client";
import Ma from "../components/UI/card";
import AddItem from "../components/addItem";
import AddItemCard from "../components/UI/addItemCard";
export default function Homechat(props){
    const products=props.products
    const showproducts=products.map((product)=>{
        return(
            <Box key={products._id} w="100%" h="100%"  >
        <Ma id={product._id} title={product.title} desc={product.des} link={"chat/"+product.stock} img={product.imgLink} owner={product.stock} />
    </Box>
        )
    })
    return(

        <Center w="100%" h="100%" >

        <Grid w="100%" h="100%" templateColumns="repeat(5, 1fr)" gap={6}>
            {showproducts}
            <Box w="100%" h="100%"  >
            <AddItemCard/>    </Box>
            

</Grid>
</Center>

        )

}
export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
  const res=await fetch(process.env.APISERVER+'/api/itemsServices')
    const data=await res.json()
  return {
    props:{
      products:data.data
    }
  }
}