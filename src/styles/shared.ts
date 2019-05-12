import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  justify-content: space-between;
`

const Copy = styled.p`
  font-size: ${(props) => props.size || '1rem'};
`

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export {
  Container,
  Copy,
  UnstyledList,
}
