import { NextApiHandler } from 'next'

export default function withServerErrorHandler(wrappedHandler: NextApiHandler) {
  const handler: NextApiHandler = async (req, res) => {
    try {
      await wrappedHandler(req, res)
    } catch (error) {
      res
        .status(error.code ?? 500)
        .json({ message: error.message ?? 'Internal server error' })
    }
  }
  return handler
}
