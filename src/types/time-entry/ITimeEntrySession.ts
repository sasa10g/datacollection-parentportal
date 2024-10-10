export interface ITimeEntrySessionPayload {
  Id: number // default
  startTime: string // start of session
  endTime: string // end of session
  clinicalNotes: string // notes for that billing code
  providerSignature: string // not for now
  recipientSignature: string // not for now
  recipientName: string // client name
  aspId: number // getting from billing codes (id)
  indirect: boolean // get from billing code details
  locationOfService: string // from billing details
  loggedInUser: string // from current user
  receivedOversight: boolean // from checkbox
  pendingDescription: boolean // if user does not submit notes we need to set it to true
  pendingSignature: boolean // true for now because we do not have signature
  reasonForVisit: string // will come from dropdown which will be populated from billing details
  test: number // default
  noInsert: number // default
  eVVId: number // default
  localTimeUTCDiff: number // default * not sure if needed to pass difference between local and UTC time
  telehealth: boolean // default
  providerUser: string // from current user
  billingCodeId: number // from billing code
  relatedSessionID: string //Telehealth Session ID GUID as example
  providerClientTimeOffsetMinutes: number // offset in hours from client time zone
  // sourceSystemId: uuid // Check --
}

export interface ITimeEntrySessionResponse {
  timeLogID: number
  validationResult: ValidationResult
}
interface ValidationResult {
  result: number
  counts: Count[]
  messages: Message[]
}

interface Count {
  informational: number
  warning: number
  error: number
}

interface Message {
  code: string
  severity: Severity
  message: string
  recommendationForUser: string
}

type Severity = 'Informational' | 'Warning' | 'Error'
