import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    withdraw: 4000,
    send: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    withdraw: 3000,
    send: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    withdraw: 2000,
    send: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    withdraw: 2780,
    send: 3908,
    amt: 2000,
  },
  {
    name: "May",
    withdraw: 1890,
    send: 4800,
    amt: 2181,
  },
  {
    name: "June",
    withdraw: 2390,
    send: 3800,
    amt: 2500,
  },
  {
    name: "July",
    withdraw: 3490,
    send: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    withdraw: 2000,
    send: 9800,
    amt: 2290,
  },
  {
    name: "Sept",
    withdraw: 2780,
    send: 3908,
    amt: 2000,
  },
  {
    name: "Oct",
    withdraw: 1890,
    send: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    withdraw: 2390,
    send: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    withdraw: 3490,
    send: 4300,
    amt: 2100,
  },
];

const PaymentChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="send"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="withdraw"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PaymentChart;
