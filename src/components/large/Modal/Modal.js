import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { Button } from '../../small/Button'

export const ModalWrapper = styled(ReactModal)`
  padding: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;

  &:focus {
    outline: none;
  }

  p {
    margin-top: 25px;
    flex-grow: 1;
    inline-size: 600px;
    block-size: 200px;
    overflow-wrap: break-word;
  }

  h1 {
    inline-size: 600px;
    overflow-wrap: break-word;
    text-align: center;
  }
`

const StyledButton = styled(Button)`
  justify-content: end;
  :hover {
    background-color: ${({ theme: { colors } }) => colors.dark};
    color: ${({ theme: { colors } }) => colors.white};
  }
`

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <StyledButton type="button" onClick={handleClose}>
        Close
      </StyledButton>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal
