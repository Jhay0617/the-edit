import styled from "styled-components";
import StatsCard from "../features/StatsCard";
import CategoryChart from "../features/CategoryChart";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(160px, auto);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const DashboardWrapper = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;
function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardGrid>
        <StatsCard />
        {/* 2. Middle Row: The Chart (takes 2 columns) */}
        <CategoryChart />

        {/* 3. Placeholder for another large card (e.g., Recent Orders) */}
        <div
          style={{
            gridColumn: "span 2",
            background: "rgba(0,0,0,0.02)",
            borderRadius: "24px",
            border: "1px dashed #adadad",
          }}
        />
      </DashboardGrid>
    </DashboardWrapper>
  );
}

export default Dashboard;
