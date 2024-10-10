'use client'

import React, { createContext, useContext, FC, ReactNode, useState } from 'react'
import { ITimeEntryUser, UserType } from '../types'

interface AuthProviderProps {
  children: ReactNode
  currentUser: Partial<ITimeEntryUser> | undefined
}

interface AuthContextProps {
  currentUser: ITimeEntryUser
  userType: UserType
  setUserType: (userType: UserType) => void
}

const AuthContext: any = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = (): any => {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, currentUser }) => {
  const [userType, setUserType] = useState<UserType>()

  return <AuthContext.Provider value={{ currentUser, userType, setUserType }}>{children}</AuthContext.Provider>
}
