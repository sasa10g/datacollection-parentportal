import React, { useState, useEffect, useRef } from 'react'
import { Tooltip } from 'antd'
import {
  CardBody,
  DotCounter,
  HistoryDot,
  HistoryDotsContainer,
  IntervalHistory,
  IntervalNumber,
  ProgressContainer,
  SlimProgressBar,
  SwitchContainer,
  SwitchLabel,
  SwitchToggle
} from './Styled'
import { useContent, useTimer } from '@/context'
import { ordinalSuffix } from '@/utils'

interface IntervalCardProps {
  id: string
  tooltip?: string
  startInterval?: number
}

export const IntervalCard: React.FC<IntervalCardProps> = ({ id, tooltip, startInterval = 1 }) => {
  const red = '#d74c42'
  const green = '#5fcf27'
  const transparent = '#333333'

  const { intervalStates, setIntervalStates, dataCollectionIntervalsLength } = useContent()
  const { timers, startCountdown, pauseTimer } = useTimer()

  const savedState = intervalStates[id] || {
    skipInterval: false,
    behaviorOccurred: false,
    currentInterval: startInterval,
    redDotCount: 0,
    greenDotCount: 0,
    intervalHistory: []
  }

  const timerState = timers[id] || { time: dataCollectionIntervalsLength, isRunning: false }
  const { time: timeLeft, isRunning } = timerState

  const [skipInterval, setSkipInterval] = useState(savedState.skipInterval)
  const [behaviorOccurred, setBehaviorOccurred] = useState(savedState.behaviorOccurred)
  const [currentInterval, setCurrentInterval] = useState<number>(savedState.currentInterval)
  const [redDotCount, setRedDotCount] = useState<number>(savedState.redDotCount)
  const [greenDotCount, setGreenDotCount] = useState<number>(savedState.greenDotCount)
  const [intervalHistory, setIntervalHistory] = useState(savedState.intervalHistory)

  const historyContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only start the countdown if the timer is not already running
    if (!isRunning) {
      startCountdown(id, dataCollectionIntervalsLength)
    }
  }, [isRunning, id, dataCollectionIntervalsLength, startCountdown, timeLeft])

  // Handle logic when timeLeft reaches 0
  useEffect(() => {
    // console.log(`Timer ${id}: timeLeft is now ${timeLeft}`)

    if (timeLeft === 0) {
      const newColor = skipInterval ? transparent : !behaviorOccurred ? red : green

      if (newColor === red) setRedDotCount((count) => count + 1)
      if (newColor === green) setGreenDotCount((count) => count + 1)

      setIntervalHistory((history: any) => [...history, newColor])
      setCurrentInterval((interval) => interval + 1)
      setSkipInterval(false)
      setBehaviorOccurred(false)

      // Reset the countdown for the next interval
      startCountdown(id, dataCollectionIntervalsLength)

      // Update the context state
      setIntervalStates((prev: any) => ({
        ...prev,
        [id]: {
          skipInterval: false,
          behaviorOccurred: false,
          currentInterval: currentInterval + 1,
          redDotCount,
          greenDotCount,
          intervalHistory: [...intervalHistory, newColor]
        }
      }))
    }
  }, [
    timeLeft,
    skipInterval,
    behaviorOccurred,
    id,
    currentInterval,
    setIntervalStates,
    startCountdown,
    dataCollectionIntervalsLength
  ])

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTo({
        left: historyContainerRef.current.scrollWidth,
        behavior: 'smooth'
      })
    }
  }, [intervalHistory])

  return (
    <CardBody>
      <ProgressContainer>
        <IntervalNumber>{ordinalSuffix(currentInterval)} interval</IntervalNumber>
        <Tooltip title={`${timeLeft}s left`}>
          <SlimProgressBar percent={(timeLeft / dataCollectionIntervalsLength) * 100} showInfo={false} size={['', 2]} />
        </Tooltip>
      </ProgressContainer>
      <SwitchContainer>
        <Tooltip title={'Skip this interval'}>
          <SwitchLabel>Skip this interval</SwitchLabel>
        </Tooltip>
        <SwitchToggle checked={skipInterval} onChange={() => setSkipInterval(!skipInterval)} />
      </SwitchContainer>
      <SwitchContainer>
        <Tooltip title={'Behavior occurred in this interval'}>
          <SwitchLabel>Behavior occurred in this interval</SwitchLabel>
        </Tooltip>
        <SwitchToggle
          checked={behaviorOccurred}
          onChange={() => setBehaviorOccurred(!behaviorOccurred)}
          disabled={skipInterval}
        />
      </SwitchContainer>
      <IntervalHistory>
        <HistoryDotsContainer ref={historyContainerRef}>
          {intervalHistory.map((color: string, index: number) => (
            <HistoryDot key={index} color={color} />
          ))}
        </HistoryDotsContainer>
        <DotCounter>
          {greenDotCount}/{currentInterval - startInterval}
        </DotCounter>
      </IntervalHistory>
    </CardBody>
  )
}
