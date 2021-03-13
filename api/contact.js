const axios = require('axios')
const nodemailer = require('nodemailer')
exports.handler = async(event, context)=>{
  if(event.httpMethod !== "POST"){
    return {statusCode: 405, body:JSON.stringify({message:"error - method not allowed"})}
  }
  let {name, email, question} = JSON.parse(event.body)
  /*let params  = {
    secret: '',
    response: token
  }
  const res = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params: params})
  //const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {method:'POST', body: params})
  //console.log(res)
  if(!res.data.success){
    return{statusCode: 403, body:"recaptcha not validated"}
  }*/
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreply.cmaa@gmail.com',
      pass: ''
    }
  });
  // Beautify me!!!
  var clientInfo = {
    from: 'noreply.cmaa@gmail.com',
    to: email,
    subject: 'Thank You for Contacting Cascade Martial Arts Academy',
    html: "<html> <head> <style>html{font-family: \'Source Sans Pro\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; font-size: 18px; word-spacing: 1px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; box-sizing: border-box; background-color:#330000;}body{background-color: #e8e8e8; margin: 0px 15%; padding: 30px;}</style> </head> <body> <p>Dear " + name + ",<br><br>Thank you for contacting Cascade Martial Arts Academy. A staff member will reply to your question promptly. Make sure to check your spam folder if your question goes unanswered, or reach out to us again. <br><br>Thank you,<br>Cascade Martial Arts Academy</p></body></html>"
  };
  var internalInfo ={
    from: 'noreply.cmaa@gmail.com',
    to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
    subject: 'New Question from CMAA Website',
    html:"<html> <head> <style>html{font-family: \'Source Sans Pro\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; font-size: 18px; word-spacing: 1px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; box-sizing: border-box; background-color:#330000;}body{background-color: #e8e8e8; margin: 0px 15%; padding: 30px;}</style> </head> <body> <p>Dear CMAA Staff,<br><br>" + question + "<br><br>Thank you,<br>"+name+",<br>"+email + "</p></body></html>"
  }
  let res = await transporter.sendMail(clientInfo)
  console.log(res)
  res = await transporter.sendMail(internalInfo)
  console.log(res)
  return{statusCode: 200, body:"success"}
}