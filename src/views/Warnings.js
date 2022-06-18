import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import WarningDetails from 'components/medium/WarningDetails'

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import {
  OuterContainer,
  Container,
  SingleWarning,
  WarningsWrapper,
  StyledButton,
  StyledUl,
} from './Warnings.styles'

import Modal from '../components/large/Modal/Modal'
import useModal from '../components/large/Modal/useModal'

const Warnings = () => {
  const [currentWarning, setCurrentWarning] = useState({})
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const warnings = useSelector((state) => state.warnings.value)

  const handleDeleteOne = async (id) => {
    const docRef = doc(db, 'warnings', id)
    await deleteDoc(docRef)
  }

  const handleDeleteAll = async () => {
    warnings.warnings.forEach((warning) => {
      const docRef = doc(db, 'warnings', warning.id)
      deleteDoc(docRef)
    })
  }

  const handleOpenWarningDetails = (passedWarning) => {
    setCurrentWarning(passedWarning)
    handleOpenModal()
  }

  return (
    <OuterContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <WarningDetails warning={currentWarning} />
      </Modal>
      <Container>
        <WarningsWrapper>
          {warnings.warnings.length ? (
            <StyledUl>
              {warnings.warnings.map((warning) => (
                <li key={warning.id}>
                  <SingleWarning>
                    <h2
                      onClick={() =>
                        handleOpenWarningDetails({
                          title: warning.title,
                          message: warning.message,
                          id: warning.id,
                        })
                      }
                    >
                      {warning.title}
                    </h2>
                    <p>{warning.message}</p>
                  </SingleWarning>
                  <button
                    type="button"
                    onClick={() => handleDeleteOne(warning.id)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </StyledUl>
          ) : (
            <h3>No warnings</h3>
          )}
        </WarningsWrapper>
        <StyledButton onClick={handleDeleteAll}>Delete all</StyledButton>
      </Container>
    </OuterContainer>
  )
}

export default Warnings
