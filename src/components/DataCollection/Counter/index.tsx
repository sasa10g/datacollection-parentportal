import React, { useState, useEffect, useRef } from 'react'
import { Dropdown, Menu, Button, MenuProps } from 'antd'
import { CounterContainer, Count, CounterControls, ControlButton } from './Styled'
import { IAcquisitionSetup, IParentGoalSetup, ITargetBehaviorSetup } from '@/types'
import { useContent } from '@/context'

interface ICounter {
  id: string
  label?: string
  promptLevels?: object | null
  single?: boolean
  data?: IAcquisitionSetup | ITargetBehaviorSetup | IParentGoalSetup
}

export const Counter = ({ id, label, promptLevels, single, data }: ICounter) => {
  // const [count, setCount] = useState(0)
  // const [dropdownCounts, setDropdownCounts] = useState<Record<string, number>>({})
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { counterCounts, setCounterCounts, dropdownCounts, setDropdownCounts } = useContent()

  useEffect(() => {
    // Initialize dropdownCounts[id] if not present
    if (promptLevels && !dropdownCounts[id]) {
      const initialCounts: Record<string, number> = Object.values(promptLevels).reduce((acc, value) => {
        acc[value] = 0
        return acc
      }, {} as Record<string, number>)
      setDropdownCounts({ ...dropdownCounts, [id]: initialCounts })
    }
  }, [promptLevels, id, dropdownCounts, setDropdownCounts])

  const increment = () => {
    const newCount = (counterCounts[id] || 0) + 1
    setCounterCounts({ ...counterCounts, [id]: newCount })
  }

  const decrement = () => {
    const newCount = Math.max((counterCounts[id] || 0) - 1, 0)
    setCounterCounts({ ...counterCounts, [id]: newCount })
  }

  const handleDropdownIncrement = (type: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newDropdownCounts = {
      ...dropdownCounts[id],
      [type]: (dropdownCounts[id]?.[type] || 0) + 1
    }
    setDropdownCounts({ ...dropdownCounts, [id]: newDropdownCounts })
    setCounterCounts({
      ...counterCounts,
      [id]: Object.values(newDropdownCounts).reduce((acc: any, val) => acc + val, 0)
    })
  }

  const handleDropdownDecrement = (type: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (dropdownCounts[id]?.[type] > 0) {
      const newDropdownCounts = {
        ...dropdownCounts[id],
        [type]: dropdownCounts[id][type] - 1
      }
      setDropdownCounts({ ...dropdownCounts, [id]: newDropdownCounts })
      setCounterCounts({
        ...counterCounts,
        [id]: Object.values(newDropdownCounts).reduce((acc: any, val) => acc + val, 0)
      })
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false)
    }
  }

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownVisible])

  const menuItems: MenuProps['items'] = promptLevels
    ? Object.values(promptLevels).map((type) => ({
        key: type,
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ margin: '0 10px' }}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <div>
              <Button onMouseDown={(e) => handleDropdownDecrement(type, e)}>-</Button>
              <span style={{ margin: '0 10px' }}>
                {dropdownCounts[id]?.[type] || 0} {/* Display the correct count */}
              </span>
              <Button onMouseDown={(e) => handleDropdownIncrement(type, e)}>+</Button>
            </div>
          </div>
        )
      }))
    : []

  return (
    <CounterContainer $single={!!single}>
      {!single && <h4>{label}</h4>}
      <Count>
        {counterCounts[id] || 0}
        {single && <span> TIMES</span>}
      </Count>
      <CounterControls>
        {promptLevels ? (
          <div ref={dropdownRef}>
            <Dropdown
              menu={{ items: menuItems }}
              open={dropdownVisible}
              onOpenChange={setDropdownVisible}
              placement='top'
              trigger={['click']}
            >
              <ControlButton
                style={{ height: 'unset', borderRadius: '10px' }}
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                - / +
              </ControlButton>
            </Dropdown>
          </div>
        ) : (
          <>
            <ControlButton onClick={decrement}>-</ControlButton>
            <ControlButton onClick={increment}>+</ControlButton>
          </>
        )}
      </CounterControls>
    </CounterContainer>
  )
}
