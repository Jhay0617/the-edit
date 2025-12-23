import styled from "styled-components";

export const LoginWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
`;

export const LoginCard = styled.div`
  background: ${(props) => props.theme.container};
  border: 1px solid ${(props) => props.theme.border};
  padding: 48px;
  border-radius: 32px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    border-radius: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
  }
`;

export const LoginLogo = styled.h1`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.theme.text};
`;

export const LoginSubtitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 32px;
`;
