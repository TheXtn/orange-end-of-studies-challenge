import styless from "../../config/config.module.css";
import {Heading,Text, VStack} from "@chakra-ui/react";
export default function Wrap(){
    return(
        <VStack spacing={10} className={styless.con}>
            <div>

            </div>
            <Heading color={"#FFA500"} className={styless.centered}>Orange Stock Management .{' '}
                
                <br/>
                
                <br/>
               
            </Heading>



        </VStack>
        )

}