const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const nodemailer = require('nodemailer')
const axios = require('axios')
const Path = require('path')
const pdf = require('html-pdf')
const cors = require('cors')
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
const cert_html = "<html><head><style>html{padding:0;margin:0}body{padding:15px}#certificate{position:relative;text-align:center;color:black;font-weight:bolder;text-decoration:none;border:none;background-color:white;width:10.25in;height:7.875in;-moz-background-size:10.25in 7.875in;-webkit-background-size:10.25in 7.875in;background-size:10.25in 7.875in}#printer-name{position:absolute;font-family:'Times New Roman',Times,serif;font-size:36pt;width:6in;text-align:center;top:1.4in;left:2.4in;transform:translate(-50%,-50%)}#printer-kana{font-family:'MS Mincho','ＭＳ Ｐゴシック','MS PGothic','メイリオ',Meiryo,sans-serif;font-size:28pt;text-align:center;width:6in}#printer-body{position:absolute;font-family:'Palatino Linotype',Times,serif;font-size:14pt;text-align:center;width:6.75in;top:3.5in;left:2in;transform:translate(-50%,-50%)}#printer-rank{font-family:'Palatino Linotype',Times,serif;font-size:24pt}#printer-onthis{font-family:'Palatino Linotype',Times,serif;font-size:14pt}#printer-date{font-family:'Palatino Linotype',Times,serif;font-size:18pt}#printer-seal{position:absolute;border:none;text-align:left;font-family:Arial,Helvetica,sans-serif;font-size:10pt;width:1.9in;top:6in;left:1.95in;transform:translate(-50%,-50%)}#printer-signature{position:absolute;font-family:'Times New Roman',Times,serif;font-size:10pt;width:2.75in;text-align:center;top:6.9in;left:3.9in;transform:translate(-50%, -50%)}</style></head><body><div id=\"certificate\"> <img alt=\"image\" src=\"https://www.cascademaa.com/certificate-background.png\" style=\"height:100%; width:100%; padding:0;margin:0\"><p id=\"printer-name\">{{name}} <br> <br> <span id=\"printer-kana\">{{kana}} </span></p><p id=\"printer-body\">Has presented themself this day before the examination board of the Okinawa Shorin-ryu Matsumura Karate and Kobudo Federation for advancement testing and having honorably and satisfactory demonstrated proficiency is hereby formally promoted to the grade of: <br><span id=\"printer-rank\">{{rank}} </span> <br> <span id=\"printer-onthis\">on this </span> <br> <span id=\"printer-date\">{{date}} </span></p><p id=\"printer-seal\">MEMBER OF: <br> THE OKINAWA SHORINRYU MATSUMURA SEITO KARATE &amp; KOBUDO FEDERATION &amp; PARRA ACADEMY OF KALI/ SILAT JUN FAN MARTIAL ARTS</p><p id=\"printer-signature\">Rick A Vogt Sensei <br>Chief Instructor</p></div></body></html>"
const signup_html = "<html><head><style>html{width:8.5in}</style></head><body><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><h3 style=\"width: 100%; text-align: center\">Student Information and Release Form</h3><div style=\"width:50%\"><legend>Student Name</legend><p>{{name}}</p></div><div style=\"width:25%\"><legend>Sex</legend> {{sex}}</div><div style=\"width:25%\"><legend>Birthdate</legend> {{birthday}}</div><div style=\"width:50%\"><legend>Email</legend><p>{{email}}</p></div><div style=\"width:50%\"><legend>Phone</legend><p>{{phone}}</p></div><div style=\"width:100%\"><legend>Address</legend><p>{{address}}</p></div><div style=\"width:50%\"><legend>City</legend><p>{{city}}</p></div><div class=\"form-group col-2\"><legend>State</legend><p>{{state}}</p></div><div class=\"form-group col-4\"><legend>ZIP</legend><p>{{zip}}</p></div><div class=\"row\" style=\"width:100%\"><div style=\"width:100%\"><legend>Prior Experience</legend><div> <label for=\"priorexperience\">List prior martial arts experience here, including style, rank, and duration:</label><p style=\"width: 100%\" name=\"priorexperience\">{{prior_experience}}</p></div></div></div><div class=\"row\" style=\"width:100%\"><div style=\"width:100%\"><legend>Medical Information</legend><div> <label for=\"medicalproblems\">List any medical problems you'd like us to know here:</label><p style=\"width:100%\" name=\"medicalproblems\">{{medical_problems}}</p></div></div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><h4 style=\"width:100%\">Release and Waiver</h4><p style=\"width:100%\">Karate and martial arts instruction is a physical training regimen that can, at time, result in injury to the practitioner. This informational disclaimer is intended to inform you, as a student, and your parents if you are under the age of 18 years, of that fact. All care during instruction will be taken to avoid injury and all efforts will be toward safe training. The student (and parents if the student is under 18) assumes full responsibility for any injuries or damage which may occur to the student and does hereby fully and forever release and discharge the Cascade Martial Arts Academy , the All Okinawa Shorin-ryu Karate and Kobudo Federation, the Okinawa Shorin-ryu Matsumura Seito Karate and Kobudo Federation, Rick Vogt, Fusei Kise, Isao Kise and any other owners, representatives, officers, servants, agents, or members from any and all claims, demands, damages, rights of action, or causes of action, present and/or future, whether the same be known or unknown, anticipated or unanticipated, resulting from or arising out of the students use or intended use of said school facilities, members, and equipment thereof, without limitation, any claims for personal injuries resulting from or arising out of the negligence of school, its officers, representatives, servants, agents, or members.<br>Parents are encouraged to attend classes and observe the training practices at this dojo. It functions both as an opportunity to see what is being taught to your child and to answer any questions you may have regarding the class, the instruction, and the quality of training your child is receiving.<br><br><b>I have read and understand the preceding two paragraphs above as well as the handbook, rules and regulations, and agree to receive instruction or allow my children to receive instruction under these conditions and at my own risk:</b></p><div style=\"width:75%\"><legend>Student Signature (type full name):</legend><p>{{student_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div><div style=\"width:70%\"><legend>Parent Signature (Student younger than 18):</legend><p>{{parent_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><h3 class=\"row text-center\">Sparring Policy</h3><div class=\"row\"><p>This policy is written to inform the students and participants of the school rules regarding grappling, locking, trapping, and free sparring.</p><ol type=\"1\"><li>Students are not required to free spar at this school and do so of their own free will.</li><li> Students will be required to have their own personal safety gear for sparring to include at a minimum<ol type=\"a\"><li>Head protection (full face gear is mandatory for youth students</li><li>Hand and Foot protection (youth)</li><li>Groin protector (males)</li><li>Mouthpiece</li><li>Additionally, any safety equipment the student deems necessary for his or her protection may be worn. It is highly encouraging that chest protectors are worn by female students.</li></ol></li><li> In addition, the following is required for the combative classes<ol type=\"a\"><li>Foam shin/ instep guards (cloth is not allowed)</li><li>Boxing gloves (16 oz)</li><li>Open finger sparring gear</li><li>Groin protector (males)</li><li>Mouthpiece</li></ol></li><li>Worn and ragged safety equipment with torn or sharp edges is not allowed.</li><li>It is not required to purchase equipment from the dojo, but the equipment you select MUST be approved by the Chief Instructor before it is allowed to be used.</li><li>Only light or non-contact sparring is allowed during free sparring sessions. Full contact or heavy contact sparring must be under a totally controlled environment. This statement, in no way, implies that contact will not occur during the course of a free-sparring match.</li><li>Free sparring is not allowed unless the Chief Instructor (Rick Vogt) is present at the school.</li><li>No contact is allowed to head, face, neck, spinal area, or groin (except for light contact to protective gear).</li><li>Contact to joints such as knees and elbows, is not allowed.</li><li>If a student is injured during free sparring, the Chief Instructor is to be informed at once</li><li>Effective date of this policy is 1/1/2010.</li></ol><div><legend>Signature of Sparring Release</legend><p>By signing below, the student (or the parent/guardian of the student if the student is under 18) acknowledges the above policy and affirms that they will follow protocol while sparring at CASCADE MARTIAL ARTS ACADEMY.</div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div style=\"width:75%\"><legend>Student Signature (type full name):</legend><p>{{student_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div><div style=\"width:75%\"><legend>Parent Signature (Student younger than 18):</legend><p>{{parent_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><h3 class=\"row text-center\">Student/School representations and release of liability:</h3><div class=\"row\"><p>Student/parent/guardian acknowledges that they should have received permission from a medical doctor following a general physical examination approving the student’s participation in any martial arts program:</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>The member applying warrants and represents that he/she/minor or student is in good physical condition and has not been advised by any Physician or Medical Facility that participation in martial arts training will in any way be averse to the wellbeing of the student. Furthermore, member represents that the student is able and allowed to participate in exercise and various martial arts curriculum which is provided by CASCADE MARTIAL ARTS ACADEMY</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>Student/parent/guardian understands that by participating in the martial arts program or by use of the facilities or equipment covered by this contract does present the possibility of accidental injury, disability, paralysis, or death. Student/parent/guardian assumes all risk associated with such participation within this program and holds CASCADE MARTIAL ARTS ACADEMY harmless for any such injury or occurrence. In addition, student/parent/guardian agrees to indemnify CASCADE MARTIAL ARTS ACADEMY from any and all liability which may arise against CASCADE MARTIAL ARTS ACADEMY by such member or through any other third party as a result of training received by CASCADE MARTIAL ARTS ACADEMY or by use of the facilities or equipment of CASCADE MARTIAL ARTS ACADEMY</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>Student/parent/guardian understands that during instruction, employees or higher degree student instructors of CASCADE MARTIAL ARTS ACADEMY will be engaged in a course of conduct requiring physical contact, and he/she (or parent or guardian) gives full consent to such contact as is required by the training.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>It is understood that due to the nature of the training which is being provided by CASCADE MARTIAL ARTS ACADEMY that accidents do from time to time occur. While all precautions will be taken to assure the safety of all students, it is impossible to foresee all risks or to guarantee that such accidents will not occur. Student/parent/guardian agrees to hold CASCADE MARTIAL ARTS ACADEMY harmless in the event of any such accident and further agrees that neither they nor any other financially responsible person will take action against CASCADE MARTIAL ARTS ACADEMY as a result of such injuries unless caused due to negligence.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>Student/parent/guardian understands that this release, waiver, and indemnity agreement is intended to be as broad and inclusive as is permitted by the law of the province or state in which any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are conducted and that if any portion is held invalid, it is agreed that the balance shall, not withstanding, continue in full legal force and effect.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>Student/parent/guardian understands that if, despite this release, a claim is made by the participant, or on his behalf, against CASCADE MARTIAL ARTS ACADEMY, the student/parent/guardian will reimburse CASCADE MARTIAL ARTS ACADEMY for any money that has been paid to the participant, or on his behalf, and hold CASCADE MARTIAL ARTS ACADEMY harmless.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>By signing this consent, you give your permission to have your video or photo taken during any class or seminar you choose to attend. If you desire not to have your photo or video taken, you agree to remove yourself from the field of view of the camera.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div><p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p><div class=\"form-check\"> <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\" checked> <label class=\"form-check-label\" for=\"defaultCheck1\"> I agree </label></div></div></div></div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br> <br><br><br><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><div class=\"row justify-content-cetner text-center\"><h3>Credit Card Authorization</h3><p>Please complete all fields. You may cancel this authorization at any time by contacting us. This authorization will remain in effect until cancellation.</p></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div style=\"width:50%\"><legend>Card Type (Mastercard, Amex, etc):</legend><p>{{card_type}}</p></div><div style=\"width:50%\"><legend>Cardholder name (as it appears):</legend><p>{{card_name}}</p></div><div style=\"width:50%\"><legend>Card Number:</legend><p>{{card_number}}</p></div><div style=\"width:50%\"><legend>Expiration Date:</legend><p>{{exp_date}}</p></div><div style=\"width:50%\"><legend>Cardholder ZIP (billing address):</legend><p>{{card_zip}}</p></div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><p style=\"width:100%\">I, {{card_name}}, authorize Cascade Martial Arts Academy LLC to charge my credit card above for agreed upon purchases. I understand that my information will be saved to file for future transactions on my account.</p><div style=\"width:75%\"><legend>Cardholder Signature:</legend><p>{{cardholder_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><div class=\"row justify-content-center text-center\"><h3>Consent to Web Activity</h3><p>By signing below, you agree to an account for the Cascade Martial Arts Academy Website (cascademaa.com) being made on your behalf. This account will contain no more personal information than what is contained here, but will contain business information regarding the student's ranking progress and certifications. Details for accessing this account will be sent to the student (or the student's guardian if the student is under 18) once sign-up is ocnfirmed.</p></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div style=\"width:75%\"><legend>Student Signature (type full name):</legend><p>{{student_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div><div style=\"width:75%\"><legend>Parent Signature (Student younger than 18):</legend><p>{{parent_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><div class=\"row justify-content-center text-center\"><h3>Student or Parental Consent/Certification</h3><div><p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p></div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div style=\"width:75%\"><legend>Student Signature (type full name):</legend><p>{{student_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div><div style=\"width:75%\"><legend>Parent Signature (Student younger than 18):</legend><p>{{parent_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div class=\"container-fluid\"><div class=\"row justify-content-center text-center\"><h3>Release and Waiver Certification</h3><div><p>I have read the CMAA Dojo Handbook and above release and waiver of liability, assumption of risk and indemnity agreement, fully understand its rights by signing it, and have signed it freely and voluntarily without inducement, assurance, or guarantee being made to me and intend my signature to be complete and unconditional release and all liability to the greatest extent allowed by law. In signing this form, I do hereby for myself, my heirs, executors and administrators release and forever discharge any and all rights and claims of damages against CASCADE MARTIAL ARTS ACADEMY and its respective officers, employees, members, and next of kin for any injuries received, including but not limited to death, resulting from my or my child’s participation in any activities or demonstrations in, on, or about the premises of CASCADE MARTIAL ARTS ACADEMY , or any location where activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are being held, or while driving to and from any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY .</p></div></div><div style=\"display:flex;flex-direction:row;flex-wrap: wrap\"><div style=\"width:75%\"><legend>Student Signature (type full name):</legend><p>{{student_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div><div style=\"width:75%\"><legend>Parent Signature (Student younger than 18):</legend><p>{{parent_signature}}</p></div><div style=\"width:25%\"><legend>Date:</legend><p>{{date}}</p></div></div></div></div></body></html>"
const welcome_html = "<html><head><style>html{font-family:'Source Sans Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:18px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:#300}body{background-color:#e8e8e8;margin:0px 15%;padding:30px}</style></head><body><p>Dear {{name}}</p><p>Thank you for enrolling at Cascade Martial Arts Academy. Attached is a copy of the student handbook, and contained herin are links to some important resources to help ensure your success:</p><ul><li>Check out when classes and special events are on our <a href='https://www.cascademaa.com/calendar'>Calendar</a>. Attending classes is the best way to help improve your skills, and ensure that you have the skills you need for self-defense!</li><li><a href='https://www.cascademaa.com/profile/login'>Log in to your Cascade Martial Arts account</a> that has been created for you. This gives you access to material on our website. An email should have been sent to this email with your username (first initial + last name) and one-time password, which needs to be reset when you first log in</li><li>Review our <a href='https://www.cascademaa.com/resources/reopening'>COVID Safe reopening procedures</a>. As an abridged version, class sizes are ucrrently limited and masks are required at all times</li><li><a href='https://cascademaa.com/shop/uniforms/gi'>Order your uniform</a> through our online shop. While regular athletic clothing can be used for your first classes, a traditional gi with Federation embroidery is required before your first test.</li></ul><p>We once again thank you for joing us at Cascade Martial Arts Academy, and look forward to joining you on your martial arts journey!</p></body></html>"

const cert_options = {
    format: 'Letter',
    orientation: 'landscape'

}
const portrait_options={
    format: 'Letter',
    orientation: 'portrait'
    
}


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

  app.use(expressCspHeader({
    directives:{
      'default-src': [SELF, '*.cascademaa.com', '*.cascademartialarts.com'],
      'script-src':[SELF,INLINE,'ajax.googleapis.com','maxcdn.bootstrapcdn.com','*.cloudflare.com','*.google.com','*.gstatic.com',"'unsafe-eval'", '*.cascademaa.com', '*.cascademartialarts.com'],
      'style-src': [SELF, INLINE,"cdn.jsdelivr.net","fonts.googleapis.com","*.bootstrapcdn.com", '*.cascademaa.com', '*.cascademartialarts.com'],
      'img-src': [SELF, INLINE, '*.cascademaa.com', '*.cascademartialarts.com'],
      'worker-src': [INLINE,'blob:',SELF, '*.cascademaa.com', '*.cascademartialarts.com'],
      'object-src':[NONE],
      'connect-src':[SELF,'*.amazonaws.com', '*.cascademaa.com', '*.cascademartialarts.com'],
      'font-src':[SELF, INLINE, "*.gstatic.com","cdn.jsdelivr.net", '*.cascademaa.com', '*.cascademartialarts.com'],
      'frame-src':[SELF,'*.google.com', '*.cascademaa.com', '*.cascademartialarts.com'],
      'script-src-elem':[SELF, INLINE, '*.cascademaa.com', '*.cascademartialarts.com']
  
      //'block-all-mixed-content': true
    }
  }))

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

aws.config.update({
  accessKeyId:,
  secretKeyId:,
  region:'us-west-2'
})

const transporter = nodemailer.createTransport({
  host:'email-smtp.us-west-2.amazonaws.com',
  port: 465,
  auth:{
    user:'AKIAWVU2E27UQNWOZ7M7',
    pass:'BPBSfTKAR+wrLVrk7eYqvs4ydgh/KaB78A1ihHMzuCEE'
  }
})
/**********************
 * Example get method *
 **********************/

app.get('/cmaa', function(req, res) {
  // Add your code here
  res.header("Access-Control-Allow-Origin", "*")
  res.json({success: 'get call succeed!', url: req.url});
  if(req.body.type="cal"){ // get events from calendar

  }
  else if(req.body.store){ // get items from store

  }
});

/****************************
* Example post method *
****************************/

app.post('/cmaa', async function(req, res) {
  // Add your code here
  
  res.header("Access-Control-Allow-Origin", "*")
  if(req.body.type === 'cal'){
    res.json({success: 'calendar call succeed!', url: req.url, body: req.body})

  }
  else if(req.body.type === 'con'){
    res.json({success: 'contact call succeed!', url: req.url, body: req.body})
    
  }
  else if(req.body.type === 'buy'){
    res.json({success: 'buy call succeed!', url: req.url, body: req.body})
    
  }
  else if(req.body.type === 'store'){
    res.json({success: 'store call succeed!', url: req.url, body: req.body})
    
  }
  else if(req.body.type === 'signup'){
    res.json({success: 'signup call succeed!', url: req.url, body: req.body})
    
  }
  else{
    res.json({error: 'invalid API call - must be  \'cal\', \'con\', \'buy\', \'store\', \'signup\'', url: req.url, body: req.body})
  }
});

app.post('/cmaa/certificate', async function(req, res){
  let response = {
    name: req.body.name,
    kana: req.body.kana,
    date: req.body.date,
    rank: req.body.rank,
  }
  let cert = cert_html
  cert = cert.replace('{{name}}', response.name)
  cert = cert.replace('{{kana}}', response.kana)
  cert = cert.replace('{{date}}', response.date)
  cert = cert.replace('{{rank}}', response.date)
  pdf.create(cert, cert_options).toBuffer(function(err, rep){
    if(err) res.json({error:err, url: req.url, body: req.body})
    else res.json({success:"certificate success buffer", url: req.url, body: rep})
  })
  res.json({success:"certificate success", url: req.url, body: cert})
});

app.post('/cmaa/calendar', async function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/cmaa/contact', async function(req, res) {
  // Add your code here
  let response = {
    name: req.body.name,
    email: req.body.email,
    question: req.body.question
  }
  let params  = {
    secret: '6LdEUskZAAAAAGFkNX6VvkfNIiIaA1LHFaDDrb2L',
    response: req.body.response
  }
  let success = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params})
  if(!success.data.success){
    res.json({error:"error - invalid recaptcha", url: req.url, body:req.body})
  }
  //SMTP Username:
//AKIAWVU2E27UQNWOZ7M7
//SMTP Password:
//BPBSfTKAR+wrLVrk7eYqvs4ydgh/KaB78A1ihHMzuCEE
  //

  res.setHeader("Access-Control-Allow-Origin", '*')
  // Beautify me!!!
  var clientInfo = {
    from: 'noreply.cmaa@gmail.com',
    to: response.email,
    subject: 'Thank You for Contacting Cascade Martial Arts Academy',
    html: "<html> <head> <style>html{font-family: \'Source Sans Pro\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; font-size: 18px; word-spacing: 1px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; box-sizing: border-box; background-color:#330000;}body{background-color: #e8e8e8; margin: 0px 15%; padding: 30px;}</style> </head> <body> <p>\'Dear \'" + response.name + "\',<br><br>Thank you for contacting Cascade Martial Arts Academy. A staff member will reply to your question promptly. Make sure to check your spam folder if your question goes unanswered, or reach out to us again. <br><br>Thank you,<br>Cascade Martial Arts Academy\'</p></body></html>"
  };
  var internalInfo ={
    from: 'noreply.cmaa@gmail.com',
    to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
    subject: 'New Question from CMAA Website',
    text:'Dear CMAA Staff,<br><br>' + response.question + '<br><br>Thank you,<br>'+response.name+',<br>'+response.email,
    html:"<html> <head> <style>html{font-family: \'Source Sans Pro\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; font-size: 18px; word-spacing: 1px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; box-sizing: border-box; background-color:#330000;}body{background-color: #e8e8e8; margin: 0px 15%; padding: 30px;}</style> </head> <body> <p>'Dear CMAA Staff,<br><br>'" + response.question + "'<br><br>Thank you,<br>'"+response.name+"',<br>'"+response.email + "</p></body></html>"
  }
  transporter.sendMail(clientInfo, function(error, info){
    if (error) {
      res.json({error:"error - email not sent", url: req.url, body:req.body})
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(internalInfo, function(error, info){
    if (error) {
      res.json({error:"error - email not sent", url: req.url, body:req.body})
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/cmaa/shop', async function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", '*')
    let response = {
      name: req.body.name,
      email: req.body.email,
      subtotal: req.body.subtotal,
      tax: req.body.tax,
      total: req.body.total,
      cart: req.body.cart,
      cc_number: req.body.cc_number,
      cvv: req.body.cvv,
      exp_month: req.body.exp_month,
      exp_year: req.body.exp_year,
      phone: req.body.phone,
      address_1: req.body.address_1,
      address_2: req.body.address_2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip

    }
    let params  = {
      secret: '6LdEUskZAAAAAGFkNX6VvkfNIiIaA1LHFaDDrb2L',
      response: req.body.response
    }
    let success = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params})
    if(!success.data.success){
      res.end()
      return
    }
    // Beautify me!!!
    var clientInfo = {
      from: 'noreply.cmaa@gmail.com',
      to: response.email,
      subject: 'Thank You for Purchasing from Cascade Martial Arts Academy',
      text: 'Dear ' + response.name + ',\n\nThank you for ordering your equipment from Cascade Martial Arts Academy.Our email system isn\'t perfect (yet), so this is the current best we can do as a receipt. \n\nSubtotal: ' + response.subtotal + '\nTax (9.8%): ' + response.tax + '\nTotal: ' + response.total +'\n\nYou can pick up your purchased items as soon as they are ready at the next class you attend. Thank you,\nCascade Martial Arts Academy'
    };
    var internalInfo ={
      from: 'noreply.cmaa@gmail.com',
      to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
      subject: 'New Order from CMAA Website',
      text: JSON.stringify(response, null, 1) + "THIS IS A TEMPORARY FORMAT"
    }
    transporter.sendMail(clientInfo, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    transporter.sendMail(internalInfo, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
});

app.post('/cmaa/signup', async function(req, res) {
  let page_0 = JSON.parse(req.body.page_0)
    let page_1 = JSON.parse(req.body.page_1)
    let page_2 = JSON.parse(req.body.page_2)
    let page_3 = JSON.parse(req.body.page_3)
    let page_4 = JSON.parse(req.body.page_4)
    let page_5 = JSON.parse(req.body.page_5)
    let page_6 = JSON.parse(req.body.page_6)
    let response = {
      first_name: page_0.first_name,
      middle_name: page_0.middle_name,
      last_name: page_0.last_name,
      sex:page_0.student_sex,
      birthday:page_0.birthday,
      email:page_0.email_address,
      phone:page_0.phone_number,
      address_1:page_0.address_1,
      address_2:page_0.address_2,
      city:page_0.city,
      state:page_0.state,
      zip:page_0.zip,
      prior:page_0.prior_experience,
      medical:page_0.medical_problems,
      student_sig_1:page_0.student_signature,
      parent_sig_1:page_0.parent_signature,
      student_sig_2:page_1.parent_signature,
      parent_sig_2:page_1.parent_signature,
      student_sig_3:page_3.student_signature,
      parent_sig_3:page_3.parent_signature,
      student_sig_4:page_4.student_signature,
      parent_sig_4:page_4.parent_signature,
      student_sig_5:page_5.student_signature,
      parent_sig_5:page_5.parent_signature,
      agree_1:page_2.agree_1,
      agree_2:page_2.agree_2,
      agree_3:page_2.agree_3,
      agree_4:page_2.agree_4,
      agree_5:page_2.agree_5,
      agree_6:page_2.agree_6,
      agree_7:page_2.agree_7,
      agree_8:page_2.agree_8,
      agree_9:page_2.agree_9,
      card_type: page_6.card_type,
      card_name: page_6.card_name,
      card_number: page_6.card_number,
      exp_date: page_6.exp_date,
      card_zip: page_6.card_zip,
      card_signature: page_6.card_signature,
      required:JSON.parse(req.body.required)

    }
    let params  = {
      secret: '6LdEUskZAAAAAGFkNX6VvkfNIiIaA1LHFaDDrb2L',
      response: req.body.response
    }
    let success = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {params})
    if(!success.data.success){
      res.end()
      return
    }
    // Beautify me!!!
    signup = signup.replace("{{name}}", response.first_name + ' ' + response.middle_name + ' ' + response.last_name)
    signup = signup.replace("{{sex}}", response.sex)
    signup = signup.replace("{{birthday}}", response.birthday)
    signup = signup.replace("{{email}}", response.email)
    signup = signup.replace("{{phone}}", response.phone)
    signup = signup.replace("{{address}}", response.address_1 + ' ' + response.address_2)
    signup = signup.replace("{{city}}", response.city)
    signup = signup.replace("{{state}}", response.state)
    signup = signup.replace("{{zip}}", response.zip)
    signup = signup.replace("{{prior_experience}}", response.prior)
    signup = signup.replace("{{medical_problems}}", response.medical)
    signup = signup.split("{{date}}").join(new Date().toDateString())
    signup = signup.replace("{{student_signature}}", response.student_sig_1)
    signup = signup.replace("{{student_signature}}", response.student_sig_2)
    signup = signup.replace("{{student_signature}}", response.student_sig_3)
    signup = signup.replace("{{student_signature}}", response.student_sig_4)
    signup = signup.replace("{{student_signature}}", response.student_sig_5)
    if(response.required){
      signup = signup.replace("{{parent_signature}}", response.parent_sig_1)
      signup = signup.replace("{{parent_signature}}", response.parent_sig_2)
      signup = signup.replace("{{parent_signature}}", response.parent_sig_3)
      signup = signup.replace("{{parent_signature}}", response.parent_sig_4)
      signup = signup.replace("{{parent_signature}}", response.parent_sig_5)
    }
    else{
      signup = signup.split("{{parent_signature}}").join(' ')
    }
    signup = signup.replace("{{card_type}}", response.card_type)
    signup = signup.replace("{{card_name}}", response.card_name)
    signup = signup.replace("{{card_name}}", response.card_name)
    signup = signup.replace("{{card_number}}", response.card_number)
    signup = signup.replace("{{exp_date}}", response.exp_date)
    signup = signup.replace("{{card_zip}}", response.card_zip)
    signup = signup.replace("{{cardholder_signature}}", response.card_signature)
    pdf.create(signup, portrait_options).toFile('static/signups/' + response.first_name + '_' + response.last_name + ".pdf", function(err, rep){
      if (err) return console.log(err);
      welcome_letter = welcome_letter.replace('{{name}}', response.first_name + ' ' + response.last_name)
      
      let path = Path.resolve(rep.filename)
      var clientInfo = {
        from: 'noreply.cmaa@gmail.com',
        to: response.email,
        subject: 'Thank You for Signing Up at Cascade Martial Arts Academy',
        html: welcome_letter,
        attachments:[
          {
            filename: response.first_name + '_' + response.last_name + "_signup.pdf",
            path: path
          }
        ]
      };
      console.log("client info made")
      var internalInfo ={
        from: 'noreply.cmaa@gmail.com',
        to: ['sempaiadam.cmaa@gmail.com'],
        subject: 'New Signup from CMAA Website',
        attachments:[
          {
            filename: response.first_name + '_' + response.last_name + "_signup.pdf",
            path: path
          }
        ]
      }
      console.log("internal info made")
      transporter.sendMail(clientInfo, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      console.log("customer email sent")
      transporter.sendMail(internalInfo, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      console.log("internal email sent")
      console.log("resoved path:" + path)
      res.setHeader('Content-disposition', 'attachment; '+ response.first_name + '_' + response.last_name + '_signup.pdf');
        
      res.download(path)

    })
});

app.post('/cmaa/store', async function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/cmaa', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/cmaa/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/cmaa', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/cmaa/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
