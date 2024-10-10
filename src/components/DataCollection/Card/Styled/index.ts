import styled from 'styled-components'

/* InfoCard.css */
export const InfoCardContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${({ theme }) => theme.dcCardBackground};
  color: ${({ theme }) => theme.dcCardColor};
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
}
`

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;

  h3 {
    display: flex;
    align-items: center;
    margin: 0;
    position: relative;
  }

  p {
    font-size: 0.9em;
    color: #ccc;
  }

  .info-icon {
    margin-left: 15px;
    position: relative;
    display: inline-block;
    opacity: 0.5;
    font-size: 0.8em;
  }
`

export const TitleInitials = styled.span`
  margin-left: 15px;
  padding: 1px 5px;
  border-radius: 5px;
  background-color: #5fcf27;
  font-weight: bold;
  font-size: 0.8em;
`

export const InfoCardDescription = styled.p<{ $onlyText: boolean }>`
  margin: 0px 0 15px 0;

  ${({ $onlyText }) => !$onlyText && 'opacity: 0.3;'}
`

export const InfoCardContent = styled.div<{ $noColumn: boolean }>`
  ${({ $noColumn }) => !$noColumn && 'display: flex;'}

  justify-content: space-around;
  flex-wrap: wrap;
`
