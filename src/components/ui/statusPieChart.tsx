// StatusPieChart.tsx
import { VictoryPie, VictoryLegend, VictoryContainer } from "victory";

interface IStatusPieChartProps {
  totalStatusCounts: { [key: string]: number };
  companyName: string;
  loading?: boolean;
}

export const statusColors: { [status: string]: string } = {
  Concluído: "#add53d",
  "Concluído com atraso": "#f9c336",
  Pendente: "#619ffc",
  Atrasado: "#e6483a",
  Indefinido: "#dbdbda",
};

export const StatusPieChart: React.FC<IStatusPieChartProps> = ({
  totalStatusCounts,
  companyName,
  loading,
}) => {
  const statusLabels = Object.keys(totalStatusCounts || {});
  const statusData = Object.values(totalStatusCounts || {});

  const statusOrder = [
    "Concluído",
    "Concluído com atraso",
    "Pendente",
    "Atrasado",
    "Indefinido",
  ];

  const data = statusOrder
    .map((status) => ({
      x: status,
      y: totalStatusCounts[status] || 0,
      fill: statusColors[status],
    }))
    .sort((a, b) => a.y - b.y);

  const legendData = statusLabels.map((status) => ({
    name: status,
    symbol: { fill: statusColors[status] },
  }));

  return (
    <svg width={800} height={200}>
      <text
        x={400}
        y={20}
        textAnchor="middle"
        style={{ fontSize: "20px", fill: "white" }}
      >
        Estado das tarefas da empresa {companyName}
      </text>
      <VictoryPie
        standalone={false}
        width={400}
        height={400}
        startAngle={90}
        endAngle={-90}
        data={data}
        innerRadius={80}
        labels={({ datum }) => datum.y}
        labelPosition="centroid"
        labelRadius={110}
        padAngle={2}
        cornerRadius={5}
        style={{
          data: { fill: ({ datum }) => datum.fill },
          labels: { fill: "black", fontWeight: "bold" },
        }}
      />
      <VictoryLegend
        standalone={false}
        x={420}
        y={60}
        orientation="vertical"
        gutter={20}
        style={{ title: { fontSize: 20 }, labels: { fill: "white" } }}
        data={legendData}
      />
    </svg>
  );
};
