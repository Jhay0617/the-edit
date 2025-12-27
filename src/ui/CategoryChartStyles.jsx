import styled from "styled-components";

export const ChartCard = styled.div`
  background: ${(props) => props.theme.container};
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.border};
  grid-column: span 2;
  min-height: 300px;
`;

export const Title = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 20px;
`;
