import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../components/large/Modal/Modal'
import WarningDetails from '../components/medium/WarningDetails'
import useModal from '../components/large/Modal/useModal'
import { Container, LastWarning, Wrapper } from './Home.styles'

const Home = () => {
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const warnings = useSelector((state) => state.warnings.value)

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [currentWarning, setCurrentWarning] = useState({})

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  const handleOpenWarningDetails = (passedWarning) => {
    setCurrentWarning(passedWarning)
    handleOpenModal()
  }

  return (
    <Container>
      <Wrapper>
        <h2>Hello! What&apos;s up?</h2>
        <p>There is 5 warnings to look</p>
      </Wrapper>
      {warnings.warnings[0] ? (
        <>
          <LastWarning>
            <p>
              Take a look at the last warning ⬇️
              <span>👀</span>
              <span>🙄</span>
            </p>
            <div>
              <h3
                onClick={() =>
                  handleOpenWarningDetails({
                    title:
                      warnings.warnings[warnings.warnings.length - 1].title,
                    message:
                      warnings.warnings[warnings.warnings.length - 1].message,
                  })
                }
              >
                {warnings.warnings[warnings.warnings.length - 1].title}
              </h3>
            </div>
          </LastWarning>
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            <WarningDetails warning={currentWarning} />
          </Modal>
        </>
      ) : null}
    </Container>
  )
}

export default Home
