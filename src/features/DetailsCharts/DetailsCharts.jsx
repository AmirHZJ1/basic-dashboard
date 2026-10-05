import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { generateChartData } from "../../utils/home";
import CustomTooltip from "./components/CustomTooltip";

const DetailsCharts = () => {
  const chartData = generateChartData({
    productsLength: 44,
    usersLength: 444,
    adminsLength: 4,
    ticketsLength: 32,
  });
  return (
    <section className="panel chart-panel">
      <header className="panel-header">
        <h2>آمار کلی داشبورد</h2>
        <span className="badge success">به‌روزرسانی امروز</span>
      </header>
      <div
        style={{ width: "100%", height: 400, padding: "20px" }}
        className="chart"
      >
        <ResponsiveContainer width="100%" height={"100%"}>
          <BarChart dir="ltr" data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#019d79" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default DetailsCharts;
