import { MongoClient } from "mongodb"
import { MONGODB_URI } from "$env/static/private"

const client = new MongoClient(MONGODB_URI)

export function connect(){
    console.log("Connecting to mongodb...")
    return client.connect()
}

export default client.db()