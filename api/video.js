const faunadb = require('faunadb')
const { del } = require('request')
const client = new faunadb.Client({secret:"fnAD6BxyHhACDE5LHmyeAk9uf9Q8SqLqtV27U7AR"})

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

async function d(id) {
    let doc = await client.query(
        Get(Ref(Collection("videos"), id))
    )
    for(let i = 0; i < doc.data.data.length; ++i){
        d(doc.data.data[i])
    }
    await client.query(
        Delete(Ref(Collection("videos"),id))
    )
    return
}

exports.handler = async(event, context)=>{
    if(event.httpMethod === "POST"){
        // make new student
        const {action} = JSON.parse(event.body)
        if(action === 'addTop'){
            let doc = await client.query(
                Create(
                    Collection("videos"),
                    {
                        data:{
                            title:'',
                            thumbnail:'',
                            data:'',
                            description:'',
                            kmin: 0,
                            pmin:0,
                            required: false
                        }
                    }
                )
            )
            doc.data.id=String(doc.ref).split("\"")[3]
            const top = await client.query(
                Map(
                    Paginate(
                        Match(Index("videos_by_title"), "Videos")
                    ),
                    Lambda("X", Get(Var("X")))
                )
            )
            let arr = top.data[0].data.data
            arr.push(String(doc.ref).split("\"")[3])
            await client.query(
                Update(
                    Ref(Collection("videos"),String(top.data[0].ref).split("\"")[3]),{
                        data:{
                            data: arr
                        }
                    }
                )
            )

            return{statusCode:200, body:JSON.stringify(doc)}
        }
        else if(action === 'getAll'){
            let doc = await client.query(
                Map(
                    Paginate(
                        Match(Index("videos_by_title"), "Videos")
                    ),
                    Lambda("X", Get(Var("X")))
                )
            )

            doc.data[0].data.id = String(doc.data[0].ref).split("\"")[3]
            return {statusCode: 200, body:JSON.stringify(doc.data[0].data)}

        }
        else if(action === 'getVideo'){
            const {id} = JSON.parse(event.body)
            let doc = await client.query(
                Get(
                    Ref(Collection("videos"), id)
                )
            )
            doc.data.id = id
            return {statusCode: 200, body: JSON.stringify(doc.data)}
        }
        else if(action === 'push'){
            const {title, description, id, thumbnail, data, kmin, pmin, required} = JSON.parse(event.body)
            
            const doc = await client.query(
                Update(Ref(Collection("videos"), id), {
                    data:{
                        title:title,
                        description: description,
                        thumbnail: thumbnail,
                        data: data,
                        kmin: kmin,
                        pmin: pmin,
                        required: required
                    }
                })
            )
            return{statusCode:200, body:JSON.stringify(doc)}
        }
        else if(action === 'removeItem'){
            const {parent, id} = JSON.parse(event.body)
            d(id)
            let doc = await client.query(
                Get(Ref(Collection("videos"), parent))
            )
            doc.data.data.splice(doc.data.data.indexOf(id), 1)
            await client.query(
                Update(Ref(Collection("videos"), parent),{
                        data:{
                            data: doc.data.data
                        }
                    }
                )
            )
            return{statusCode:200, body:JSON.stringify(doc)}
        }
        else if(action === 'addVideo'){
            const {parent} = JSON.parse(event.body)
            let doc = await client.query(
                Create(
                    Collection("videos"),
                    {
                        data:{
                            title:'',
                            thumbnail:'',
                            data:'',
                            description:'',
                            kmin: 0,
                            pmin: 0,
                            required: false
                        }
                    }
                )
            )
            doc.data.id=String(doc.ref).split("\"")[3]
            const top = await client.query(
                Get(Ref(Collection("videos"),parent))
            )
            let arr = typeof(top.data.data) == 'object' ? top.data.data : []
            arr.push(String(doc.ref).split("\"")[3])
            await client.query(
                Update(
                    Ref(Collection("videos"),parent),{
                        data:{
                            data: arr
                        }
                    }
                )
            )
            return{statusCode:200, body:JSON.stringify(doc)}
        }
        else if(action === 'getRequirements'){
            const {kmin} = JSON.parse(event.body)
            let vid = await client.query(
                Map(
                    Paginate(
                        Match(Index("required_by_rank"), [kmin, true])
                    ),
                    Lambda("X", Get(Var("X")))
                )
            )
            console.log(vid)
            return{statusCode:200, body:JSON.stringify(vid)}
            
        }
        return {statusCode: 200, body:JSON.stringify({message:"doc"})}
    }
    else if(event.httpMethod === 'GET'){
        // get specific video
        // get subset of videos
        // get list of all videos
    }
    else if(event.httpMethod === 'DELETE'){
        // delete video
    }
    else if(event.httpMethod === 'PUT'){
        // name
        // video
        // description
        // thumbnail
    }
    return{statusCode:200, body:JSON.stringify(event)}
    
}