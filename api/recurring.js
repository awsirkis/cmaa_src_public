const faunadb = require('faunadb')
const client = new faunadb.Client({secret:"secret"})


const {
    Paginate,
    Get, // GET
    Ref,
    Create, // POST
    Collection, 
    Update, // PUT
    Documents,
    Delete,
    Match,
    Index,
    Lambda,
    Var,
    Map

} = faunadb.query

exports.handler = async(event, context)=>{
  if(event.httpMethod==="POST"){
    const {name, start, end, days, description, color} = JSON.parse(event.body)
    let doc = await client.query(
      Create(
        Collection("recurring_events"),
        {
          data:{
            "name":name,
            "start":start,
            "end": end,
            "days":days,
            "color":color,
            "description":description
          }
        }
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}
  }
  else if(event.httpMethod === "PUT"){
    const {name, start, end, days, description, id, color} = JSON.parse(event.body)
    const doc = await client.query(
      Update(
        Ref(Collection("recurring_events"), id),
        {
          data: {
            "name":name,
            "start":start,
            "end": end,
            "days":days,
            "color":color,
            "description":description
          }
        }
      )
     )
      return {statusCode: 200, body:JSON.stringify(doc)}

  }else if(event.httpMethod==="DELETE"){
    const {id} = JSON.parse(event.body)
    const doc = await client.query(
      Delete(
        Ref(Collection("recurring_events"), id)
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}

  }else if(event.httpMethod === "GET"){
    let cal = []
    const doc = await client.query(
      Map(
        Paginate(
          Match(Index("all_recurring"))
        ),
        Lambda("X", Get(Var("X")))
      )
    )
    for(let i = 0; i < doc.data.length; ++i){
      //console.log(String(doc.data[i]).split('"')[3])
      cal.push(doc.data[i].data)
      cal[i].id=String(doc.data[i].ref).split('"')[3]
    }
    return {statusCode: 200, body:JSON.stringify(cal)}
  }
  else{
    return {statusCode: 405, body:JSON.stringify({message:"error - method not allowed"})}
  }
}