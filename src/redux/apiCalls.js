import { loginStart, loginSuccess,loginFailure, logOut, userStart, userSuccess, userFailure } from './userSlice';
import {productStart,productSuccess,productFailure} from './productSlice';
import { createProductStart, createProductSuccess,createProductFailure } from './productSlice';
import axios from 'axios';
import { apiDomain } from '../utils/utils';

// const setHeaders = () => {
//     const headers= {
//         headers:{
//             "x-auth-token": localStorage.getItem('token')
//         }
//     };
//     return headers;
// };

export const loginUser = async(dispatch,user)=>{
    // console.log(user,dispatch);
 dispatch(loginStart());
    try{
const {data} = await axios.post(`${apiDomain}/auth/login`,user);
dispatch(loginSuccess(data));

alert('logged in succesfully');
// console.log(data);
    }catch(err){
console.log(err)
dispatch(loginFailure());
alert('unauthorised user please sign-in')
    }
}
export const getUser = async(dispatch) =>{
    dispatch(userStart());
    try {
        const {data} = await axios.get(`${apiDomain}/users`)
        dispatch(userSuccess(data));
        
    } catch (error) {
        dispatch(userFailure())
        
    }
}

export const logOutUser = async(dispatch)=>{
    // console.log(dispatch);
    dispatch(logOut())
    alert('logout successful. see you soon')
}

export  const getProductsData = async(dispatch)=>{
    dispatch(productStart());
   
    try{
const {response} = await  axios.get(`${apiDomain}/product`);
dispatch(productSuccess(response.data));
    }catch(err){
dispatch(productFailure())
    }
}

export const addProduct = async (dispatch,productData) =>{
    console.log(productData);
    dispatch(createProductStart())
    try {
      await axios.post(`${apiDomain}/product`,productData) 
        dispatch(createProductSuccess(productData));
    }
    catch(err){
        dispatch(createProductFailure())
    }
  }