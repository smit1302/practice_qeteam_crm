// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, LineChartProps, axisClasses } from '@mui/x-charts'; // Import LineChartProps
// import Title from './Title.tsx';

// // Define the type for the data
// interface Data {
//   time: string;
//   amount?: number | null;
// }

// // Generate Sales Data
// function createData(time: string, amount?: number): Data {
//   return { time, amount: amount ?? null };
// }

// // Define the data array
// const data: Data[] = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00'),
// ];

// // Define the props type for the Chart component
// interface ChartProps {}

// const Chart: React.FC<ChartProps> = () => {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
//         <LineChart
//           dataset={data}
//           margin={{
//             top: 16,
//             right: 20,
//             left: 70,
//             bottom: 30,
//           }}
//           xAxis={[
//             {
//               scaleType: 'point',
//               dataKey: 'time',
//               tickNumber: 2,
//               tickLabelStyle: theme.typography.body2,
//             },
//           ]}
//           yAxis={[
//             {
//               label: 'Sales ($)',
//               labelStyle: {
//                 ...theme.typography.body1,
//                 fill: theme.palette.text.primary,
//               },
//               tickLabelStyle: theme.typography.body2,
//               max: 2500,
//               tickNumber: 3,
//             },
//           ]}
//           series={[
//             {
//               dataKey: 'amount',
//               showMark: false,
//               color: theme.palette.primary.light,
//             },
//           ]}
//           sx={{
//             [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
//             [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
//             [`& .${axisClasses.left} .${axisClasses.label}`]: {
//               transform: 'translateX(-25px)',
//             },
//           }}
//         />
//       </div>
//     </React.Fragment>
//   );
// };

// export default Chart;


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title.tsx';

// Define a custom type matching ChartsTextStyle
interface CustomChartsTextStyle {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fontStyle?: string;
  fill?: string;
  dominantBaseline?: 'auto' | 'baseline' | 'middle' | 'central' | 'text-before-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | undefined;
}

// Generate Sales Data
function createData(time: string, amount?: number | null) {
  return { time, amount: amount ?? null };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00'),
];

export default function Chart() {
  const theme = useTheme();

  // Define tick label style according to CustomChartsTextStyle
  const tickLabelStyle: CustomChartsTextStyle = {
    fontFamily: theme.typography.body2.fontFamily,
    // fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    fill: theme.palette.text.primary,
    dominantBaseline: 'auto', // or whatever suits your needs
  };

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              // tickLabelStyle,
            },
          ]}
          yAxis={[
            {
              label: 'Sales ($)',
              // labelStyle: {
              //   ...theme.typography.body1,
              //   fill: theme.palette.text.primary,
              // },
              // tickLabelStyle,
              max: 2500,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
