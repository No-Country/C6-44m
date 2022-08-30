import { BASE_PATH } from "../../utils/constants";


export async function loginApi(values){
    try {

        const url = `${BASE_PATH}/login`;
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(values),
        };
        
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null
    }
}