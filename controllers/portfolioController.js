// const { log } = require("console");

const sendEmailController =(req ,res)=>{
try {

   // Handling the email sendinglogic

   
   return res.status(200).send({
    success:true,
    message:'Your message send succesfully',
   })
} catch (error) {
    console.log(error);
    return res.status(500).send({
       success :false,
       message:'Failed to send email',
       error:error.message,

    });
    
}

};



module.exports ={sendEmailController};