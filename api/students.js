const faunadb = require('faunadb')
const client = new faunadb.Client({secret:""})

const {
    Paginate,
    Get, // GET
    Ref,
    Create, // POST
    Collection, 
    Update, // PUT
    Documents,
    Delete,
    Map,
    Match,
    Index,
    Lambda,
    Var

} = faunadb.query

const crypto = require('crypto')
const nodemailer = require('nodemailer')


async function sendEmail(name, email, username, password){
    console.log("name: ", name, "\nusername: ", username, "\npassword: ", password)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'noreply.cmaa@gmail.com',
          pass: ''
        }
      });
      
    var clientInfo = {
        from: 'noreply.cmaa@gmail.com',
        to: email,
        subject: 'Your CMAA Account Details',
        text: 'Your CMAA Username is:\n\n' + username + '\n\nwith the password:\n\n' + password
      };
      var internalInfo ={
        from: 'noreply.cmaa@gmail.com',
        to: ['senseirick.cmaa@gmail.com','sempaiadam.cmaa@gmail.com'],
        subject: 'New CMAA Account Made',
        text: "Name:\t" + name +
            "\nEmail:\t" + email + 
            "\nUsername:\t" + username +
            "\nPassword:\t" + password +
            "\n\nPlease keep this record for recovery purposes in case client email is not received. Additionally, give these details to the student during their first class."
      }
    let res = await transporter.sendMail(clientInfo)
    res = await transporter.sendMail(internalInfo)
}

// called every time an account is changed
async function authenticate(username, password){
    const today = new Date()
    let match = []
    const doc = await client.query(
        Map(
            Paginate(
                Match(Index("students_by_username"), username)
            ),
            Lambda("X", Get(Var("X")))
        )
    )
    // if no users with the username are found
    if(doc.data.length < 1){
        // ambiguous message for security
        return {statusCode: 403, body: JSON.stringify({message: "Error - authentication failed"})}
    }
    let data = doc.data[0].data
    let key = crypto.createHmac("sha512", data.salt).update(password).digest("hex")
    if(data.password == key){
        const {salt, hash} = await new_password(password)
        await client.query(
            Update(
                Ref(Collection("students"), String(doc.data[0].ref).split("\"")[3]),
                {
                    data:{
                        "accessed": today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}),
                        "salt": salt,
                        "password": hash
                    }
                }
            )
        )
        doc.data[0].id = String(doc.data[0].ref).split("\"")[3]
        if(data.enabled)
            return {statusCode: 200, body:JSON.stringify(doc.data[0])}
    }
    
    return {statusCode: 403, body:JSON.stringify({message: "Error - authentication failed"})}
}

async function new_password(plaintext){
    const salt = crypto.randomBytes(128).toString('base64');
    const sha256hasher = crypto.createHmac("sha512", salt)
    const password = sha256hasher.update(plaintext).digest("hex")
    return {salt: salt, hash: password, pass: plaintext }
}

async function adminGetUser(username, password, user){
    let result = await authenticate(username, password)
    const admin = JSON.parse(result.body)
    let doc
    if(result.statusCode === 200 && admin.data.role >= 4){
        doc = await client.query(
            Map(
                Paginate(
                    Match(Index("students_by_username"), user)
                ),
                Lambda("X", Get(Var("X")))
            )
        )
    }
    if(doc.data.length < 1){
        // ambiguous message for security
        return {statusCode: 403, body: JSON.stringify({message: "Error - authentication failed"})}
    }
    else{
        doc.data[0].id = String(doc.data[0].ref).split("\"")[3]
        return {statusCode: 200, body: JSON.stringify(doc.data[0])}
    }
}

async function isUnique(username){
    const doc = await client.query(
        Map(
            Paginate(
                Match(Index("students_by_username"), username)
            ),
            Lambda("X", Get(Var("X")))
        )
    )
    return doc.data.length === 0
}

async function uniqueUsername(name){
    let u = await isUnique(name)
    let i = 1
    while(u == false){
        i++
        u = await isUnique(name+i)
        return name+i
    }
    return name
}

async function pass(){
    let password = ""
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[{]}|;:,<.>';
    for ( var i = 0; i < 20; ++i ) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}
async function reset(user){
    let doc = await client.query(
        Map(
            Paginate(
                Match(Index("students_by_username"),user)
            ),
            Lambda("X",Get(Var("X")))
        )
    )
    if(doc.data.length < 1){
        return {statusCode: 403, body: JSON.stringify({message:"Error - authentication failed"})}
    }
    else{
        const ID = String(doc.data[0].ref).split("\"")[3]
        const p = new_password(await pass())
        doc = await client.query(
            Update(
                Ref(Collection("students"),ID),
                {
                    data:{
                        "salt": p.salt,
                        "password": p.hash
                    }
                }
            )
        )
        sendEmail(doc.data[0].name, doc.data[0].email, user, p.pass)
        return {statusCode: 200, body: JSON.stringify(doc)}
    }
}

exports.handler = async(event, context)=>{
    if(event.httpMethod === "POST"){
        const {action} = JSON.parse(event.body)
        if(action === "create"){
            // make new student
            const {name, email, phone, kana, image, birthdate} = JSON.parse(event.body)
            let nameArray = name.split(" ")
            let firstInitial = nameArray.shift().charAt(0).toLowerCase()
            let lastName = nameArray.join('').toLowerCase()
            const username = await uniqueUsername(firstInitial + lastName)

            const today = new Date()
            // Create Password
            const p = await new_password(await pass())
            let doc = await client.query(
                Create(
                    Collection("students"),
                    {
                        data:{
                            "name": name,
                            "username": username,
                            "email": email,
                            "phone": phone,
                            "kana": kana,
                            "birthdate":birthdate,
                            "karate_rank": [
                                today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}), // 10th kyu (creation date)
                            ],
                            "parra_rank": [
                            ],
                            "instructorKarate": false,
                            "instructorKobudo": false,
                            "instructorTuite": false,
                            "instructorLaw": false,
                            "instructorParra": [],
                            "honorary": [], // renshi, shihan, hanshi

                            /*
                                                admin   instructor  student
                            0   0   0   0   0   0       0           0
                            */
                            "role": 1,
                            "enabled": true,
                            "image": image,
                            "accessed": today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}),
                            "salt":p.salt,
                            "password": p.hash
                        }
                    }
                )
            )
            sendEmail(name, email, username, p.pass)
            return {statusCode: 200, body:JSON.stringify(doc)}
        }
        else if(action === "adminUsername"){
            const {username, password, user, name} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "username": name
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "name"){
            const {username, password, name} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200){
                const user = JSON.parse(result.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "name": name
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "adminName"){
            const {username, password, user, name} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "name": name
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "password-change"){  
            const {username, password, new_pass} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200){  
                const {salt, hash} = await new_password(new_pass)
                const user = JSON.parse(result.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "password": hash,
                                "salt": salt
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "adminReset"){ // admin sends email
            const {username, password, user} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                return await reset(user)
            }
            return {statusCode: 400, body: JSON.stringify({message: "Error"})}
        }
        else if(action === "reset"){
            const {user} = JSON.parse(event.body)
            return await reset(user)
        }
        else if(action === "birthday"){
            const {username, password, birthday} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200){
                const user = JSON.parse(result.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "birthdate": birthday
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "adminBirthday"){
            const {username, password, user, birthday} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "birthdate": birthday
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "email"){
            const {username, password, email} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200){
                const user = JSON.parse(result.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "email": email
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "adminEmail"){
            const {username, password, user, email} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "email": email
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
            
        }
        else if(action === "phone"){
            const {username, password, phone} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200){
                const user = JSON.parse(result.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "phone": phone
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "adminPhone"){
            const {username, password, user, phone} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "phone": phone
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "karate_rank"){ // always admin
            const {username, password, user, rank} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "karate_rank": rank
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "parra_rank"){ // always admin
            const {username, password, user, rank} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "parra_rank": rank
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "role"){ // always admin
            const {username, password, user, role} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "role": role
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "instructorKarate"){ // always admin
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "instructorKarate": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "instructorKobudo"){
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "instructorKobudo": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "instructorTuite"){
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "instructorTuite": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "instructorLaw"){
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "instructorLaw": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "honorary"){
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "honorary": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "instructorParra"){
            const {username, password, user, instructors} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "instructorParra": instructors
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "kana"){ // always admin
            const {username, password, user, kana} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "kana": kana
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "enabled"){ // always admin
            const {username, password, user, enabled} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "enabled": enabled
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "image"){ // always admin
            const {username, password, user, image} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Update(
                        Ref(Collection("students"), user.id),
                        {
                            data:{
                                "image": image
                            }
                        }
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
        }
        else if(action === "signin"){ // only user 
            const {username, password} = JSON.parse(event.body)
            return await authenticate(username, password)
            
        }
        else if(action ==="adminGetUser"){ // always admin
            const {username, password, user} = JSON.parse(event.body)
            return await adminGetUser(username, password, user)
            
        }
        else if(action === "list"){ // always admin
            const {username, password} = JSON.parse(event.body)
            let result = await authenticate(username, password)
            const profile = JSON.parse(result.body)
            if(result.statusCode === 200 && profile.data.role >= 4){
                let roster = []
                const doc = await client.query(
                    Map(
                        Paginate(
                        Match(Index("all_students"))
                        ),
                        Lambda("X", Get(Var("X")))
                    )
                )
                for(let i = 0; i < doc.data.length; ++i){
                    roster.push(doc.data[i].data)
                    roster[i].id=String(doc.data[i].ref).split('"')[3]
                }
                return {statusCode: 200, body:JSON.stringify(roster)}
            }
            return {statusCode: 403, body: JSON.stringify({message: "Error - authentication failed"})}
        }
        else {
            return {statusCode: 405, body:JSON.stringify({message: "Error - method not allowed"})}

        }
        

    }
    else if(event.httpMethod === "DELETE"){
        // admin cannot delete themselves
        const {username, password, user} = JSON.parse(event.body)
            let response = await adminGetUser(username, password, user)
            if(response.statusCode === 200){
                const user = JSON.parse(response.body)
                const doc = await client.query(
                    Delete(
                        Ref(Collection("students"), user.id)
                    )
                )
                return {statusCode: 200, body: JSON.stringify(doc)}
            }
            else{
                return {statusCode: 400, body: JSON.stringify({message: "Error - something went wrong"})}
            }
    }
    else{
        return {statusCode: 405, body:JSON.stringify({message: "Error - method not allowed"})}

    }
}