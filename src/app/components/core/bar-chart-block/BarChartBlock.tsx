import { ResponsiveBar } from "@nivo/bar";
import { Block } from "../../shared/Block";
import "./BarChartBlock.scss";

type DataPoint = {
  id: string;
  value: number;
};

type Props = {
  data: DataPoint[];
};

const languages = {
  heading: "تقسیم رتبه ها در SERP",
};

const BarChartBlock = ({ data }: Props) => {
  return (
    <Block heading={languages.heading}>
      <div className="bar-chart-block">
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="id"
          margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
          padding={0.3}
          colors={"#8C9BFF"}
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
          label={({ value }) => `${value}%`}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="#FFFFFF"
          animate={true}
          borderRadius={5}
          onClick={(data, event) => {}}
          onMouseEnter={(data, event) => {
            (event.target as HTMLElement).style.fill = "#6577FF";
          }}
          onMouseLeave={(data, event) => {
            (event.target as HTMLElement).style.fill = "#8C9BFF";
          }}
        />
      </div>
    </Block>
  );
};

export default BarChartBlock;
