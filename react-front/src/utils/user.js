import axios from "axios";
export const createUser=async (user)=>{
try {
   const {data}=await  axios.post("http://localhost:3001/user/create",user);
   return data;
} catch (error) {
    console.log(error);
}
}

export const getUser=async (user)=>{
    try {
       const {data}=await  axios.post("http://localhost:3001/user/findone/",user);
       return data;
    } catch (error) {
        console.log(error);
    }
    }
    export const listUsers=async ()=>{
        try {
           const {data}=await  axios.get("http://localhost:3001/user/findall");
           return data;
        } catch (error) {
            console.log(error);
        }
        }
        export const updateUser=async (id,user)=>{
            try {
               const {data}=await  axios.put("http://localhost:3001/user/updateone/"+id,user);
               return data;
            } catch (error) {
                console.log(error);
            }
            }
           export const deleteUser=async (id)=>{
                    try {
                       const {data}=await  axios.get("http://localhost:3001/user/deleteUser/"+id);
                       return data;
                    } catch (error) {
                        console.log(error);
                    }
                    }

                    export const findUser=async (id)=>{
                        try {
                           const {data}=await  axios.get("http://localhost:3001/user/getUser/"+id);
                           return data;
                        } catch (error) {
                            console.log(error);
                        }
                        }