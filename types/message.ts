export interface MessageData {
  email: string
  name: string
  message: string
}

export default interface Message extends MessageData {
  _id: string
}
