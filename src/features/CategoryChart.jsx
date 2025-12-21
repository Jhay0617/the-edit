import { useMemo } from "react";
import { useInventory } from "../hooks/useInventory";
import { categoryCount } from "../utils/helpers";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartCard, Title } from "../ui/CategoryChartStyles";

function CategoryChart() {
  const { displayProducts } = useInventory();

  // 1. Transform your tally object into Recharts-friendly array
  const chartData = useMemo(() => {
    const stats = categoryCount(displayProducts);
    return Object.entries(stats).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));
  }, [displayProducts]);

  // 2. Monochromatic Colors
  const COLORS = ["#242424", "#4a4a4a", "#7a7a7a", "#adadad"];

  return (
    <ChartCard>
      <Title>Inventory Distribution</Title>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default CategoryChart;
