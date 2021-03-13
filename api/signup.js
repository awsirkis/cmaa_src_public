const nodemailer = require('nodemailer')
const pdf = require('html-pdf')
const axios = require('axios')
const Path = require('path')

var form_html = "<html><head> <style>.page{page-break-after: always;}.half{width: 50%; float: left;}.quarter{width: 25%; float: left;}.full{width: 100%; float: left;}.three-quarter{width: 75%; float: left;}.sixth{width: 16.6667%; float: left;}.third{width: 33.3333%; float: left;}.header{width: 100%; text-align: center;}legend{font-weight:bolder; padding-bottom: 5px; padding-top: 10px;}</style></head><body> <div class=\"page\"> <h3 class=\"header\">Student Information and Release Form</h3> <div class=\"half\"> <legend>Student Name</legend>{{name}}</div><div class=\"quarter\"> <legend>Sex</legend>{{sex}}</div><div class=\"quarter\"> <legend>Birthdate</legend>{{birthday}}</div><div class=\"half\"> <legend>Email</legend>{{email}}</div><div class=\"half\"> <legend>Phone</legend>{{phone}}</div><div class=\"full\"> <legend>Address</legend>{{address}}</div><div class=\"half\"> <legend>City</legend>{{city}}</div><div class=\"sixth\"> <legend>State</legend>{{state}}</div><div class=\"third\"> <legend>ZIP</legend>{{zip}}</div><div class=\"full\"> <div class=\"full\"> <legend>Prior Experience</legend> <div> <label for=\"priorexperience\">List prior martial arts experience here, including style, rank, and duration:</label>{{prior_experience}}</div></div></div><div class=\"full\"> <div class=\"full\"> <legend>Medical Information</legend> <div> <label for=\"medicalproblems\">List any medical problems you'd like us to know here:</label>{{medical_problems}}</div></div></div><div class=\"full\"> <p class=\"full\"><b>Release and Waiver</b><br>Karate and martial arts instruction is a physical training regimen that can, at time, result in injury to the practitioner. This informational disclaimer is intended to inform you, as a student, and your parents if you are under the age of 18 years, of that fact. All care during instruction will be taken to avoid injury and all efforts will be toward safe training. The student (and parents if the student is under 18) assumes full responsibility for any injuries or damage which may occur to the student and does hereby fully and forever release and discharge the Cascade Martial Arts Academy , the All Okinawa Shorin-ryu Karate and Kobudo Federation, the Okinawa Shorin-ryu Matsumura Seito Karate and Kobudo Federation, Rick Vogt, Fusei Kise, Isao Kise and any other owners, representatives, officers, servants, agents, or members from any and all claims, demands, damages, rights of action, or causes of action, present and/or future, whether the same be known or unknown, anticipated or unanticipated, resulting from or arising out of the students use or intended use of said school facilities, members, and equipment thereof, without limitation, any claims for personal injuries resulting from or arising out of the negligence of school, its officers, representatives, servants, agents, or members. <br>Parents are encouraged to attend classes and observe the training practices at this dojo. It functions both as an opportunity to see what is being taught to your child and to answer any questions you may have regarding the class, the instruction, and the quality of training your child is receiving. <br><br><b>I have read and understand the preceding two paragraphs above as well as the handbook, rules and regulations, and agree to receive instruction or allow my children to receive instruction under these conditions and at my own risk:</b> </p><div class=\"three-quarter\"> <legend>Student Signature (type full name):</legend>{{student_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div><div class=\"three-quarter\"> <legend>Parent Signature (Student younger than 18):</legend>{{parent_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div></div></div><div class=\"page\"> <h3 class=\"header\">Sparring Policy</h3> <p>This policy is written to inform the students and participants of the school rules regarding grappling, locking, trapping, and free sparring.</p><ol type=\"1\"> <li>Students are not required to free spar at this school and do so of their own free will.</li><li> Students will be required to have their own personal safety gear for sparring to include at a minimum <ol type=\"a\"> <li>Head protection (full face gear is mandatory for youth students</li><li>Hand and Foot protection (youth)</li><li>Groin protector (males)</li><li>Mouthpiece</li><li>Additionally, any safety equipment the student deems necessary for his or her protection may be worn. It is highly encouraging that chest protectors are worn by female students.</li></ol> </li><li> In addition, the following is required for the combative classes <ol type=\"a\"> <li>Foam shin/ instep guards (cloth is not allowed)</li><li>Boxing gloves (16 oz)</li><li>Open finger sparring gear</li><li>Groin protector (males)</li><li>Mouthpiece</li></ol> </li><li>Worn and ragged safety equipment with torn or sharp edges is not allowed.</li><li>It is not required to purchase equipment from the dojo, but the equipment you select MUST be approved by the Chief Instructor before it is allowed to be used.</li><li>Only light or non-contact sparring is allowed during free sparring sessions. Full contact or heavy contact sparring must be under a totally controlled environment. This statement, in no way, implies that contact will not occur during the course of a free-sparring match.</li><li>Free sparring is not allowed unless the Chief Instructor (Rick Vogt) is present at the school.</li><li>No contact is allowed to head, face, neck, spinal area, or groin (except for light contact to protective gear).</li><li>Contact to joints such as knees and elbows, is not allowed.</li><li>If a student is injured during free sparring, the Chief Instructor is to be informed at once</li><li>Effective date of this policy is 1/1/2010.</li></ol> <div> <legend>Signature of Sparring Release</legend> <p>By signing below, the student (or the parent/guardian of the student if the student is under 18) acknowledges the above policy and affirms that they will follow protocol while sparring at CASCADE MARTIAL ARTS ACADEMY. <div class=\"full\"> <div class=\"three-quarter\"> <legend>Student Signature (type full name):</legend>{{student_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div><div class=\"three-quarter\"> <legend>Parent Signature (Student younger than 18):</legend>{{parent_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div></div><div class=\"page\"> <h3 class=\"header\">Student/School representations and release of liability:</h3> <p>Student/parent/guardian acknowledges that they should have received permission from a medical doctor following a general physical examination approving the student’s participation in any martial arts program:</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>The member applying warrants and represents that he/she/minor or student is in good physical condition and has not been advised by any Physician or Medical Facility that participation in martial arts training will in any way be averse to the wellbeing of the student. Furthermore, member represents that the student is able and allowed to participate in exercise and various martial arts curriculum which is provided by CASCADE MARTIAL ARTS ACADEMY</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>Student/parent/guardian understands that by participating in the martial arts program or by use of the facilities or equipment covered by this contract does present the possibility of accidental injury, disability, paralysis, or death. Student/parent/guardian assumes all risk associated with such participation within this program and holds CASCADE MARTIAL ARTS ACADEMY harmless for any such injury or occurrence. In addition, student/parent/guardian agrees to indemnify CASCADE MARTIAL ARTS ACADEMY from any and all liability which may arise against CASCADE MARTIAL ARTS ACADEMY by such member or through any other third party as a result of training received by CASCADE MARTIAL ARTS ACADEMY or by use of the facilities or equipment of CASCADE MARTIAL ARTS ACADEMY</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>Student/parent/guardian understands that during instruction, employees or higher degree student instructors of CASCADE MARTIAL ARTS ACADEMY will be engaged in a course of conduct requiring physical contact, and he/she (or parent or guardian) gives full consent to such contact as is required by the training.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>It is understood that due to the nature of the training which is being provided by CASCADE MARTIAL ARTS ACADEMY that accidents do from time to time occur. While all precautions will be taken to assure the safety of all students, it is impossible to foresee all risks or to guarantee that such accidents will not occur. Student/parent/guardian agrees to hold CASCADE MARTIAL ARTS ACADEMY harmless in the event of any such accident and further agrees that neither they nor any other financially responsible person will take action against CASCADE MARTIAL ARTS ACADEMY as a result of such injuries unless caused due to negligence.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>Student/parent/guardian understands that this release, waiver, and indemnity agreement is intended to be as broad and inclusive as is permitted by the law of the province or state in which any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are conducted and that if any portion is held invalid, it is agreed that the balance shall, not withstanding, continue in full legal force and effect.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>Student/parent/guardian understands that if, despite this release, a claim is made by the participant, or on his behalf, against CASCADE MARTIAL ARTS ACADEMY, the student/parent/guardian will reimburse CASCADE MARTIAL ARTS ACADEMY for any money that has been paid to the participant, or on his behalf, and hold CASCADE MARTIAL ARTS ACADEMY harmless.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>By signing this consent, you give your permission to have your video or photo taken during any class or seminar you choose to attend. If you desire not to have your photo or video taken, you agree to remove yourself from the field of view of the camera.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div><p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label> </div></div><div class=\"page\"> <h3 class=\"header\">Credit Card Authorization</h3> <p>Please complete all fields. You may cancel this authorization at any time by contacting us. This authorization will remain in effect until cancellation.</p><div class=\"full\"> <div class=\"half\"> <legend>Card Type (Mastercard, Amex, etc):</legend>{{card_type}}</div><div class=\"half\"> <legend>Cardholder name (as it appears):</legend>{{card_name}}</div><div class=\"half\"> <legend>Card Number:</legend>{{card_number}}</div><div class=\"half\"> <legend>Expiration Date:</legend>{{exp_date}}</div><div class=\"half\"> <legend>Cardholder ZIP (billing address):</legend>{{card_zip}}</div></div><div class=\"full\"> <p class=\"full\">I,{{card_name}}, authorize Cascade Martial Arts Academy LLC to charge my credit card above for agreed upon purchases. I understand that my information will be saved to file for future transactions on my account.</p><div class=\"three-quarter\"> <legend>Cardholder Signature:</legend>{{cardholder_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div><div class=\"page\"> <h3 class=\"header\">Consent to Web Activity</h3> <p>By signing below, you agree to an account for the Cascade Martial Arts Academy Website (cascademaa.com) being made on your behalf. This account will contain no more personal information than what is contained here, but will contain business information regarding the student's ranking progress and certifications. Details for accessing this account will be sent to the student (or the student's guardian if the student is under 18) once sign-up is ocnfirmed.</p><div class=\"full\"> <div class=\"three-quarter\"> <legend>Student Signature (type full name):</legend>{{student_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div><div class=\"three-quarter\"> <legend>Parent Signature (Student younger than 18):</legend>{{parent_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div><div class=\"page\"> <h3 class=\"header\">Student or Parental Consent/Certification</h3> <p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p><div class=\"full\"> <div class=\"three-quarter\"> <legend>Student Signature (type full name):</legend>{{student_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div><div class=\"three-quarter\"> <legend>Parent Signature (Student younger than 18):</legend>{{parent_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div><div class=\"page\"> <h3 class=\"header\">Release and Waiver Certification</h3> <p>I have read the CMAA Dojo Handbook and above release and waiver of liability, assumption of risk and indemnity agreement, fully understand its rights by signing it, and have signed it freely and voluntarily without inducement, assurance, or guarantee being made to me and intend my signature to be complete and unconditional release and all liability to the greatest extent allowed by law. In signing this form, I do hereby for myself, my heirs, executors and administrators release and forever discharge any and all rights and claims of damages against CASCADE MARTIAL ARTS ACADEMY and its respective officers, employees, members, and next of kin for any injuries received, including but not limited to death, resulting from my or my child’s participation in any activities or demonstrations in, on, or about the premises of CASCADE MARTIAL ARTS ACADEMY , or any location where activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are being held, or while driving to and from any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY .</p><div class=\"full\"> <div class=\"three-quarter\"> <legend>Student Signature (type full name):</legend>{{student_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div><div class=\"three-quarter\"> <legend>Parent Signature (Student younger than 18):</legend>{{parent_signature}}</div><div class=\"quarter\"> <legend>Date:</legend>{{date}}</div></div></div></body></html>"

const options = {
  format: 'Letter',
  orientation: 'portrait'
}
exports.handler = async(event, context)=>{
  if(event.httpMethod !== "POST"){
    return {statusCode: 405, body:"error - method not allowed"}
  }
  let x = JSON.parse(event.body)
  let response = {
    first_name: x.page_0.first_name,
    middle_name: x.page_0.middle_name,
    last_name: x.page_0.last_name,
    sex:x.page_0.student_sex,
    birthday:x.page_0.birthday,
    email:x.page_0.email_address,
    phone:x.page_0.phone_number,
    address_1:x.page_0.address_1,
    address_2:x.page_0.address_2,
    city:x.page_0.city,
    state:x.page_0.state,
    zip:x.page_0.zip,
    prior:x.page_0.prior_experience,
    medical:x.page_0.medical_problems,
    student_sig_1:x.page_0.student_signature,
    parent_sig_1:x.page_0.parent_signature,
    student_sig_2:x.page_1.parent_signature,
    parent_sig_2:x.page_1.parent_signature,
    student_sig_3:x.page_3.student_signature,
    parent_sig_3:x.page_3.parent_signature,
    student_sig_4:x.page_4.student_signature,
    parent_sig_4:x.page_4.parent_signature,
    student_sig_5:x.page_5.student_signature,
    parent_sig_5:x.page_5.parent_signature,
    agree_1:x.page_2.agree_1,
    agree_2:x.page_2.agree_2,
    agree_3:x.page_2.agree_3,
    agree_4:x.page_2.agree_4,
    agree_5:x.page_2.agree_5,
    agree_6:x.page_2.agree_6,
    agree_7:x.page_2.agree_7,
    agree_8:x.page_2.agree_8,
    agree_9:x.page_2.agree_9,
    card_type: x.page_6.card_type,
    card_name: x.page_6.card_name,
    card_number: x.page_6.card_number,
    exp_date: x.page_6.exp_date,
    card_zip: x.page_6.card_zip,
    card_signature: x.page_6.card_signature,
    required:x.required

  }
  /*let params  = {
    secret: '',
    response: x.response
  }
  let success = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params})
  if(!success.data.success){
    return{statusCode: 403, body:"recaptcha not validated"}
  }*/
  let html = form_html
  html = html.replace("{{name}}", response.first_name + ' ' + response.middle_name + ' ' + response.last_name)
  html = html.replace("{{sex}}", response.sex)
  html = html.replace("{{birthday}}", response.birthday)
  html = html.replace("{{email}}", response.email)
  html = html.replace("{{phone}}", response.phone)
  html = html.replace("{{address}}", response.address_1 + ' ' + response.address_2)
  html = html.replace("{{city}}", response.city)
  html = html.replace("{{state}}", response.state)
  html = html.replace("{{zip}}", response.zip)
  html = html.replace("{{prior_experience}}", response.prior)
  html = html.replace("{{medical_problems}}", response.medical)
  html = html.split("{{date}}").join(new Date().toDateString())
  html = html.replace("{{student_signature}}", response.student_sig_1)
  html = html.replace("{{student_signature}}", response.student_sig_2)
  html = html.replace("{{student_signature}}", response.student_sig_3)
  html = html.replace("{{student_signature}}", response.student_sig_4)
  html = html.replace("{{student_signature}}", response.student_sig_5)
  if(response.required){
    html = html.replace("{{parent_signature}}", response.parent_sig_1)
    html = html.replace("{{parent_signature}}", response.parent_sig_2)
    html = html.replace("{{parent_signature}}", response.parent_sig_3)
    html = html.replace("{{parent_signature}}", response.parent_sig_4)
    html = html.replace("{{parent_signature}}", response.parent_sig_5)
  }
  else{
    html = html.split("{{parent_signature}}").join(' ')
  }
  html = html.replace("{{card_type}}", response.card_type)
  html = html.replace("{{card_name}}", response.card_name)
  html = html.replace("{{card_name}}", response.card_name)
  html = html.replace("{{card_number}}", response.card_number)
  html = html.replace("{{exp_date}}", response.exp_date)
  html = html.replace("{{card_zip}}", response.card_zip)
  html = html.replace("{{cardholder_signature}}", response.card_signature)
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreply.cmaa@gmail.com',
      pass: ''
    }
  });
  var clientInfo = {
    from: 'noreply.cmaa@gmail.com',
    to: response.email,
    subject: 'Thank You for Signing Up at Cascade Martial Arts Academy',
    html: '<html><head><style>html{font-family:\'Source Sans Pro\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,sans-serif;font-size:18px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:#300}body{background-color:#e8e8e8;margin:0px 15%;padding:30px}</style></head><body><p>Dear ' + response.first_name + response.last_name + ',</p><p>Thank you for enrolling at Cascade Martial Arts Academy. Contained herin are links to some important resources to help ensure your success:</p><ul><li>Check out when classes and special events are on our <a href=\'https://www.cascademaa.com/calendar\'>Calendar</a>. Attending classes is the best way to help improve your skills, and ensure that you have the skills you need for self-defense!</li><li><a href=\'https://www.cascademaa.com/profile/login\'>Log in to your Cascade Martial Arts account</a> that has been created for you. This gives you access to material on our website. An email will be sent from no-reply.cmaa@gmail.com shortly containing your username (first initial + last name) and one-time password, which should be reset when you first log in</li><li>Review our <a href=\'https://www.cascademaa.com/resources/reopening\'>COVID Safe reopening procedures</a>. As an abridged version, class sizes are ucrrently limited and masks are required at all times</li><li><a href=\'https://cascademaa.com/shop/uniforms/gi\'>Order your uniform</a> through our online shop. While regular athletic clothing can be used for your first classes, a traditional gi with Federation embroidery is required before your first test.</li></ul><p>We once again thank you for joing us at Cascade Martial Arts Academy, and look forward to joining you on your martial arts journey!</p></body></html>',
    
  };
  console.log("client info made")
  var internalInfo ={
    from: 'noreply.cmaa@gmail.com',
    to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
    subject: 'New Signup from CMAA Website',
    html:html
  }
  transporter.sendMail(clientInfo, function(error, info){
    if (error) {
      return{statusCode: 400, body:error}
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(internalInfo, function(error, info){
    if (error) {
      return{statusCode: 400, body:error}
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return{statusCode: 200, body:"success"}

}

const htmlToPDFFile = (html, name) =>{
  return new Promise((resolve, reject)=>{
    pdf.create(html, options)
    .toFile('./static/signup/' + name.split(' ').join('_') + '.pdf', (err, res)=>{
      if(err)
        reject(err)
      else
        resolve(res)
    })
  })
}