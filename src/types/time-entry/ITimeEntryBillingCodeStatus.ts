export interface ITimeEntryBillingCodeStatus {
  billingId: number
  status: Status
  loading: boolean
  progress: number
  messages: Array<string>
  serviceCode: string
  timeRange: [any, any]
  title: string
}

type Status = 'pending' | 'submitted' | 'error'
