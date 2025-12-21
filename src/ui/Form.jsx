import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 11px;
    text-transform: uppercase;
    color: ${(props) => props.theme.textSecondary};
    letter-spacing: 1px;
  }

  input,
  select,
  textarea {
    padding: 14px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.border};
    background: transparent;
    color: ${(props) => props.theme.text};
    font-size: 14px;
    &:focus {
      border-color: ${(props) => props.theme.text};
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 16px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border-radius: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
export const FormHeader = styled.div`
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.border};

  h2 {
    font-size: 22px;
    font-weight: 800;
    color: ${(props) => props.theme.text};
    letter-spacing: -0.5px;
    margin: 0;
  }

  p {
    font-size: 13px;
    color: ${(props) => props.theme.textSecondary};
    margin-top: 5px;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
    }
  }
`;
