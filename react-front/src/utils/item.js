import axios from "axios";
export const listItems=async ()=>{
try {
   const {data}=await  axios.get("http://localhost:3001/item/list_items");
   return data;
} catch (error) {
    console.log(error);
}
}

export const createItem=async (id,user)=>{
    try {
       const {data}=await  axios.post("http://localhost:3001/item/create/"+id,user);
       return data;
    } catch (error) {
        console.log(error);
    }
    }

    export const updateItem=async (id,user)=>{
        try {
           const {data}=await  axios.put("http://localhost:3001/item/update/"+id,user);
           return data;
        } catch (error) {
            console.log(error);
        }
        }
        export const getItem=async (id)=>{
            try {
               const {data}=await  axios.get("http://localhost:3001/item/getOneItem/"+id);
               return data;
            } catch (error) {
                console.log(error);
            }
            }
            export const deleteItem=async (id)=>{
                try {
                   const {data}=await  axios.get("http://localhost:3001/item/deleteItem/"+id);
                   return data;
                } catch (error) {
                    console.log(error);
                }
                }