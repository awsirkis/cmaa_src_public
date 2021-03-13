const faunadb = require('faunadb')
const client = new faunadb.Client({secret:""})
const {
  Get, // GET
  Ref,
  Collection, 

} = faunadb.query

const nodemailer = require('nodemailer')
const axios = require('axios')
exports.handler = async(event, context)=>{
  if(event.httpMethod !== "POST"){
    return {statusCode: 405, body:"error - method not allowed"}
  }
  const {name, email, subtotal, tax, total, cart, cc_number, cvv, exp_month, exp_year, phone, address_1, address_2, city, state, zip} = JSON.parse(event.body)
    /*let params  = {
      secret: '',
      response: response
    }
    console.log(name)
    let res = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params})
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
    const doc = JSON.parse(cart)
    let l = []
    for(let i = 0; i < doc.length; ++i){
      let c = await client.query(
        Get(
          Ref(
            Collection("products"),
            doc[i].id
          )
        )
      )
      l.push({name: c.data.name + ' - ' + c.data.sizes[Number(doc[i].index)], qty: doc[i].qty})
    }
    console.log(l)
    var clientInfo = {
      from: 'noreply.cmaa@gmail.com',
      to: email,
      subject: 'Thank You for Purchasing from Cascade Martial Arts Academy',
      text: 'Dear ' + name + ',\n\nThank you for ordering your equipment from Cascade Martial Arts Academy.\n\nItems:\n\n' +JSON.stringify(l, null, 1) + ' \n\nSubtotal: ' + subtotal + '\nTax (9.8%): ' + tax + '\nTotal: ' + total +'\n\nYou will receive an invoice through Square shortly. You can pick up your purchased items after they are ready and you schedule a seperate time with Sensei Rick (due to COVID-19 restrictions). Thank you,\nCascade Martial Arts Academy'
    };
    console.log("client made")
    var internalInfo ={
      from: 'noreply.cmaa@gmail.com',
      to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
      subject: 'New Order from CMAA Website',
      text: "Billing Info:\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nAddress 1: " + address_1 +
            "\nAddress 2: " + address_2 + "\nCity: " + city + "\nState: " + state + "\nZIP: " + zip +
            "\n\nPayment Information:\nCC Number: " + cc_number + "\nCVV: " + cvv + "\nExp: " + exp_month + '/' + exp_year + 
            "\n\nOrder Information:\n" + JSON.stringify(l, null, 1) + "\n\nSubtotal: " + subtotal + "\nTax: " + tax + "\nTotal: " + total
    }
    console.log("staff made")
    
    let res = await transporter.sendMail(clientInfo)
    console.log(res)
    res = await transporter.sendMail(internalInfo)
    console.log(res)
    return{statusCode: 200, body:"success"}
}