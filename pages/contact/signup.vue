<template>
  <div>
    <main>
        <h1>Sign Up</h1>
        <button @click="submit2">Sign Up</button>
        <p>Here you can sign up for our programs right from your computer!</p>
      <form method="POST" @submit.prevent="submit2" v-if="!submitted" style="padding: 15px">
      <div class="content-center text-center" v-if="$route.query.success">
        <p>Thank you for signing up at Cascade Martial Arts Academy.<br><nuxt-link to="/contact/signup">Sign Up Another Student</nuxt-link></p>
      </div>
      <div v-else>
        <div v-show="index == 0">
          <div class="container-fluid">
            <div class="row">
              <h3 class="col-12">Student Information and Release Form</h3>
              <fieldset class="name col-md-6 col-sm-12">
                <legend>Student Name</legend>
                <div class="row">
                  <div class="col-5">
                    <label for="Student_Fname">First:<span style="color: red">*</span></label>
                    <input type="text" value="" name="Student_Fname" class="form-control" v-model="page0.first_name" required/>
                    <div class="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  </div>
                  <div class="col-2">
                    <label for="Student_Fname">MI:</label>
                    <input type="text" value="" name="Student_Mname" class="form-control" v-model="page0.middle_name"/>
                  </div>
                  <div class="col-5">
                    <label for="Student_Fname">Last:<span style="color: red">*</span></label>
                    <input type="text" value="" name="Student_Lname" class="form-control" v-model="page0.last_name" required/>
                    <div class="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="col-md-6 col-sm-12 row">
                <legend class="col-12">Demographics</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="student_sex" id="exampleRadios1" value="Male" v-model="page0.student_sex" checked>
                  <label class="form-check-label" for="exampleRadios1">
                    Male<br>
                  </label>
                  <div class="invalid-feedback">
                      Please provide a gender.
                    </div>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="student_sex" id="exampleRadios2" value="Female">
                  <label class="form-check-label" for="exampleRadios2">
                    Female
                  </label>
                </div>
                <div class="col-12">
                  <label for="birthday">Birthdate<span style="color: red">*</span></label>
                  <input type="date" name="student_birthday" id="birthday" v-model="page0.birthday" class="form-control">
                  <div class="invalid-feedback">
                      Please enter a valid birthdate.
                    </div>
                </div>
              </fieldset>
              
              <fieldset class="col-12">
                <legend>Contact Information</legend>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email<span style="color: red">*</span></label>
                    <input type="email" class="form-control" name="student_email" v-model="page0.email_address" required>
                    <div class="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Phone<span style="color: red">*</span></label>
                    <input type="phone" class="form-control" name="student_phone" v-model="page0.phone_number" required>
                    <div class="invalid-feedback">
                      Please provide a valid phone number.
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address<span style="color: red">*</span></label>
                  <input type="text" class="form-control" name="student_address_1" v-model="page0.address_1" required>
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address Line 2 (Optional)</label>
                  <input type="text" class="form-control" name="student_address_2" v-model="page0.address_2">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City<span style="color: red">*</span></label>
                    <input type="text" class="form-control" v-model="page0.city" name="student_city" required>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State<span style="color: red">*</span></label>
                    <input type="text" class="form-control" v-model="page0.state" name="student_state" required>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip<span style="color: red">*</span></label>
                    <input type="number" class="form-control" v-model="page0.zip" name="student_zip">
                  </div>
                </div>
                <div class="invalid-feedback">
                      Please provide a valid and complete address.
                    </div>
              </fieldset>
              <fieldset class="col-12">
                <legend>Prior Experience</legend>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="priorexperienceyn" v-model="showprior" name="prioexperienceyn">
                  <label for="priorexperienceyn" class="form-check-label">Do you have any prior martial arts experience? Check if yes.</label>
                </div>
                <div v-if="showprior">
                  <label for="priorexperience">List it here, including style, rank, and duration</label>
                  <input type="textbox" name="priorexperience" style="width:100%" v-model="page0.prior_experience" class="form-control">
                </div>
              </fieldset>
              <fieldset class="col-12">
                <legend>Medical Information</legend>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="medicalproblemsyn" v-model="showmed" name="medicalproblemsyn">
                  <label for="medicalproblemsyn" class="form-check-label">Do you have any medical problems that we should be aware of? Check if yes.</label>
                </div>
                <div v-if="showmed">
                  <label for="medicalproblems">List them here</label>
                  <input type="textbox" name="medicalproblems" style="width:100%" v-model="page0.medical_problems" class="form-control">
                </div>
              </fieldset>
              <fieldset>
                <legend>Release and Waiver</legend>
              <p>Karate and martial arts instruction is a physical training regimen that can, at time, result in injury to the practitioner. This informational disclaimer is intended to inform you, as a student, and your parents if you are under the age of 18 years, of that fact. All care during instruction will be taken to avoid injury and all efforts will be toward safe training. The student (and parents if the student is under 18) assumes full responsibility for any injuries or damage which may occur to the student and does hereby fully and forever release and discharge the Cascade Martial Arts Academy , the All Okinawa Shorin-ryu Karate and Kobudo Federation, the Okinawa Shorin-ryu Matsumura Seito Karate and Kobudo Federation, Rick Vogt, Fusei Kise, Isao Kise and any other owners, representatives, officers, servants, agents, or members from any and all claims, demands, damages, rights of action, or causes of action, present and/or future, whether the same be known or unknown, anticipated or unanticipated, resulting from or arising out of the students use or intended use of said school facilities, members, and equipment thereof, without limitation, any claims for personal injuries resulting from or arising out of the negligence of school, its officers, representatives, servants, agents, or members.</p>
              <p>Parents are encouraged to attend classes and observe the training practices at this dojo. It functions both as an opportunity to see what is being taught to your child and to answer any questions you may have regarding the class, the instruction, and the quality of training your child is receiving.</p>
              <p><b>I have read and understand the preceding two paragraphs above as well as the handbook, rules and regulations, and agree to receive instruction or allow my children to receive instruction under these conditions and at my own risk:</b></p>


              <div class="student_sig" v-if="!parentRequired">
                  Student Signature (type full name):<span style="color: red">*</span><input type="text" name="studentsig1" class="form-control" v-model="page0.student_signature" required/>        
              </div>
              <div class="parent_sig" v-else>
                  Student Signature (type full name):<input type="text" name="studentsig1" class="form-control" v-model="page0.student_signature" /><br>
                  Parent Signature (type full name):<span style="color: red">*</span><input type="text" name="parentsig1" class="form-control" v-model="page0.parent_signature" required/>
              </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div v-show="index == 1">
          <div class="container-fluid">
            <div class="row" style="padding: 15px">
              <h3>Sparring Policy</h3>
              <p>This policy is written to inform the students and participants of the school rules regarding grappling, locking, trapping, and free sparring.</p>
              <ol type="1">
                  <li>Students are not required to free spar at this school and do so of their own free will.</li>
                  <li>
                      Students will be required to have their own personal safety gear for sparring to include at a minimum
                      <ol type="a">
                          <li>Head protection (full face gear is mandatory for youth students</li>
                          <li>Hand and Foot protection (youth)</li>
                          <li>Groin protector (males)</li>
                          <li>Mouthpiece</li>
                          <li>Additionally, any safety equipment the student deems necessary for his or her protection may be worn. It is highly encouraging that chest protectors are worn by female students.</li>
                      </ol>
                  </li>
                  <li>
                      In addition, the following is required for the combative classes
                      <ol type="a">
                          <li>Foam shin/ instep guards (cloth is not allowed)</li>
                          <li>Boxing gloves (16 oz)</li>
                          <li>Open finger sparring gear</li>
                          <li>Groin protector (males)</li>
                          <li>Mouthpiece</li>
                      </ol>
                  </li>
                  <li>Worn and ragged safety equipment with torn or sharp edges is not allowed.</li>
                  <li>It is not required to purchase equipment from the dojo, but the equipment you select MUST be approved by the Chief Instructor before it is allowed to be used. </li>
                  <li>Only light or non-contact sparring is allowed during free sparring sessions. Full contact or heavy contact sparring must be under a totally controlled environment. This statement, in no way, implies that contact will not occur during the course of a free-sparring match.</li>
                  <li>Free sparring is not allowed unless the Chief Instructor (Rick Vogt) is present at the school.</li>
                  <li>No contact is allowed to head, face, neck, spinal area, or groin (except for light contact to protective gear).</li>
                  <li>Contact to joints such as knees and elbows, is not allowed.</li>
                  <li>If a student is injured during free sparring, the Chief Instructor is to be informed at once</li>
                  <li>Effective date of this policy is 1/1/2010.</li>
              </ol>
              <fieldset>
                <legend>Signature of Sparring Release</legend>
                <p>By signing below, the student (or the parent/guardian of the student if the student is under 18) acknowledges the above policy and affirms that they will follow protocol while sparring at CASCADE MARTIAL ARTS ACADEMY.
                <div class="student_sig" v-if="!parentRequired">
                    Student Signature (type full name):<span style="color: red">*</span><input type="text" name="studentsig2" class="form-control" v-model="page1.student_signature" required/>        
                </div>
                <div class="parent_sig" v-else>
                    Student Signature (type full name):<input type="text" name="studentsig2" class="form-control" v-model="page1.student_signature" /><br>
                    Parent Signature (type full name):<span style="color: red">*</span><input type="text" name="parentsig2" class="form-control" v-model="page1.parent_signature" required/>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div v-show="index == 2">
          <div class="container-fluid">
            <div class="row">
              <h3>Student/School representations and release of liability:</h3>
              <p>Student/parent/guardian acknowledges that they should have received permission from a medical doctor following a general physical examination approving the student’s participation in any martial arts program:</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_1" value="" id="defaultCheck1" v-model="page2.agree_1" required>
                <label class="form-check-label" for="defaultCheck1">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>The member applying warrants and represents that he/she/minor or student is in good physical condition and has not been advised by any Physician or Medical Facility that participation in martial arts training will in any way be averse to the wellbeing of the student.  Furthermore, member represents that the student is able and allowed to participate in exercise and various martial arts curriculum which is provided by CASCADE MARTIAL ARTS ACADEMY</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_2" value="" id="defaultCheck2" v-model="page2.agree_2" required> 
                <label class="form-check-label" for="defaultCheck2">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>Student/parent/guardian understands that by participating in the martial arts program or by use of the facilities or equipment covered by this contract does present the possibility of accidental injury, disability, paralysis, or death. Student/parent/guardian assumes all risk associated with such participation within this program and holds CASCADE MARTIAL ARTS ACADEMY harmless for any such injury or occurrence.  In addition, student/parent/guardian agrees to indemnify CASCADE MARTIAL ARTS ACADEMY from any and all liability which may arise against CASCADE MARTIAL ARTS ACADEMY by such member or through any other third party as a result of training received by CASCADE MARTIAL ARTS ACADEMY or by use of the facilities or equipment of CASCADE MARTIAL ARTS ACADEMY</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_3" value="" id="defaultCheck3" v-model="page2.agree_3" required>
                <label class="form-check-label" for="defaultCheck3">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>Student/parent/guardian understands that during instruction, employees or higher degree student instructors of CASCADE MARTIAL ARTS ACADEMY will be engaged in a course of conduct requiring physical contact, and he/she (or parent or guardian) gives full consent to such contact as is required by the training.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_4" value="" id="defaultCheck4" v-model="page2.agree_4" required>
                <label class="form-check-label" for="defaultCheck4">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>It is understood that due to the nature of the training which is being provided by CASCADE MARTIAL ARTS ACADEMY that accidents do from time to time occur.  While all precautions will be taken to assure the safety of all students, it is impossible to foresee all risks or to guarantee that such accidents will not occur.  Student/parent/guardian agrees to hold CASCADE MARTIAL ARTS ACADEMY harmless in the event of any such accident and further agrees that neither they nor any other financially responsible person will take action against CASCADE MARTIAL ARTS ACADEMY as a result of such injuries unless caused due to negligence.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_5" value="" id="defaultCheck5" v-model="page2.agree_5" required>
                <label class="form-check-label" for="defaultCheck5">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>Student/parent/guardian understands that this release, waiver, and indemnity agreement is intended to be as broad and inclusive as is permitted by the law of the province or state in which any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are conducted and that if any portion is held invalid, it is agreed that the balance shall, not withstanding, continue in full legal force and effect.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_6" value="" id="defaultCheck6" v-model="page2.agree_6" required>
                <label class="form-check-label" for="defaultCheck6">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>Student/parent/guardian understands that if, despite this release, a claim is made by the participant, or on his behalf, against CASCADE MARTIAL ARTS ACADEMY, the student/parent/guardian will reimburse CASCADE MARTIAL ARTS ACADEMY for any money that has been paid to the participant, or on his behalf, and hold CASCADE MARTIAL ARTS ACADEMY harmless.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_7" value="" id="defaultCheck7" v-model="page2.agree_7" required>
                <label class="form-check-label" for="defaultCheck7">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>By signing this consent, you give your permission to have your video or photo taken during any class or seminar you choose to attend. If you desire not to have your photo or video taken, you agree to remove yourself from the field of view of the camera.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_8" value="" id="defaultCheck8" v-model="page2.agree_8" required>
                <label class="form-check-label" for="defaultCheck8">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
              <p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="student_agree_9" value="" id="defaultCheck9" v-model="page2.agree_9" required>
                <label class="form-check-label" for="defaultCheck9">
                  I agree<span style="color: red">*</span>
                </label>
                <div class="invalid-feedback">
                  You must agree to sign up.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="index == 3">
          <div class="container-fluid">
            <div class="row justify-content-cetner text-center">
              <h3>Credit Card Authorization</h3>
              <p>Please complete all fields. You may cancel this authorization at any time by contacting us. This authorization will remain in effect until cancellation.</p>
            </div>
            <div class="row">
              <div class="form-group col-12 col-md-6">
                    <label for="card_type">Card Type (MasterCard, Amex, etc)<span style="color: red">*</span></label>
                    <input type="text" value="" name="card_type" class="form-control" v-model="page6.card_type" required/>
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="card_name">Cardholder Name (as shown on card)<span style="color: red">*</span></label>
                <input type="text" name="card_name" class="form-control" v-model="page6.card_name" required />
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="card_number">Card Number<span style="color: red">*</span></label>
                <input type="text" name="card_number" class="form-control" v-model="page6.card_number" required />
                
              </div>
              <div class="form-group col-6 col-md-3">
                <label for="card_name">Expiration Date (mm/yy)<span style="color: red">*</span></label>
                <input type="text" name="card_name" class="form-control" v-model="page6.exp_date" required />
                
              </div>
              <div class="form-group col-6 col-md-3">
                <label for="card_zip">Cardholder ZIP (from billing address)<span style="color: red">*</span></label>
                <input type="text" name="card_zip" class="form-control" v-model="page6.card_zip" required />
                
              </div>
            </div>
            <div class="row">
              <p>I, {{page6.card_name ? page6.card_name : '____________'}}, authorize Cascade Martial Arts Academy LLC to charge my crerdit card above for agreed upon purchases. I understand that my information will be saved to file for future transactions on my account.</p>
              <div class="form-group col-12">
                <label for="card_signature">Cardholder Signature<span style="color: red">*</span></label>
                <input type="text" name="card_signature" class="form-control" v-model="page6.card_signature" required />
                
              </div>
            </div>
          </div>
        </div>
        <div v-show="index == 4">
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <h3>Consent to Web Activity</h3>
              <p>By signing below, you agree to an account for the Cascade Martial Arts Academy Website (cascademaa.com) being made on your behalf. This account will contain no more personal information than what is contained here, but will contain business information regarding the student's ranking progress and certifications. Details for accessing this account will be sent to the student (or the student's guardian if the student is under 18) once sign-up is ocnfirmed.</p>
              <div class="student_sig" v-if="!parentRequired">
                  Student Signature (type full name):<span style="color: red">*</span><input type="text" name="studentsig3" class="form-control" v-model="page3.student_signature" required/>        
              </div>
              <div class="parent_sig" v-else>
                  Student Signature (type full name):<input type="text" name="studentsig3" class="form-control" v-model="page3.student_signature" /><br>
                  Parent Signature (type full name):<span style="color: red">*</span><input type="text" name="parentsig3" class="form-control" v-model="page3.parent_signature" required/>
              </div>
            </div>
          </div>
        </div>
        <div v-show="index == 5">
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <h3>Student or Parental Consent/Certification</h3>
              <p>By signing this contract, you are certifying that you are either of legal age or that you are signing this contract as the parent or legal guardian of a minor, and by signing this contract on behalf of any minor, you hereby agree that you shall be responsible for all payments due hereunder and that you will indemnify and hold CASCADE MARTIAL ARTS ACADEMY harmless for any injuries, losses, or damages sustained to anyone as a result of the minor’s participation in this program of instruction.</p>
              <div class="student_sig" v-if="!parentRequired">
                  Student Signature (type full name):<span style="color: red">*</span><input type="text" name="studentsig4" class="form-control" v-model="page4.student_signature" required/>        
              </div>
              <div class="parent_sig" v-else>
                  Student Signature (type full name):<input type="text" name="studentsig4" class="form-control" v-model="page4.student_signature" /><br>
                  Parent Signature (type full name):<span style="color: red">*</span><input type="text" name="parentsig4" class="form-control" v-model="page4.parent_signature" required/>
              </div>
            </div>
          </div>
        </div>
        <div v-show="index == 6">
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <h3>Release and Waiver Certification</h3>
              <div>
              <p>I have read the CMAA Dojo Handbook and above release and waiver of liability, assumption of risk and indemnity agreement, fully understand its rights by signing it, and have signed it freely and voluntarily without inducement, assurance, or guarantee being made to me and intend my signature to be complete and unconditional release and all liability to the greatest extent allowed by law. In signing this form, I do hereby for myself, my heirs, executors and administrators release and forever discharge any and all rights and claims of damages against CASCADE MARTIAL ARTS ACADEMY and its respective officers, employees, members, and next of kin for any injuries received, including but not limited to death, resulting from my or my child’s participation in any activities or demonstrations in, on, or about the premises of CASCADE MARTIAL ARTS ACADEMY , or any location where activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY are being held, or while driving to and from any activities or demonstrations of the martial arts classes of CASCADE MARTIAL ARTS ACADEMY . </p>
              <div class="student_sig" v-if="!parentRequired">
                  Student Signature (type full name):<span style="color: red">*</span><input type="text" name="studentsig5" class="form-control" v-model="page5.student_signature" required/>        
              </div>
              <div class="parent_sig"  v-else>
                  Student Signature (type full name):<input type="text" name="studentsig5" class="form-control" v-model="page5.student_signature" /><br>
                  Parent Signature (type full name):<span style="color: red">*</span><input type="text" name="parentsig5" class="form-control" v-model="page5.parent_signature" required/>
              </div>
              </div>
            <div class="container-fluid" style="padding: 15px">
              <div class="row justify-content-center text-center">
                <input type="submit" class="btn btn-danger" value="Sign Up!" v-if='showSubmit'>
                <input type="submit" class="btn btn-danger" value="Sign Up!" v-else disabled>
                <span  class="col-4"></span>
              </div>
            </div>
            </div>
          </div>
        </div>
      <div class="container-fluid" style="padding: 15px">
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" :style="`width: ${width}%`" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        <div class="row justify-content-center text-center" style="padding-top: 30px">
          <span  class="col-2"></span>
          <button id="prev" class="col-2 btn btn-secondary" @click="prevPage" v-if="index > 0">Prev</button>
          <span  class="col-4"></span>
          <button id="next" class="col-2 btn btn-secondary" @click="nextPage" v-if="shownext">Next</button>
          <button id="next" class="col-2 btn btn-secondary" disabled v-else-if="index < 6">Next</button>
          <span  class="col-2"></span>
        </div>
      </div>
      </div>
    </form>
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Sign Up | CMAA',
      meta: [
        { name: 'description', content: 'Signup for classes at Cascade Martial Arts Academy' },
        
      ],
    
    }
  },
  data(){
   return{
    index: 0,
    showprior:false,
    showmed:false,
    valid_recaptcha: false,
    page0:{
      first_name: null,
      middle_name: null,
      last_name: null,
      student_sex: null,
      birthday: null,
      email_address: null,
      phone_number: null,
      address_1: null,
      address_2: null,
      city: null,
      state: null,
      zip: null,
      prior_experience: null,
      medical_problems: null,
      student_signature: null,
      parent_signature: null
    },
    page1:{
      student_signature: null,
      parent_signature: null
    },
    page2:{
      agree_1: false,
      agree_2: false,
      agree_3: false,
      agree_4: false,
      agree_5: false,
      agree_6: false,
      agree_7: false,
      agree_8: false,
      agree_9: false
    },
    page3:{
      student_signature: null,
      parent_signature: null
    },
    page4:{
      student_signature: null,
      parent_signature: null
    },
    page5:{
      student_signature: null,
      parent_signature: null
    },
    page6:{
      card_type: null,
      card_name: null,
      card_number: null,
      exp_date: null,
      card_zip: null,
      card_signature: null
    }
   }

 },
 computed:{
   width: function(){
     return this.index * 16.667
   },
   parentRequired: function(){
     let bday = new Date(this.page0.birthday)
     let diff = Date.now() - bday
     let agedate = new Date(diff)
     let age = agedate.getUTCFullYear()-1970
     return age < 18

   },
   submitted: function(){
     return this.$route.query.submitted == 1
   },
   shownext: function(){
     if(this.index == 0){
       return this.page0.first_name &&
              this.page0.last_name &&
              this.page0.student_sex && 
              this.page0.birthday &&
              this.page0.email_address && 
              this.page0.phone_number && 
              this.page0.address_1 &&
              this.page0.city &&
              this.page0.state && 
              this.page0.zip &&
              ((this.page0.student_signature && !this.parentRequired) ||
              (this.page0.parent_signature != null && this.parentRequired))
     }
     else if (this.index == 1){
       return ((this.page1.student_signature && !this.parentRequired) ||
              (this.page1.parent_signature != null && this.parentRequired))
     }
     else if (this.index == 2){
       return this.page2.agree_1 &&
              this.page2.agree_2 &&
              this.page2.agree_3 &&
              this.page2.agree_4 &&
              this.page2.agree_5 &&
              this.page2.agree_6 &&
              this.page2.agree_7 &&
              this.page2.agree_8 &&
              this.page2.agree_9
     }
     else if (this.index == 3){
       return this.page6.card_type &&
              this.page6.card_name &&
              this.page6.card_zip && 
              this.page6.card_number &&
              this.page6.exp_date &&
              this.page6.card_signature
     }
     else if (this.index == 4){
       return ((this.page3.student_signature && !this.parentRequired) ||
              (this.page3.parent_signature != null && this.parentRequired))
     }
     else if (this.index == 5){
       return ((this.page4.student_signature && !this.parentRequired) ||
              (this.page4.parent_signature != null && this.parentRequired))
     }
     else if (this.index == 6){
       return false
     }
     return true
   },
   showSubmit: function(){
     return (this.index == 6 && ((this.page5.student_signature != null && !this.parentRequired) || (this.page5.parent_signature != null && this.parentRequired)))
   }
 },
 mounted(){
   //this.index = 0
 },
 methods:{
   nextPage: function(){
     ++this.index
   },
   prevPage: function(){
     --this.index
   },
   async submit2(){
    //const token = await this.$recaptcha.getResponse()
    let params ={
      page_0: this.page0,
      page_1: this.page1,
      page_2: this.page2,
      page_3: this.page3,
      page_4: this.page4,
      page_5: this.page5,
      page_6: this.page6,
      required: this.parentRequired,
      //response: token
    }
    const response = await fetch('/.netlify/functions/signup', {method: 'POST', body: JSON.stringify(params)})
    this.$route.query.status = response.status
   },
   success: function(){
     this.valid_recaptcha = true
    },
   error: function(){
     this.valid_recaptcha = false
    },
   expired: function(){
     this.valid_recaptcha = false
    }
 }
}
</script>

<style>
@media screen and (min-width: 800px){
 .signup p{
   font-size: 16px;
 }
}
@media screen and (max-width: 800px){
 .signup p{
   font-size: 12px;
 }
}
.signup{
  background-color:gainsboro;
  color:black;
  border-radius: 15px;
}
.name {
  float: left;
}
</style>