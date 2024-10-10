import React, { useState, useEffect, useRef } from 'react'
import { CounterContainer, Count, CounterControls, ControlButton } from './Styled'
import { useContent } from '@/context'

interface ICounter {
  label?: string
  id: string
}

export const CounterSingleHorizontal = ({ label, id }: ICounter) => {
  const { counterCounts, setCounterCounts } = useContent()

  const increment = () => {
    const newCount = (counterCounts[id] || 0) + 1
    setCounterCounts({ ...counterCounts, [id]: newCount })
  }

  const decrement = () => {
    const newCount = Math.max((counterCounts[id] || 0) - 1, 0)
    setCounterCounts({ ...counterCounts, [id]: newCount })
  }

  return (
    <CounterContainer>
      <p>{label}</p>

      <CounterControls>
        <ControlButton onClick={decrement}>-</ControlButton>
        <ControlButton> {counterCounts[id] || 0}</ControlButton>
        <ControlButton onClick={increment}>+</ControlButton>
      </CounterControls>
    </CounterContainer>
  )
}
