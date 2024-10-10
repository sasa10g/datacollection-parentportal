'use client'

import React, { useEffect } from 'react'
import { Tabs, TabsProps } from 'antd'
import { DataCollectionType, IAcquisitionSetup, IParentGoalSetup, ITargetBehaviorSetup } from '@/types'
import { useContent } from '@/context'
import { UnifiedCard } from '@/components'
import { apiRequestDataCollection } from '@/utils/apiConfigDataCollection'

const BehaviorPanel = () => {
  const {
    dataCollection: { acquisitions, targetBehaviors, parentGoals },
    dataCollectionDispatch
  } = useContent()

  useEffect(() => {
    const fetchAcquisitions = apiRequestDataCollection.get(`/Acquisitions/setups?clientId=${'24788'}`)
    const fetchTargetBehaviors = apiRequestDataCollection.get(`/TargetBehaviors/setups?clientId=${'24788'}`)
    const fetchParentGoals = apiRequestDataCollection.get(`/ParentGoals/setups?clientId=${'24788'}`)

    Promise.all([fetchAcquisitions, fetchTargetBehaviors, fetchParentGoals])
      .then(([acquisitionsResponse, targetBehaviorsResponse, parentGoalsResponse]) => {
        dataCollectionDispatch({ type: 'SET_ACQUISITIONS', payload: acquisitionsResponse.data })
        dataCollectionDispatch({ type: 'SET_TARGET_BEHAVIORS', payload: targetBehaviorsResponse.data })
        dataCollectionDispatch({ type: 'SET_PARENT_GOALS', payload: parentGoalsResponse.data })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })

    // Prevent closing tab when inside session
  }, [])

  const renderAquisition = () =>
    acquisitions.map((item: IAcquisitionSetup, index: number) => {
      return (
        <UnifiedCard
          key={item.SetupId}
          data={item}
          title={item.Label}
          category={DataCollectionType.Acquisition}
          type={item.Dimension}
          description={item.ShortTermObjective}
          tooltip={item.Note}
          promptLevels={item.PromptLevels}
        />
      )
    })

  const renderTargetBehaviors = () =>
    targetBehaviors.map((item: ITargetBehaviorSetup, index: number) => {
      return (
        <UnifiedCard
          key={item.SetupId}
          data={item}
          title={item.TargetBehavior}
          titleTooltip={item.Definition}
          type={item.Dimension}
          category={DataCollectionType.TargetBehavior}
          tooltip={item.Note}
          promptLevels={item.PromptLevels}
        />
      )
    })

  const renderParentGoals = () =>
    parentGoals.map((item: IParentGoalSetup, index: number) => {
      return (
        <UnifiedCard
          key={item.SetupId}
          data={item}
          title={item.Label}
          category={DataCollectionType.ParentGoal}
          type={item.Dimension}
          tooltip={item.Note}
          promptLevels={item.PromptLevels}
        />
      )
    })

  const items: TabsProps['items'] = [
    {
      key: '1',
      // icon: <RiseOutlined />,
      label: 'Acqusition',
      children: <>{renderAquisition()}</>
    },
    {
      key: '2',
      // icon: <FallOutlined />,
      label: 'Target Behaviors',
      children: <>{renderTargetBehaviors()}</>
    },
    {
      key: '3',
      // icon: <ScheduleOutlined />,
      label: 'Parent Goals',
      children: <>{renderParentGoals()}</>
    }
  ]

  return (
    <>
      <Tabs defaultActiveKey='1' centered items={items} />
    </>
  )
}

export default BehaviorPanel
