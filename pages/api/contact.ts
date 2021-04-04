import { NextApiHandler } from 'next'

import MongoDBConnection from '../../lib/mongodb-connection'
import withServerErrorHandler from '../../lib/server-error-handler'
import { isEmailValid } from '../../lib/validations'
import Message, { MessageData } from '../../types/message'

interface Response {
  message: string
  createdMessage: Message
}

const handler: NextApiHandler<Response> = async (req, res) => {
  const mongoClient = await MongoDBConnection.getClient()
  switch (req.method) {
    case 'POST': {
      const reqBody = req.body as MessageData
      if (!reqBody.email && !isEmailValid(reqBody.email)) {
        throw { code: 422, message: 'Invalid email address' }
      }

      const result = await mongoClient
        .db()
        .collection('messages')
        .insertOne(reqBody)

      res.status(201).json({
        message: 'Message sent successfully',
        createdMessage: {
          _id: result.insertedId,
          ...reqBody,
        },
      })
      break
    }
    default: {
      throw { code: 405, message: 'Invalid method' }
    }
  }
}

export default withServerErrorHandler(handler)
