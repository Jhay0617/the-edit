import styled from "styled-components";

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
    padding-bottom: 100px;
  }
`;

export const UserCard = styled.div`
  background: ${(props) => props.theme.container};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => props.theme.text};

    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  background: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
    margin-bottom: 15px;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const PageTitle = styled.h2`
  padding: 0 40px;
  margin-top: 30px;
  font-size: 28px;
  font-weight: 800;
  color: ${(props) => props.theme.text};
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    padding: 0 20px;
    font-size: 22px;
    text-align: center;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textSecondary};
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 4px 10px;
  }
`;
