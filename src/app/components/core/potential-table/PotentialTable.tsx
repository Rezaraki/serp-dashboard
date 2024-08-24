import { Block } from "../../shared/Block";
import { Change } from "../../shared/change/Change";
import "./PotentialTable.scss";

const languages = {
  keyword: "کیورد",
  imp50: "میانگین IMP 50 روز آینده",
  imp90: "پیش بینی IMP 90 روز آینده",
};

type Props = {
  heading: string;
  data: {
    keyword: string;
    imp50: number;
    imp90: number;
    imp90Percent: number;
  }[];
};
export const PotentialTable = ({ data, heading }: Props) => {
  return (
    <Block heading={heading}>
      <table className="potential-table table table-borderless ">
        <thead>
          <tr>
            <th scope="col">{languages.keyword}</th>
            <th scope="col" className="imp50">
              <span>{languages.imp50}</span>
            </th>
            <th scope="col" className="imp90">
              <span>{languages.imp90}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.slice(0, 5)
            .map(({ keyword, imp50, imp90, imp90Percent }, i) => (
              <tr key={`${i}+${keyword}`}>
                <th scope="row" className="">
                  {keyword}
                </th>
                <td className="imp50">{imp50}</td>
                <td className="imp90">
                  (<Change percent={imp90Percent} />) {imp90}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Block>
  );
};
