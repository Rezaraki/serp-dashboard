import { formatNumber } from "@/utils/formatNumber";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Block } from "../../shared/Block";
import "./FollowNoFollow.scss";

const languages = {
  follow: "فالو",
  noFollow: "نوفالو",
  heading: "فالو vs نوفالو",
};

type Props = {
  noFollow: number;
  follow: number;
};
export const FollowNoFollow = ({ noFollow, follow }: Props) => {
  const options = {
    chart: {
      type: "pie",
      height: 235,
      width: 250,
      backgroundColor: "transparent",
      margin: [0, 0, 0, 0],
      spacing: [0, 0, 0, 0],
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [
          { name: languages.follow, y: follow, color: "#6576ff" },
          { name: languages.noFollow, y: noFollow, color: "#e5e9f2" },
        ],
        size: "85%",
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "{point.name}: {point.percentage:.1f} %",
          connectorEnabled: false,
        },
        startAngle: 90,
        size: "80%",
      },
    },
  };

  return (
    <Block heading={languages.heading}>
      <div className="follow-nofollow__container">
        <div className="follow-nofollow__chart-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="follow-nofollow__extras-container">
          <div>
            <strong>{languages.follow}</strong>
            <span>{formatNumber(follow)}</span>
          </div>
          <div>
            <strong>{languages.noFollow}</strong>
            <span>{formatNumber(noFollow)}</span>
          </div>
        </div>
      </div>
    </Block>
  );
};
