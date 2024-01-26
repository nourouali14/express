const date= new Date()
const day=date.getDay()
const hour=date.getHours()


const logger=(req,res,next)=>{
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next(); 
        res.status(403).send('Web application is only available during working hours (Monday to Friday, 9 to 17).');
      }
    };
    
  


module.exports=logger