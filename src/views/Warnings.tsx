import React, { useRef, useState } from 'react'

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
import { useAppSelector } from '../hooks'

const Warnings = () => {
  const refs = useRef([])
  const [currentWarning, setCurrentWarning] = useState({
    title: '',
    message: '',
  })
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const warnings = useAppSelector((state) => state.warnings.value)

  const handleDeleteOne = async (id) => {
    refs.current.forEach((element) => {
      if (element.id === id) {
        if (element.element === null) return
        element.element.style.transform = 'translateX(1000px)'
      }
    })
    setTimeout(() => {
      ;(async () => {
        const docRef = doc(db, 'warnings', id)
        await deleteDoc(docRef)
      })()
    }, 300)
  }

  const handleDeleteAll = async () => {
    refs.current.forEach((element) => {
      if (element.element === null) return
      element.element.style.transform = 'translateX(1000px)'
    })

    setTimeout(() => {
      warnings.warnings.forEach((warning) => {
        const docRef = doc(db, 'warnings', warning.id)
        deleteDoc(docRef)
      })
    }, 300)
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
            <>
              <h3>Warnings ⚠️</h3>
              <StyledUl>
                {warnings.warnings.map((warning) => (
                  <li
                    ref={(element) =>
                      refs.current.push({ element, id: warning.id })
                    }
                    key={warning.id}
                  >
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
            </>
          ) : (
            <h3>No warnings ⚠️</h3>
          )}
        </WarningsWrapper>
        <StyledButton onClick={handleDeleteAll}>Delete all</StyledButton>
      </Container>
    </OuterContainer>
  )
}

export default Warnings
