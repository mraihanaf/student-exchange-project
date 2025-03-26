import { connect } from "$db/mongo"
import { client } from "$aws/client"

connect().then(() => {
    console.log("Mongo started")
}).catch(e => {
    console.error(e)
})

