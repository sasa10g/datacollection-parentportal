import styled from 'styled-components'

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`

export const TimerDisplayActive = styled.span`
  font-size: 24px;
`

export const TimerDisplayInactive = styled.span`
  font-size: 24px;
  opacity: 0.3;
`

export const TimerButtonResume = styled.button`
  background-color: #4baf4f;
  color: #fff;
  border: none;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: ease-in-out 0.1s;
  width: 130px;
  border-radius: 10px;

  &:hover {
    background-color: #76c278;
  }
`

export const TimerButtonPause = styled.button`
  background-color: #ee534f;
  color: #fff;
  border: none;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: ease-in-out 0.1s;
  width: 130px;
  border-radius: 10px;

  &:hover {
    background-color: #f27c7a;
  }
`
