export interface ITimeEntryUser {
  ID: number
  FullName: string
  Person: string
  Active: boolean
  Address: string
  Email: string
  City: string
  Region: string
  Zip: string
  Role: string
  LoginName: string
  Leadership: boolean
  Department: string
  DontText: number
  DontEmail: number
  AnalystLevel: string
  EmpStatus: string
  SPID: number
  State: string
  PBSLiveExtension: string
  Permissions: Permission[]
  AllowedAppVersions: AllowedAppVersion[]
}
interface Permission {
  Column: string
  Group: PermissionGroup[]
}

interface PermissionGroup {
  groupID: number
  groupName: string
}
interface AllowedAppVersion {
  applicationName: string
  versions: AppVersion[]
}

interface AppVersion {
  versionNumber: string
  authorized: number
}
