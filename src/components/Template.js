import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/large/Navigation/Navigation'
import { ReactComponent as BlobSvg } from 'assets/blob.svg'
import { BlobContainer, Container } from './Template.styles'
import Widget from './large/Widget/Widget'

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <BlobContainer>
        <BlobSvg />
      </BlobContainer>
      <Navigation />
      {children}
      <Widget />
    </Container>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainTemplate
