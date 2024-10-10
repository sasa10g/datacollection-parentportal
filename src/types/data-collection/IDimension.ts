export type DimensionTypes =
  | 'Cumulative Record'
  | 'Percentage'
  | 'Frequency'
  | 'Rate'
  | 'Partial Interval Recording'
  | 'Whole Interval Recording'
  | 'Duration'
  | 'Momentary Time Sample'
  | 'Permanent Record'
  | 'Latency'
  | 'Inter Response Time'

export enum DimensionType {
  CUMULATIVE_RECORD = 'Cumulative Record',
  PERCENTAGE = 'Percentage',
  FREQUENCY = 'Frequency',
  RATE = 'Rate',
  PARTIAL_INTERVAL_RECORDING = 'Partial Interval Recording',
  WHOLE_INTERVAL_RECORDING = 'Whole Interval Recording',
  DURATION = 'Duration',
  MOMENTARY_TIME_SAMPLE = 'Momentary Time Sample',
  PERMANENT_RECORD = 'Permanent Record',
  LATENCY = 'Latency',
  INTER_RESPONSE_TIME = 'Inter Response Time'
}
