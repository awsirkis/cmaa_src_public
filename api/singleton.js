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
    Match,
    Index,
    Lambda,
    Var,
    Map

} = faunadb.query

exports.handler = async(event, context)=>{
  if(event.httpMethod==="POST"){
    const {name, start, end, override, date, description, color} = JSON.parse(event.body)
    let doc = await client.query(
      Create(
        Collection("singleton_events"),
        {
          data:{
            "name":name,
            "start":start,
            "end": end,
            "override":override,
            "color":color,
            "description":description,
            "date":date
          }
        }
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}
  }
  else if(event.httpMethod === "PUT"){
    const {name, start, end, override, date, description, id, color} = JSON.parse(event.body)
    const doc = await client.query(
      Update(
        Ref(Collection("singleton_events"), id),
        {
          data: {
            "name":name,
            "start":start,
            "end": end,
            "override":override,
            "color":color,
            "description":description,
            "date":date
          }
        }
      )
     )
      return {statusCode: 200, body:JSON.stringify(doc)}

  }else if(event.httpMethod==="DELETE"){
    const {id} = JSON.parse(event.body)
    const doc = await client.query(
      Delete(
        Ref(Collection("singleton_events"), id)
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}

  }else if(event.httpMethod === "GET"){
    let cal = []
    const doc = await client.query(
      Map(
        Paginate(
          Match(Index("all_singleton"))
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