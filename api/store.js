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

exports.handler = async(event, context) =>{
  if(event.httpMethod === "POST"){ // add item to store
    const {name, sizes, prices, category, description, src} = JSON.parse(event.body)
    /*
    name - String - name of item
    sizes - Array[String] - list of size
    prices - Array[Number] - list of prices
    category - String - category of item (which page to display on)
    description - String - description of item
    src - image
    */
    let doc = await client.query(
      Create(
        Collection("products"),
        {
          data:{
            "name":name,
            "prices": prices,
            "sizes":sizes,
            "category":category,
            "description":description,
            "src": src
          }
        }
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}
  }
  else if(event.httpMethod === "PUT"){ // update item in store
    const {id, name, sizes, prices, category, description, src} = JSON.parse(event.body)
    /*
    name - String - name of item (gets changed)
    sizes - Array[String] - list of sizes (gets updated)
    prices - Array[Number] - list of prices (gets updated)
    category - String - category of item (which page to display on) (gets updated)
    description - String - description of item (gets updated)
    */
   const doc = await client.query(
    Update(
      Ref(Collection("products"), id),
      {
        data: {
          "name":name,
          "prices": prices,
          "sizes":sizes,
          "category":category,
          "description":description,
          "src": src
        }
      }
    )
   )
    return {statusCode: 200, body:JSON.stringify(doc)}
  }
  else if(event.httpMethod === "DELETE"){ // remove item from store
    const {id} = JSON.parse(event.body)
    const doc = await client.query(
      Delete(
        Ref(Collection("products"), id)
      )
    )
    return {statusCode: 200, body:JSON.stringify(doc)}
  }
  else if(event.httpMethod === "GET"){ // retrieve items from store FINISHED
    // return JSON string of store
    let store = []
    const doc = await client.query(
      Map(
        Paginate(
          Match(Index("all_products"))
        ),
        Lambda("X", Get(Var("X")))
      )
    )
    for(let i = 0; i < doc.data.length; ++i){
      //console.log(String(doc.data[i]).split('"')[3])
      store.push(doc.data[i].data)
      store[i].id=String(doc.data[i].ref).split('"')[3]
    }
    return {statusCode: 200, body:JSON.stringify(store)}
  }
  else{ // anything else (if it exists)
    return {statusCode: 405, body:JSON.stringify({message:"error - method not allowed"})}

  }
}

