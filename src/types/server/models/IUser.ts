import { Document } from 'mongoose'

export interface IUser extends Document {
  id: string
  socketId: string
  socketIdDevices: {
    android: string
    ios: string
    windows: string
    macos: string
  }
  socketIdPresence: string
  ID: number
  firstName: string
  lastName: string
  displayname: string
  username: string
  email: string
  avatar: string
  presence: number
  active: boolean
  department: string
  relatedDepartments: string[]
  region: string
  gender: string
  title: string
  accountName: string
  userID: number
  allowChat: boolean
  lastactivity: Date
  videoCallId: string
  initials: string
  isApplicant: boolean
  isWebChat: boolean
  isParent: boolean
  sip: string
  extension: number | null
  createType: string | null
  created_at: Date
  updated_at: Date
}
