
const CustomAPIError=require('../errors/custom-error')
const  login = async(req,res)=>{
    const {username,password}=req.body
    if (!username || !password){
        throw new CustomAPIError('Please Provide Username or password',400)
    }
    console.log(username,password);
    res.send('Fake Login/Register/SignUp Route')
}

const dashboard=async (req,res)=>{
    const LuckNumber=Math.random()*1000
    res.status(200).json({msg:`Hello, John Bro`,secret:`Here is your auth data, and the lucky number is ${LuckNumber}`})
}

module.exports={
    login,dashboard
}