import styled from "styled-components";

const Board = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    flex: 1;
    min-height: 100px;
    text-align: center;
  }
`;

export default Board;
