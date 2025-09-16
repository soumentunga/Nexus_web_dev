const Auth=(req,res,next)=>{
        //add item into foodmenu
    //Authetication karna parega ki kya ye admin hi hai
    //dummy code for authentication (it's not real for visualization pourpose only)

    const token ="ABCDEF"
    const Access = token==="ABCDEF" ?1:0;

    if(!Access){
        res.status(403).send("No Permission")
    }
    next();

}

module.exports={
    Auth,
}
