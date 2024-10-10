import { UUID } from 'crypto'
import { DimensionTypes } from './IDimension'

interface EntryRole {
  Id: string
  Name: string
}

export interface ITargetBehaviorSetup {
  SetupId: string
  ClientId: number
  CreatedBy: string
  Dimension: DimensionTypes
  DimensionId: string
  EntriesCount: number
  EntryRoles: EntryRole[]
  HasIntensity: boolean
  TargetBehaviorIntensity: string
  Note: string
  Region: string
  Status: string
  StatusId: string
  TargetBehavior: string
  TargetBehaviorId: string
  TitleForXAxis: string
  TitleForXAxisId: string
  Definition: string
  PromptLevels: object | null
}

export interface ITargetBehaviorEntry {
  SetupId: UUID
  Intensity: number
  StartDate: Date
  EndDate: Date
  Entry: string
  Baseline: boolean
  PhaseChange: boolean
  PhaseChangeLabel: string | null
  EntryRoleId: object
}
