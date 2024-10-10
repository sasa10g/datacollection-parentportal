import React from 'react'
import { Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { InfoCardContainer, InfoCardContent, InfoCardDescription, InfoCardHeader, TitleInitials } from './Styled'

interface IInfoCard {
  title: string
  titleTooltip?: string
  titleInitials?: string
  description?: string
  onlyText?: boolean
  noColumn?: boolean

  tooltip?: string
  content?: any
}

export const InfoCard = ({
  title,
  titleTooltip,
  titleInitials,
  description,
  tooltip,
  content,
  onlyText,
  noColumn
}: IInfoCard) => {
  return (
    <InfoCardContainer>
      <InfoCardHeader>
        <h3>
          <Tooltip placement='bottom' title={titleTooltip}>
            {title}
          </Tooltip>
          {tooltip && (
            <Tooltip placement='right' title={tooltip}>
              <span className='info-icon'>
                <InfoCircleOutlined />
              </span>
            </Tooltip>
          )}
          {titleInitials && <TitleInitials>{titleInitials}</TitleInitials>}
        </h3>
      </InfoCardHeader>
      <InfoCardDescription $onlyText={!!onlyText}>{description}</InfoCardDescription>
      <InfoCardContent $noColumn={!!noColumn}>{content}</InfoCardContent>
    </InfoCardContainer>
  )
}
