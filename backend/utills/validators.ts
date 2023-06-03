const isValidURL=(urid:string)=>{
        try {
            const uri= new URL(urid);
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
}


module.exports={
    isValidURL
}



