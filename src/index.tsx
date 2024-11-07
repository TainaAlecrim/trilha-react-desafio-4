import React from 'react'; 
import styled from 'styled-components';
import ReactDOM from "react-dom/client";
import App from "./pages/Login";

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({ title, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {title}
  </StyledButton>
);

export default Button;

