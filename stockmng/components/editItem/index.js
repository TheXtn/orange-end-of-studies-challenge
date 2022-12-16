import {useDisclosure,Progress, Button,Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,FormControl,FormLabel,Input,ModalFooter, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

export default function EditItem(props) {
    const {itemId, isOpen, onOpen, onClose } = props
    const toast=useToast()
    const router=useRouter()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [title,settitle]=useState("")
    const [des,setdes]=useState("")
    const [stock,setstock]=useState("")
    const [loading,setloading]=useState(false)
    async function add(){
      setloading(true)
      let config={
        headers:{
            'Content-Type':'application/json'
          },
        method:"PUT",
        body:JSON.stringify({
            itemId:itemId,
            stock:stock
        })
        
    }
    const res=await fetch("/api/itemsServices",config)
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
      <>
        
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Item</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody pb={6}>
              
              <FormControl mt={4}>
                <FormLabel>Stock</FormLabel>
                <Input value={stock} onChange={(e)=>{setstock(e.target.value)}} placeholder='Stock' />
              </FormControl>
              {loading?<Progress size="xs" isIndeterminate />:""}
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{add()}} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }