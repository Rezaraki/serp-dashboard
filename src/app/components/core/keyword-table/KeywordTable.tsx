import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Block } from "../../shared/Block";
import { Change } from "../../shared/change/Change";
import "./KeywordTable.scss";

const languages = {
  heading: "kanoon.ir",
  keyword: "کیورد",
  change: "change",
  impression: "impressions",
  imp: "imp",
  serp_features: "serp features",
  sf: "sf",
  keyword_dificulty: "keyword dificulty",
} as const;
const StyledTableCell = styled(TableCell)`
  border: none;
  background: transparent;
  background-color: transparent;
  &:first-of-type {
    text-align: start;
  }
`;

const StyledTableHeadCell = styled(TableCell)`
  border-top: 1px solid #dbdfea;
  border-bottom: 1px solid #dbdfea;
  background: transparent;
  &:first-of-type {
    text-align: start;
  }
  font-weight: bold;
`;

const StyledPaper = styled(Paper)`
  background-color: transparent;
  box-shadow: none;
  height: 555px;
`;
type Props = {
  data: {
    keyword: string;
    change: number;
    change_amount: number;
    impression: number;
    serp_features: number;
    keyword_dificulty: number;
  }[];
};
const getKeywordDifficultyClass = (difficulty: number) => {
  if (difficulty < 40) {
    return "green";
  } else if (difficulty >= 40 && difficulty <= 70) {
    return "yellow";
  } else {
    return "red";
  }
};
export const KeywordTable = ({ data }: Props) => {
  return (
    <Block heading={languages.heading}>
      <TableContainer component={StyledPaper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>
                {languages.keyword.toUpperCase()}
              </StyledTableHeadCell>

              <StyledTableHeadCell>
                {languages.keyword_dificulty.toUpperCase()}
              </StyledTableHeadCell>

              <StyledTableHeadCell>
                {languages.serp_features.toUpperCase()}
              </StyledTableHeadCell>

              <StyledTableHeadCell>
                {languages.impression.toUpperCase()}
              </StyledTableHeadCell>

              <StyledTableHeadCell>
                {languages.change.toUpperCase()}
              </StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.slice(0, 9).map((data, i) => (
              <TableRow key={i}>
                <StyledTableCell>{data.keyword}</StyledTableCell>
                <StyledTableCell>
                  <span
                    className={`keywod-table__key-dif ${getKeywordDifficultyClass(
                      data.keyword_dificulty
                    )}`}
                  >
                    {data.keyword_dificulty}
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  <span className="keywod-table__serp-feature">
                    {data.serp_features}
                  </span>
                </StyledTableCell>
                <StyledTableCell>{data.impression}</StyledTableCell>
                <StyledTableCell>
                  <Change percent={data.change_amount} /> {data.change}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Block>
  );
};
