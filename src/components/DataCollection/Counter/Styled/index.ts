import styled from 'styled-components'

export const CounterContainer = styled.div<{ $single: boolean }>`
  display: flex;
  align-items: center;

  ${({ $single }) => ($single ? `width: 100%; justify-content: space-between;` : `flex-direction: column;`)}

  h4 {
    margin: 10px 0;
    font-size: 0.8em;
    color: ${({ theme }) => theme.dcCardSubtitleColor};
    cursor: pointer;
    opacity: 0.3;
  }
`

export const Count = styled.span`
  font-size: 2em;

  span {
    font-size: 0.5em;
    opacity: 0.5;
    margin-left: 5px;
  }
`

export const CounterControls = styled.div`
  display: flex;
  gap: 1px;
  margin: 10px 0 0 0;
`

export const ControlButton = styled.button`
  background-color: ${({ theme }) => theme.dcCardButtonBackground};
  color: ${({ theme }) => theme.dcCardButtonColor};
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  font-size: 1em;
  transition: ease-in-out 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.dcCardButtonHoverBackground};
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`
