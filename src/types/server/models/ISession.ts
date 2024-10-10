import { Document } from 'mongoose'
import { ITelehealthSession } from '../ITelehealthSession'
import { IUser } from './IUser'

interface Participants {
  name: string
  timestamp: Date
}

export interface ISession extends Document {
  title: string | null
  startDate: string | null
  endDate: string | null
  creator: IUser
  roomId: string
  creatorToken: string
  roomHash: string
  type: string
  participants: Participants[]
  link: string
  parentLink: string
  uuid: string
  created_at: Date
  active: boolean
  rawObject: ITelehealthSession
}
