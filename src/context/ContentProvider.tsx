'use client'

import React, { createContext, useContext, FC, ReactNode, useState } from 'react'
import { message } from 'antd'
import {
  ISession,
  ITimeEntryServices,
  ITimeEntrySignatureTerms,
  NoteContent,
  PanelType,
  ITimeEntryClient,
  ITimeEntryClientTargetBehavior,
  ITimeEntryServiceRemainingHours,
  IntervalState,
  IAcquisitionEntry,
  ITargetBehaviorEntry,
  IParentGoalEntry,
  VideoGridTypeEnum
} from '../types'
import useDataCollection from '../hooks/useDataCollection'

interface ContentProviderProps {
  children: ReactNode
}

interface ContentContextProps {
  clientDetails: ITimeEntryClient
  setClientDetails: (client: ITimeEntryClient) => void
  clientTargetBehaviors: ITimeEntryClientTargetBehavior
  setClientTargetBehaviors: (clientTargetBehaviors: ITimeEntryClientTargetBehavior) => void
  sessions: {
    upcomingSessions: any[]
    pastSessions: any[]
    upcomingCount: number
    pastCount: number
  }
  setSessions: (sessions: any) => void
  chatState: {
    limit: number
    fetchedMessages: Array<any>
    loadingMessages: boolean
    totalPages: number
    currentPage: number
    userMessages: Array<any>
    receivedMessages: Array<any>
    newMessageNotification: boolean
  }
  chatDispatch: any
  counterCounts: Record<string, number>
  setCounterCounts: (counts: Record<string, number>) => void
  timers: Record<string, { time: number; isRunning: boolean }>
  setTimers: (timers: Record<string, { time: number; isRunning: boolean }>) => void
  intervalStates: Record<string, IntervalState>
  setIntervalStates: React.Dispatch<React.SetStateAction<Record<string, IntervalState>>>
  startTimer: (id: string, intervalLength: number) => void
  stopTimer: (id: string) => void
}

const ContentContext: any = createContext<ContentContextProps | undefined>(undefined)

export const useContent = (): any => {
  const context = useContext(ContentContext)

  return context
}

export const ContentProvider: FC<ContentProviderProps> = ({ children }) => {
  const [clientDetails, setClientDetails] = useState<ITimeEntryClient>()
  const [clientTargetBehaviors, setClientTargetBehaviors] = useState<string>('')
  const [services, setServices] = useState<ITimeEntryServices>()
  const [session, setSession] = useState<ISession>()
  const [serviceRemainingHours, setServiceRemainingHours] = useState<ITimeEntryServiceRemainingHours>()
  const [closeCaptions, setCloseCaptions] = useState<{
    transcribing: boolean
    buttonEnabled: boolean
    language: string
  }>({
    transcribing: false,
    buttonEnabled: true,
    language: 'en'
  })

  const [videoGridType, setVideoGridType] = useState<any>(VideoGridTypeEnum.default)
  const [totalSessionDuration, setTotalSessionDuration] = useState<number>(4800) // TODO: Return to 0 after testing Time Entry
  const [billingCodes, setBillingCodes] = useState<any[]>([])
  const [notesContent, setNotesContent] = useState<NoteContent[]>([])
  const [signatures, setSignatures] = useState<ITimeEntrySignatureTerms>({
    analyst: null,
    client: null
  })
  const [agreedToTerms, setAgreedToTerms] = useState<ITimeEntrySignatureTerms>({
    client: null,
    analyst: null
  })
  const [timezoneOffset, setTimezoneOffset] = useState<number>(0)
  const [translationFontSize, setTranslationFontSize] = useState<number>(15)

  const [isClientSignatureFormOpen, setIsClientSignatureFormOpen] = useState<boolean>(false)
  const [isSubmitionFormOpen, setIsSubmitionFormOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)
  const [webRTCSession, setWebRTCSession] = useState<any>()

  const [isPanelVisible, setIsPanelVisible] = useState<boolean>(false)
  const [activePanel, setActivePanel] = useState<PanelType>(null)
  const [animating, setAnimating] = useState<boolean>(false)

  const [sessions, setSessions] = useState<{
    upcomingSessions: any[]
    pastSessions: any[]
    upcomingCount: number
    pastCount: number
  }>({ upcomingSessions: [], pastSessions: [], upcomingCount: 0, pastCount: 0 })

  // Files upload
  const [fileList, setFileList] = useState<any>([])
  const [filesUrls, setFilesUrls] = useState<any>([])
  const [dragCounter, setDragCounter] = useState(0)
  const [isFileUploading, setIsFileUploading] = useState(false)

  const [counterCounts, setCounterCounts] = useState<{ SetupId: string; totalCount: number }[]>([]) // Array of objects
  const [dropdownCounts, setDropdownCounts] = useState<Record<string, Record<string, number>>>({}) // Nested objects for dropdown counts
  const [timersElements, setTimersElements] = useState<
    Record<string, { time: number; isRunning: boolean; intervals: [] }>
  >({})
  const [intervalStates, setIntervalStates] = useState<Record<string, IntervalState>>({})

  // Data Collection
  const { dataCollection, dataCollectionDispatch } = useDataCollection()

  const [dataCollectionIntervalsLength, setDataCollectionIntervalsLength] = useState<number>(5)
  const [dataCollectionSubmitValues, setDataCollectionSubmitValues] = useState<{
    acquisitions: IAcquisitionEntry[]
    targetBehaviors: ITargetBehaviorEntry[]
    parentGoals: IParentGoalEntry[]
  }>({
    acquisitions: [],
    targetBehaviors: [],
    parentGoals: []
  })

  return (
    <ContentContext.Provider
      value={{
        clientDetails,
        setClientDetails,
        clientTargetBehaviors,
        setClientTargetBehaviors,
        notesContent,
        setNotesContent,
        isSubmitionFormOpen,
        setIsSubmitionFormOpen,
        fileList,
        setFileList,
        filesUrls,
        setFilesUrls,
        dragCounter,
        setDragCounter,
        isFileUploading,
        setIsFileUploading,
        sessions,
        setSessions,
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        services,
        setServices,
        webRTCSession,
        setWebRTCSession,
        isPanelVisible,
        setIsPanelVisible,
        activePanel,
        setActivePanel,
        animating,
        setAnimating,
        billingCodes,
        setBillingCodes,
        signatures,
        setSignatures,
        agreedToTerms,
        setAgreedToTerms,
        timezoneOffset,
        setTimezoneOffset,
        session,
        setSession,
        totalSessionDuration,
        setTotalSessionDuration,
        serviceRemainingHours,
        setServiceRemainingHours,
        isClientSignatureFormOpen,
        setIsClientSignatureFormOpen,
        dataCollection,
        dataCollectionDispatch,
        counterCounts,
        setCounterCounts,
        dropdownCounts,
        setDropdownCounts,
        timersElements,
        setTimersElements,
        intervalStates,
        setIntervalStates,
        closeCaptions,
        setCloseCaptions,
        dataCollectionSubmitValues,
        setDataCollectionSubmitValues,
        dataCollectionIntervalsLength,
        setDataCollectionIntervalsLength,
        videoGridType,
        setVideoGridType,
        translationFontSize,
        setTranslationFontSize
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
