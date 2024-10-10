export interface ITimeEntryClientTargetBehavior {
  BehaviorName: string
  Dimension: string
  CurrentStatus: string
  TopographicalDefinition: string
  BaselineLevel: string
  BaselineLevelDate: string
  CurrentLevel: string
  CurrentLevelDate: string
  BaselineIntensityLevel?: string
  BaselineIntensityLevelDate?: string
  CurrentIntensityLevel?: string
  CurrentIntensityLevelDate?: string
  Criteria: string
}
