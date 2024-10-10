export type UserType = 'Client' | 'Analyst' | 'Assistant'

export enum UserTypes {
  Client = 'Client',
  Analyst = 'Analyst',
  Assistant = 'Assistant'
}

export const userTypes = [UserTypes.Client, UserTypes.Analyst, UserTypes.Assistant]
