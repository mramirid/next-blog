import { MongoClient } from 'mongodb'

const cluster = process.env.CLUSTER_NAME
const dbname = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const mongodbUrl = `mongodb+srv://${username}:${password}@${cluster}.dxksd.mongodb.net/${dbname}?retryWrites=true&w=majority`

export default class MongoDBConnection {
  private static mongoClient: MongoClient | null = null

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static async getClient() {
    if (!MongoDBConnection.mongoClient) {
      MongoDBConnection.mongoClient = await MongoClient.connect(mongodbUrl, {
        useUnifiedTopology: true,
      })
    }
    return MongoDBConnection.mongoClient
  }

  public static closeConnection() {
    MongoDBConnection.mongoClient?.close()
    MongoDBConnection.mongoClient = null
  }
}
