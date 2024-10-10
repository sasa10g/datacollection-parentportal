import { Document } from 'mongoose'

export interface ISignature extends Document {
  session: string
  signature: string
  clientName: string
  created_at: Date
  updated_at: Date
}
