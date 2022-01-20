import styled from 'styled-components'

type TagTypes = {
  status: string,
  text: string
}

const Tag = ({status, text}:TagTypes) => {
  const TagStyled = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
    color: ${generateColor(status)?.color};
    height: 20px;
    padding: 0px 8px;
    background: ${generateColor(status)?.backgroundColor};
    border-radius: 24px;
  `
  return (
    <TagStyled>
      {text}
    </TagStyled >
  )
}

const generateColor = (status:string) => {
  if(status === 'success') {
    const successColors = {
      backgroundColor: '#E7FAE6',
      color: '#04BB00',
    }
    return successColors
  } else if(status === 'alert') {
    const alertColors = {
      backgroundColor: '#FAE6E6',
      color: '#FF0D0D',
    }
    return alertColors
  } else if(status === 'attention') {
    const attentionColors = {
      backgroundColor: '#FAF2E6',
      color: '#FF800B',
    }
    return attentionColors
  }
}

export default Tag