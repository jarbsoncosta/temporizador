import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-800"]};
  gap: 1rem;
  padding: 2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Time = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Mono", monospace; 
  strong {
   color: #84cc16;
    font-size: 5.5rem;
    font-weight: bold;
  }
`;
export const InputsTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  label {
    display: flex;
    flex-direction: column;
  }
`;
export const TimeButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TimeInput = styled.input`
  width: 100%;
  height: 2.2rem;
  padding: 0 1rem;
  border-radius: 5px;
  border: 0;
  color: white;
  background: ${(props) => props.theme["gray-700"]};
`;
