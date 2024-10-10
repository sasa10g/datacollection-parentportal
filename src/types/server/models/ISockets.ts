export interface ISocketData<T = {}> {
  data: T
  callback?: (data: Object) => void
}

export interface IGetSession {
  id?: string
  roomHash?: string
}

export interface IGetSessions {
  username: string
  clientDate: Date
}

export interface IGetSignature {
  session: string
}

export interface ISetSignature {
  signature: string
  session: string
  clientName: string
}

export interface ISendMessage {
  roomId: string
  user: string
  name: string
  files: string
  message: string
}

export interface IPaginatedMessages {
  roomId: string
  page: number
  limit: number
}

export interface ILogClientLogin {
  roomHash: string
  currentUser: any
}

export interface IGetSessionHistory {
  roomHash: string
  startTime: Date
  endTime: Date
  clientId: number
}
