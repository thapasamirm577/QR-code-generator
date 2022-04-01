

export const generator = async(data)=>{
    const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`);
    return res; 
}