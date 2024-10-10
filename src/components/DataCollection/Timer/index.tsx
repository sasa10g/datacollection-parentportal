// Timer.tsx
import React from 'react'
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons'
import { TimerContainer, TimerDisplayActive, TimerDisplayInactive, TimerButtonPause, TimerButtonResume } from './Styled'
import { useTimer } from '@/context'

interface TimerProps {
  id: string
}

export const Timer: React.FC<TimerProps> = ({ id }) => {
  const { timers, startTimer, pauseTimer } = useTimer()
  const timerState = timers[id] || { time: 0, isRunning: false }
  const { time, isRunning } = timerState

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const handleResumePause = () => {
    if (isRunning) {
      pauseTimer(id)
    } else {
      startTimer(id)
    }
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
