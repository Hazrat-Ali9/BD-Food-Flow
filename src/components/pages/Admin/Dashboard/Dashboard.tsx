import { GrBusinessService } from "react-icons/gr";
import { MdOutlineEventSeat } from "react-icons/md";
import { TbTimelineEvent } from "react-icons/tb";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useGetProductsQuery } from "../../../../redux/features/productApi";

const Dashboard = () => {
  // Fetching data using custom hook
  const { data } = useGetProductsQuery("");

  // Define colors for the pie chart slices
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Define constant for converting degrees to radians
  const RADIAN = Math.PI / 180;

  // Function to render customized label for pie chart slices
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    // Calculate coordinates for the label position
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="mt-14 w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:space-y-0 space-y-5 text-[#ffffff]">
        <div className="bg-[#219ebc]  md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">
              All Supplies : {data?.length}
            </h3>
            <GrBusinessService className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#e76f51] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">Product Quantity</h3>
            <TbTimelineEvent className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#0B63E5] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">Product Category</h3>
            <MdOutlineEventSeat className="text-[30px]" />
          </div>
        </div>
      </div>
      {/* Responsive container for pie chart */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="quantity"
          >
            {data?.map((_, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
