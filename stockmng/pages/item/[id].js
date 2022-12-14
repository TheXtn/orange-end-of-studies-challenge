import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    Spinner,
    useColorModeValue,
} from '@chakra-ui/react';import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
export default function ItemDetail(){
    const [load,setloading]=useState(false)
    const router=useRouter()
    const [item,setitem]=useState({})
    async function Work(){
        setloading(true)
        const res=await fetch(process.env.APISERVER+"/api/itemsServices/"+router.query['id'])
        const d=await res.json();
        setitem(d.data)
        setloading(false)
    }
    useEffect(()=>{
        Work()
    },[])
    if (!load){
    return(
       
        <Center py={6}>
        {item?<Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Box
            
            h={64}
            w="full"
            rounded="lg"
            shadow="md"
            bgSize="cover"
            bgPos="center"
            style={{
              backgroundImage:
                `url(${item.imgLink})`,
            }}
          />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                {item.title}
            </Heading>

            <Text fontWeight={600} color={'gray.500'} mb={4}>

            </Text>
            
            <br/>
            {load?<Spinner size="xl" />: <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                
                <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    {item.des}
                </Badge>
                
            </Stack>
            }

            <Stack mt={8} direction={'row'} spacing={4}>

               

            </Stack>
        </Box>:""}
    </Center>
    )}
    else {
        return(
            
        <Center py={6}>
        
            {load?<Spinner size="xl" />:""}
         </Center>       
                
    )
    }
}
