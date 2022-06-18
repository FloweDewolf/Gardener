import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/large/Navigation/Navigation'
import { ReactComponent as BlobSvg } from 'assets/blob.svg'
import { BlobContainer, Container } from './Template.styles'

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <BlobContainer>
        <BlobSvg />
      </BlobContainer>
      <Navigation />
      {children}
    </Container>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainTemplate
