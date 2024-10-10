export interface ITimeEntryBillingCodeSplit {
  title: string
  billingId: number
  billingCodeId: number
  authorization: string
  rate: string
  serviceCode: string
  timeRange: [any, any]
}
