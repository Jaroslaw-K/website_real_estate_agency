import "./Statement.scss";
import StatementForm from "./StatementForm/StatementForm";

const Statement = (props) => {
  return (
    <div className="statement statement--styling">
      <div className="statement__background">
        <StatementForm statementAcceptedHandler={props.statementAcceptedHandler} />
      </div>
    </div>
  );
};

export default Statement;
