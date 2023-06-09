import { connect } from 'mongoose'

const connectionDB = {
  isConneted: false
}
export async function connectMongoDB () {
  if (connectionDB.isConneted) return
  const db = await connect(process.env.MONGO_URI)
  connectionDB.isConneted = db.connections[0].readyState
}
