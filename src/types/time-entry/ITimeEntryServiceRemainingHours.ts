export interface ITimeEntryServiceRemainingHours {
  ASPID: number
  BillingCodeID: number
  DOS: string
  Allocation: string
  TotalFrom: string
  TotalThrough: string
  TotalMaxHours: number
  TotalUsed: number
  TotalRemaining: number
  TotalRemainingMessage: string
  PeriodName: string
  PeriodFrom: string
  PeriodThrough: string
  PeriodMaxHours: number
  PeriodUsed: number
  PeriodRemaining: number
  PeriodRemainingMessage: string
}

// {
//     "ASPID": 740612,
//     "BillingCodeID": 11967,
//     "DOS": "2024-08-09",
//     "Allocation": "Total",
//     "TotalFrom": "2024-06-25",
//     "TotalThrough": "2026-06-01",
//     "TotalMaxHours": 100.00,
//     "TotalUsed": 0.00,
//     "TotalRemaining": 99.75,
//     "TotalRemainingMessage": "There are 99.75 total hours remaining between Jun 25, 2024 and Jun 01, 2026.",
//     "PeriodName": "Total",
//     "PeriodFrom": "2024-06-25",
//     "PeriodThrough": "2026-06-01",
//     "PeriodMaxHours": 100.00,
//     "PeriodUsed": 0.00,
//     "PeriodRemaining": 99.75,
//     "PeriodRemainingMessage": "You have 99.75 hours remaining between Jun 25, 2024 and Jun 01, 2026."
// }
