import "./StatementForm.scss";

const StatementForm = (props) => {
  return (
    <form className="statementForm statementForm--styling">
      <p className="statementForm__text">This website use local storage for store data about website language and it colors. By clicking button "ENTER" you agree for store data on your device related to mentioned purpouse. This Website is a demonstraction version and the information contained therein may be incorrect. </p>
      <p className="statementForm__text">For more information about the project, please visit the address:</p>
      <p className="statementForm__text">https://github.com/Jaroslaw-K/website_real_estate_agency </p>
      <p className="statementForm__text">Ta strona używa local storage (lokalnej pamięci masowej) w celu przechowywania danych odnośnie wersji językowej strony oraz jej kolorów. Klikając w przycisk "ENTER" wyrażasz zgodę na przechowywania danych na twoim urządzeniu dotyczących wspomnianego celu. Ta strona jest wersją demonstracyjną a zawarte w niej informacje mogą być nieprawdziwe. </p>
      <p className="statementForm__text">W celu dokładnego zapoznania się z projektem należy wejść na adres:</p>
      <p className="statementForm__text">https://github.com/Jaroslaw-K/website_real_estate_agency</p>
      <button onClick={props.statementAcceptedHandler} className="statementForm__button">
        ENTER
      </button>
    </form>
  );
};

export default StatementForm;
