import { BASE_PATH } from "../../utils/constants";
import {authFetch} from "../../utils/fetchAuth";


export async function loginApi(values){
    try {
        const url = `${BASE_PATH}/auth/login`;
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

export async function getMeApi(logout,idUser){
    try {
        const url = `${BASE_PATH}/users/${idUser}`;
        const params = { 
            method:"GET",
            headers:{   
                "Content-Type":"application/json",                 
            },   
        }
        const result = await authFetch(url,params,logout);
        return result ? result : null;
    } catch (error) {
        return null;
    }
}

