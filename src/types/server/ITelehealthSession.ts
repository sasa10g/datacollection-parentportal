interface CCM {
  IsRecurring: boolean
  EmailCaregiver: boolean
  TextCaregiver: boolean
  SendDriveTime: boolean
  Location: string | null
  Attendee: string
  ClientID: number
  Description: string
  UTCDiff: number
  UserFullName: string | null
  ClientFullName: string | null
  AbsenceType: string | null
  CustomMessage: string | null
  TotalHours: number
  Billed: boolean
  AllDay: boolean
  MeetingLink: string | null
  Mandatory: boolean
  IsRegistered: boolean
  ContactPerson: string | null
  StreetAddress: string | null
  City: string | null
  State: string | null
  Zip: string | null
  TrainingCategory: string | null
  TrainerOrHostId: number
  TrainerOrHostName: string | null
  TrainerOrHostLogin: string | null
  Ticket: string | null
  clientName: string | null
}

interface RRule {
  byweekday: number[]
  freq: number
  interval: number
  dtstart: string
  until: string
}

export interface ITelehealthSession {
  id: number
  title: string
  start: string // Using ISO 8601 date strings
  end: string // Using ISO 8601 date strings
  rrule: RRule
  color: string
  category: string
  allDay: boolean
  exdate: string | null
  ccm: CCM
}

export type MeetingType = 'TELEHEALTH'

/*
{
  "id": 25018,
  "title": "Client Appointments Telehealth for ERTe",
  "start": "2024-08-10T08:24:00Z",
  "end": "2024-08-10T08:24:00Z",
  "rrule": {
      "freq": 2,
      "interval": 2,
      "byweekday": null,
      "dtstart": "2024-08-09T00:10:00Z",
      "until": "2024-08-22T01:10:00Z"
  },
  "color": "#c62828",
  "category": "telehealth",
  "allDay": false,
  "exdate": null,
  "ccm": {
      "IsRecurring": true,
      "EmailCaregiver": false,
      "TextCaregiver": false,
      "SendDriveTime": false,
      "Location": null,
      "Attendee": "pzztestrbt",
      "ClientID": 17069,
      "Description": "TestTest Desc",
      "UTCDiff": 2,
      "UserFullName": null,
      "ClientFullName": null,
      "AbsenceType": null,
      "CustomMessage": null,
      "TotalHours": 0,
      "Billed": false,
      "AllDay": false,
      "MeetingLink": null,
      "Mandatory": false,
      "IsRegistered": false,
      "ContactPerson": null,
      "StreetAddress": null,
      "City": null,
      "State": null,
      "Zip": null,
      "TrainingCategory": null,
      "TrainerOrHostId": 0,
      "TrainerOrHostName": null,
      "TrainerOrHostLogin": null,
      "Ticket": null
  }
}
*/
