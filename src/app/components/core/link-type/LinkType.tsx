import { Block } from "../../shared/Block";
import { ProgressBar } from "../../shared/progress-bar/ProgressBar";
import "./LinkType.scss";

const languages = {
  heading: "نوع لینک",
  frame: "فریم",
  picture: "تصویر",
  form: "فرم",
  text: "نوشته",
};
type Props = {
  frame: number;
  picture: number;
  form: number;
  text: number;
};
export const LinkType = (props: Props) => {
  return (
    <Block heading={languages.heading}>
      <div className="link-type container-fluid">
        <div className="row">
          <div className="col">
            <div className="link-type__item">
              <span className="link-type__type">{languages.picture}</span>
              <ProgressBar progress={props.picture} mode="thick" />
              <span>{props.picture}%</span>
            </div>
          </div>
          <div className="col">
            <div className="link-type__item">
              <span className="link-type__type">{languages.form}</span>
              <ProgressBar progress={10} mode="thick" />
              <span>{props.form}%</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="link-type__item">
              <span className="link-type__type">{languages.text}</span>
              <ProgressBar progress={props.text} mode="thick" />
              <span>{props.text}%</span>
            </div>
          </div>
          <div className="col">
            <div className="link-type__item">
              <span className="link-type__type">{languages.frame}</span>
              <ProgressBar progress={props.frame} mode="thick" />
              <span>{props.frame}%</span>
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
};
