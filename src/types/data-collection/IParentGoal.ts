import { UUID } from 'crypto'
import { DimensionTypes } from './IDimension'

interface EntryRole {
  Id: string
  Name: string
}

export interface IParentGoalSetup {
  SetupId: string
  ClientId: number
  CreatedBy: string
  Dimension: DimensionTypes
  DimensionId: string
  EntriesCount: number
  EntryRoles: EntryRole[]
  Note: string
  Region: string
  Status: string
  StatusId: string
  ParentGoals: string
  Label: string
  TitleForXAxis: string
  TitleForXAxisId: string
  PromptLevels: object | null
}

export interface IParentGoalEntry {
  SetupId: UUID
  StartDate: Date
  EndDate: Date
  Entry: string
  Baseline: boolean
  PhaseChange: boolean
  PhaseChangeLabel: string | null
  EntryRoleId: object
}
