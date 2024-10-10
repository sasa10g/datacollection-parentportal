import { IAcquisitionSetup } from './IAcquisition'
import { ITargetBehaviorSetup } from './ITargetBehavior'
import { IParentGoalSetup } from './IParentGoal'

export interface DataCollectionState {
  acquisitions: Array<IAcquisitionSetup>
  targetBehaviors: Array<ITargetBehaviorSetup>
  parentGoals: Array<IParentGoalSetup>
}

export type DataCollectionAction =
  | { type: 'SET_ACQUISITIONS'; payload: any }
  | { type: 'SET_TARGET_BEHAVIORS'; payload: any }
  | { type: 'SET_PARENT_GOALS'; payload: any }

export enum DataCollectionType {
  Acquisition = 'Aquisition',
  TargetBehavior = 'Target Behavior',
  ParentGoal = 'Parent Goal'
}

export type DataCollectionTypes =
  | DataCollectionType.Acquisition
  | DataCollectionType.TargetBehavior
  | DataCollectionType.ParentGoal

export interface IntervalState {
  skipInterval: boolean
  behaviorOccurred: boolean
  timeLeft: number
  currentInterval: number
  redDotCount: number
  greenDotCount: number
  intervalHistory: string[]
}
