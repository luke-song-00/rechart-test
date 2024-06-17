import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./App.css";

const data = [
  { name: "8주 전", uv: 6.3 },
  { name: "6주 전", uv: 6.3 },
  { name: "4주 전", uv: 6.3 },
  { name: "2주 전", uv: 6.24 },
];

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const { x, y, stroke, payload } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
//           {payload.value}
//         </text>
//       </g>
//     );
//   }
// }

interface TickProps {
  x: number;
  y: number;
  payload: { value: number };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomizedAxisTick(props?: any) {
  if (!props) {
    return null;
  }

  const { x, y, payload } = props as TickProps;

  console.log(x, y, payload);

  return (
    <g transform={`translate(${x - 10},${y - 11})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LineChart width={400} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <XAxis
            dataKey="name"
            padding={{ left: 30, right: 30 }}
            tickMargin={10}
          />
          <YAxis
            type="number"
            domain={[6.2, 6.4]}
            padding={{ top: 20, bottom: 20 }}
            tick={<CustomizedAxisTick />}
          />
          <Tooltip />
        </LineChart>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
