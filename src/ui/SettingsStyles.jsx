import styled from "styled-components";

export const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: 100px;
  }
`;

export const SettingsSection = styled.section`
  background: ${(props) => props.theme.container};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContactLink = styled.a`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
export const SectionHeader = styled.div`
  margin-bottom: 10px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.text};
  }
  p {
    font-size: 13px;
    color: ${(props) => props.theme.textSecondary};
    margin-top: 4px;
  }
`;
