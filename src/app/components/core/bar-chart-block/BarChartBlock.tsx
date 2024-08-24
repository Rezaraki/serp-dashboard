import { ResponsiveBar } from "@nivo/bar";
import { Block } from "../../shared/Block";
import "./BarChartBlock.scss";
type Props = {};
const languages = {
  heading: "تقسیم رتبه ها در SERP",
};
const data = [
  { id: "A", value: 8 },
  { id: "B", value: 12 },
  { id: "C", value: 18 },
  { id: "D", value: 38 },
  { id: "E", value: 48 },
];

const BarChartBlock = (props: Props) => {
  return (
    <Block heading={languages.heading}>
      <div className="bar-chart-block">
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="id"
          margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
          padding={0.3}
          colors={"#8C9BFF"} // Set the default color to purple
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          label={(d) => String(d.value)} // Convert the value to a string
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          animate={true}
          borderRadius={5} // Adjust the value as needed for the desired roundness
          onClick={(data, event) => {
            // Handle click event
          }}
          onMouseEnter={(data, event) => {
            // Change the color of the hovered bar to red
            (event.target as HTMLElement).style.fill = "#6577FF";
          }}
          onMouseLeave={(data, event) => {
            // Reset the color of the hovered bar to the default purple
            (event.target as HTMLElement).style.fill = "#8C9BFF";
          }}
        />
      </div>
    </Block>
  );
};
export default BarChartBlock;
