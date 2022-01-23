import './TerroristGroups.css'
import { ResponsiveLine } from '@nivo/line'
import { groupsData } from './groupsData'
import { colorMap, theme } from '../../../theme'

export function TerroristGroups() {
  return (
    <div className="groups-line">
      <ResponsiveLine
        data={groupsData}
        theme={bigTheme}
        margin={{ top: 50, right: 30, bottom: 70, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 12,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 56,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 12,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -70,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        enableGridY={false}
        colors={[colorMap.lightYellow, colorMap.orange, colorMap.lightRed, colorMap.red, colorMap.darkRed]}
        lineWidth={1}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
          {
            anchor: 'top-left',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -40,
            itemsSpacing: 8,
            itemDirection: 'left-to-right',
            itemWidth: 180,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  )
}

const bigTheme = JSON.parse(JSON.stringify(theme))
bigTheme.axis.ticks.text.fontSize = 16
bigTheme.legends.text.fontSize = 16
bigTheme.axis.legend.text.fontSize = 16
