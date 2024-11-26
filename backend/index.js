import express from 'express'
import cors from 'cors'
import { MongoClient,ObjectId } from 'mongodb'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb',extended:true}))
dotenv.config()

const client = new MongoClient(process.env.MONGO_URI)

let ProjectCollection

const main = async () => {
    await client.connect()
    .then(console.log('Successfully connect with DB'))
    .catch(err=>console.log(err))

    ProjectCollection = client.db('projectdatabase').collection('projects')    
}


app.get('/',async(req,res)=>{
    try {
        const projects = await ProjectCollection.find().toArray()
        res.send({
            status:200,
            projects
        })
    } catch (error) {
          res.status(500).json({message:'Error fetching products'})  
    }
})

app.post('/',async (req,res) => {
    const newProject = req.body
    const result =  ProjectCollection.insertOne({newProject})
    res.status(200).json(result)
})


app.put('/:id',async (req,res) => {
    const {id} = req.params
    const updatedProject = req.body
    const result = await ProjectCollection.updateOne(
        {_id:new ObjectId(id)},
        {$set:updatedProject}
    )
    res.status(200).json(result)
})

app.delete('/:id',async (req,res) => {
    const {id} = req.params
    const result = await ProjectCollection.deleteOne(
        {_id:new ObjectId(id)}
    )
    res.status(200).json(result)
})



const serverStarted = async () => {
    await main()
    app.listen(5000,()=>{
        console.log('listening on PORT 5000')
    })
}

serverStarted()