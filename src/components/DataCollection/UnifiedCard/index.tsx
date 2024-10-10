import React from 'react'
import { Divider } from 'antd'
import { InfoCard } from '../Card'
import { Counter } from '../Counter'
import { CounterSingleHorizontal } from '../CounterSingleHorizontal'
import { IntervalCard } from '../IntervalCard'
import { Timer } from '../Timer'
import {
  DataCollectionType,
  DataCollectionTypes,
  DimensionType,
  DimensionTypes,
  IAcquisitionSetup,
  IParentGoalSetup,
  ITargetBehaviorSetup
} from '@/types'
import { TimerStopwatch } from '../TimerStopwatch'

interface UnifiedCardProps {
  category: DataCollectionTypes
  type: DimensionTypes
  title?: string
  titleTooltip?: string
  titleInitials?: string
  description?: string
  tooltip?: string
  onlyText?: boolean
  noColumn?: boolean
  promptLevels?: object | null
  data: IAcquisitionSetup | ITargetBehaviorSetup | IParentGoalSetup
}

export const UnifiedCard: React.FC<UnifiedCardProps> = ({
  category,
  type,
  title = 'Card',
  data,
  titleTooltip = '',
  titleInitials = '',
  description = '',
  tooltip = '',
  onlyText = false,
  noColumn = false,
  promptLevels = null
}) => {
  let content

  switch (type) {
    case DimensionType.CUMULATIVE_RECORD:
    case DimensionType.FREQUENCY:
    case DimensionType.RATE:
    case DimensionType.PERMANENT_RECORD:
      content = <Counter single data={data} id={data.SetupId} />
      break
    case DimensionType.DURATION:
      noColumn = true
      content = <Timer id={data.SetupId} />
      break
    case DimensionType.LATENCY:
    case DimensionType.INTER_RESPONSE_TIME:
      noColumn = true
      content = <TimerStopwatch id={data.SetupId} />
      break
    case DimensionType.PERCENTAGE:
      content = (
        <>
          <Counter label='INDEPENDENT' id={`${data.SetupId}-independent`} data={data} />
          <Counter label='PROMPTED' id={`${data.SetupId}-prompted`} promptLevels={promptLevels} data={data} />
          <Counter label='NO RESPONSE' id={`${data.SetupId}-no-response`} data={data} />
        </>
      )
      break
    case DimensionType.MOMENTARY_TIME_SAMPLE:
      titleInitials = 'MTS'
      content = <IntervalCard id={data.SetupId} />
      break
    case DimensionType.PARTIAL_INTERVAL_RECORDING:
      titleInitials = 'PI'
      content = <IntervalCard id={data.SetupId} />
      break
    case DimensionType.WHOLE_INTERVAL_RECORDING:
      titleInitials = 'WI'
      content = <IntervalCard id={data.SetupId} />
      break
    default:
      content = null
  }

  // Append intensity footer if the category is "Target Behavior" and HasIntensity is present
  if (category === DataCollectionType.TargetBehavior && (data as ITargetBehaviorSetup)?.HasIntensity) {
    content = (
      <>
        {content}
        <Divider />
        <CounterSingleHorizontal
          label={`Set intensity: ${(data as ITargetBehaviorSetup)?.TargetBehaviorIntensity || 'None'}`}
          id={`${data.SetupId}-intensity`}
        />
      </>
    )
  }

  return (
    <InfoCard {...{ title, titleTooltip, titleInitials, description, tooltip, onlyText, noColumn }} content={content} />
  )
}
