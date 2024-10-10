export interface ITimeEntryServices {
  Id: number
  AuthID: number
  MaximumHours: number
  ServiceType: string
  ProviderServiceRate: number
  TreatmentServiceId: number
  Active: boolean
  Allocation: string
  ASPStartDate: string // Consider using Date type if dates are handled as Date objects in your application
  TreatmentRequestId: number
  ServiceCode: string
  ServiceName: string
  AssessmentBillingCodeId: number
  BillingCodeId: number
  AuthStartDate: string // Consider using Date type if dates are handled as Date objects in your application
  AuthEndDate: string // Consider using Date type if dates are handled as Date objects in your application
  InsuranceCompany: string
  InsuranceCompanyId: number
  UnitsPerHour: number
  IsTeleHealth: boolean
  TotalRemaining?: number
}

// {
//   Id: 740612,
//   AuthID: 206182,
//   MaximumHours: 100,
//   ServiceType: 'Analyst',
//   ProviderServiceRate: 1,
//   TreatmentServiceId: 541495,
//   Active: true,
//   Allocation: 'Total',
//   ASPStartDate: '2024-06-25',
//   TreatmentRequestId: 207969,
//   ServiceCode: '97159PBS',
//   ServiceName: '3 Tier oversight 4 hours per month max BCaBA/PM oversight by a BCBA',
//   AssessmentBillingCodeId: 0,
//   BillingCodeId: 11967,
//   AuthStartDate: '2024-06-25',
//   AuthEndDate: '2026-06-01',
//   InsuranceCompany: 'Community Health Plan of Imperial Valley CA MediCal',
//   InsuranceCompanyId: 1220,
//   UnitsPerHour: 4,
//   IsTeleHealth: false
// }
