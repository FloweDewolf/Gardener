import React from 'react'
import { useSelector } from 'react-redux'

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

const Warnings = () => {
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

  return (
    <OuterContainer>
      <Container>
        <WarningsWrapper>
          {warnings.warnings.length ? (
            <StyledUl>
              {warnings.warnings.map((warning) => (
                <li key={warning.id}>
                  <SingleWarning>
                    <h2>{warning.title}</h2>
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
