import { Document } from 'mongoose'

interface ReactionDetail {
  count: number
  users: { username: string; displayname: string; avatar: string }[]
  id: string
  messageCreator: string
  emoji?: string
}
interface Reactions {
  [type: string]: ReactionDetail
}

export interface IChat extends Document {
  room: string
  user: string
  displayname: string
  message: string
  reactions: Reactions
  avatar: string
  created_at: Date
  updated_at: Date
  type: string
  files: string[]
  systemMessage: Object
}
