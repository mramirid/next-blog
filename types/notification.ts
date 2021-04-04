export default interface Notification {
  title: string
  message: string
  status: 'success' | 'error' | 'pending'
}
