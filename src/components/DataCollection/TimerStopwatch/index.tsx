import React, { useEffect, useRef } from 'react'
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons'
import { TimerContainer, TimerDisplayActive, TimerDisplayInactive, TimerButtonPause, TimerButtonResume } from './Styled'
import { useContent } from '@/context'

interface TimerStopwatchProps {
  id: string
}

export const TimerStopwatch: React.FC<TimerStopwatchProps> = ({ id }) => {
  const { timersElements, setTimersElements } = useContent()
  const timerState = timersElements[id] || { time: 0, isRunning: false, intervals: [] }
  const { time, isRunning, intervals } = timerState
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimersElements((prevTimers: any) => ({
          ...prevTimers,
          [id]: {
            ...prevTimers[id],
            time: (prevTimers[id]?.time ?? 0) + 1,
            isRunning: true
          }
        }))
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, id, setTimersElements])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const handleResumePause = () => {
    setTimersElements((prevTimers: any) => {
      const currentTimer = prevTimers[id] || { time: 0, isRunning: false, intervals: [] }
      let newIntervals = [...currentTimer.intervals]

      if (currentTimer.isRunning) {
        // When pausing, set the 'end' time of the last interval
        newIntervals = newIntervals.map((interval, index) =>
          index === newIntervals.length - 1 ? { ...interval, EndDate: new Date().toISOString() } : interval
        )
      } else {
        // When starting, add a new interval with a 'start' time
        newIntervals.push({ StartDate: new Date().toISOString(), EndDate: null })
      }

      return {
        ...prevTimers,
        [id]: {
          ...currentTimer,
          isRunning: !currentTimer.isRunning,
          intervals: newIntervals
        }
      }
    })
  }

  return (
    <TimerContainer>
      {isRunning ? (
        <TimerDisplayActive>{formatTime(time)}</TimerDisplayActive>
      ) : (
        <TimerDisplayInactive>{formatTime(time)}</TimerDisplayInactive>
      )}
      {isRunning ? (
        <TimerButtonPause onClick={handleResumePause}>
          <PauseOutlined /> PAUSE
        </TimerButtonPause>
      ) : (
        <TimerButtonResume onClick={handleResumePause}>
          <CaretRightOutlined /> RESUME
        </TimerButtonResume>
      )}
    </TimerContainer>
  )
}
