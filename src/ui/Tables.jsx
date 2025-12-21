import styled from "styled-components";

export const TableContainer = styled.div`
  background: ${(props) => props.theme.container};
  border-radius: 24px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.border};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 16px;
    background: transparent; /* Let the individual cards stand out on mobile */
    border: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  /* 1. HIDE HEADERS ON MOBILE */
  thead {
    @media (max-width: 768px) {
      display: none;
    }
  }

  th {
    text-align: left;
    padding: 12px 20px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.textSecondary};
  }

  /* 2. TRANSFORM ROWS INTO CARDS */
  tr {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      background: ${(props) => props.theme.container};
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 20px;
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }
  }

  tr td {
    padding: 16px 20px;
    background: ${(props) => props.theme.body};
    border-top: 1px solid ${(props) => props.theme.border};
    border-bottom: 1px solid ${(props) => props.theme.border};
    font-size: 14px;

    /* Desktop Border Logic */
    &:first-child {
      border-left: 1px solid ${(props) => props.theme.border};
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    &:last-child {
      border-right: 1px solid ${(props) => props.theme.border};
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    /* 3. MOBILE CELL LAYOUT (Label: Value) */
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      border: none !important; /* Remove desktop borders */
      padding: 10px 0;
      border-bottom: 1px solid ${(props) => props.theme.border} !important;

      &:last-child {
        border-bottom: none !important;
        margin-top: 10px;
        justify-content: center;
        gap: 20px;
      }

      /* Use the 'data-label' attribute to show headers on mobile */
      &::before {
        content: attr(data-label);
        font-weight: 700;
        font-size: 10px;
        text-transform: uppercase;
        color: ${(props) => props.theme.textSecondary};
      }
    }
  }
`;

export const ActionButton = styled.button`
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => (props.$delete ? "#ff4d4d" : props.theme.textSecondary)};
  background: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.border};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    flex: 1; /* Make buttons equal width on mobile */
    justify-content: center;
  }
`;
