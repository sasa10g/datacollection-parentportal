'use client'

// TimerContext.tsx
import React, { createContext, useState, useContext, useEffect, useRef, FC } from 'react'

interface TimerState {
  time: number
  isRunning: boolean
}

interface TimerContextType {
  timers: { [key: string]: TimerState }
  startTimer: (id: string) => void
  pauseTimer: (id: string) => void
  startCountdown: (id: string, duration: number) => void
}

const TimerContext = createContext<TimerContextType | undefined>(undefined)

export const TimerProvider: FC<any> = ({ children }) => {
  const [timers, setTimers] = useState<{ [key: string]: TimerState }>({})
  const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({})

  useEffect(() => {
    return () => {
      // Clear all intervals when the provider unmounts
      Object.values(intervalRefs.current).forEach((interval) => {
        if (interval) clearInterval(interval)
      })
    }
  }, [])

  const startTimer = (id: string) => {
    setTimers((prev) => ({
      ...prev,
      [id]: { time: prev[id]?.time ?? 0, isRunning: true }
    }))

    if (!intervalRefs.current[id]) {
      intervalRefs.current[id] = setInterval(() => {
        setTimers((prev) => ({
          ...prev,
          [id]: { time: prev[id]?.time + 1, isRunning: true }
        }))
      }, 1000)
    }
  }

  const pauseTimer = (id: string) => {
    setTimers((prev) => ({
      ...prev,
      [id]: { ...prev[id], isRunning: false }
    }))
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id]!)
      intervalRefs.current[id] = null
    }
  }

  const startCountdown = (id: string, duration: number) => {
    setTimers((prev) => ({
      ...prev,
      [id]: { time: duration, isRunning: true }
    }))

    if (!intervalRefs.current[id]) {
      intervalRefs.current[id] = setInterval(() => {
        setTimers((prev) => {
          const currentTime = prev[id]?.time ?? 0
          if (currentTime > 1) {
            return {
              ...prev,
              [id]: { time: currentTime - 1, isRunning: true }
            }
          } else {
            clearInterval(intervalRefs.current[id]!)
            intervalRefs.current[id] = null
            return {
              ...prev,
              [id]: { time: 0, isRunning: false }
            }
          }
        })
      }, 1000)
    }
  }

  return (
    <TimerContext.Provider value={{ timers, startTimer, pauseTimer, startCountdown }}>{children}</TimerContext.Provider>
  )
}

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext)
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider')
  }
  return context
}
