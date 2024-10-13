import signUpClient from "../axiosclient/signUpClient"

export const signUpService = async (data)=>{
    try {
        return await signUpClient.post('/signUpUser',data);
    } catch (error) {
         throw error;
     }
    
}

export const signInService = async (data)=>{
    try {
        return await signUpClient.post('/signInUser', data);
    } catch (error) {
        throw error;
    }
}

export const payment = async (data)=>{
    try {
        return await signUpClient.post('/payment', data);
    } catch (error) {
        throw error;
    }
}