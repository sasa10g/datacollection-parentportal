import { Switch, Progress } from 'antd'
import styled from 'styled-components'

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: -webkit-fill-available;
  gap: 10px;
`

export const ProgressContainer = styled.div`
  align-items: center;
  width: 100%;
`

export const IntervalNumber = styled.span`
  display: block;
  font-weight: normal;
  opacity: 0.5;
  font-size: 14px;
  float: right;
`

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SwitchLabel = styled.span`
  font-size: 16px;
  opacity: 0.8;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const SwitchToggle = styled(Switch)`
  margin-left: 15px;
`

export const IntervalHistory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.dcIntervalHistoryBackground};
  width: 280px;
  border-radius: 6px;
  padding: 2px 4px;
`

// background-color: ${({ theme }) => theme.dcCardBackground};
// color: ${({ theme }) => theme.dcCardColor};

export const HistoryDotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap; /* Prevent wrapping */
  flex-grow: 1; /* Allow the container to grow and fill available space */

  /* Hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

export const HistoryDot = styled.div<{ color: string }>`
  height: 10px;
  width: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 3px;
  flex-shrink: 0; /* Prevent shrinking */
`

export const DotCounter = styled.span`
  font-size: 12px;
  opacity: 0.5;
  letter-spacing: 1px;
  margin-left: 5px;
`

export const SlimProgressBar = styled(Progress)`
  width: 100%;
`
