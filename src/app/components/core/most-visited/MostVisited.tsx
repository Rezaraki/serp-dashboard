import { Block } from "../../shared/Block";
import "./MostVisited.scss";

const languages = {
  heading: "10 صفحه پر بازدید",
  address: "آدرس",
  traffic: "درصد ترافیک",
};

type Props = {
  data: { address: string; percent: number }[];
};

export const MostVisited = ({ data }: Props) => {
  return (
    <Block heading={languages.heading}>
      <table className="most-visited table table-borderless ">
        <thead>
          <tr>
            <th scope="col">{languages.traffic}</th>
            <th scope="col" className="address">
              {languages.address}
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(0, 10).map(({ address, percent }, i) => (
            <tr key={`${i}+${percent}`}>
              <th scope="row" className="percent">
                {percent}%
              </th>
              <td className="address">{address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Block>
  );
};
