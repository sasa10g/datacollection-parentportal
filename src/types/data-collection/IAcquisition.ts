import { UUID } from 'crypto'
import { DimensionTypes } from './IDimension'

interface EntryRole {
  Id: string
  Name: string
}

export interface IAcquisitionSetup {
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
  ShortTermObjective: string
  ShortTermObjectiveId: string
  TitleForXAxis: string
  TitleForXAxisId: string
  Category: string | null
  Label: string
  PromptLevels: object | null
}

export interface IAcquisitionEntry {
  SetupId: UUID
  StartDate: Date
  EndDate: Date
  Entry: string
  Baseline: boolean
  PhaseChange: boolean
  PhaseChangeLabel: string | null
  EntryRoleId: UUID
  RawData: object
}
