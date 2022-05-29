import makeQr from "../api";

export const generator = async(data)=>{
    const res = await fetch(`${makeQr}${data}`);
    return res; 
}