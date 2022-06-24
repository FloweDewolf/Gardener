import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 100px;
  padding: 25px;
  border-radius: 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  animation: entry 0.3s ease-in-out;
`

export default Wrapper
