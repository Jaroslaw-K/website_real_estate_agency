import "./ContactFormMobile.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const ContactFormMobile = () => {
  const [userNameAndSurname, setUserNameAndSurname] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState();

  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH

  const userNameAndSurnameHandler = (event) => {
    setUserNameAndSurname(event.target.value);
  };
  const emailAddressHandler = (event) => {
    setEmailAddress(emailAddress);
  };
  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const messageHander = (event) => {
    setMessage(event.target.value);
  };
  const sumitFormHandler = (event) => {
    event.preventDefault();
    setUserNameAndSurname("");
    setEmailAddress("");
    setPhoneNumber("");
    setMessage("");
  };
  return (
    <form onSubmit={sumitFormHandler} className={darkMode ? "contactFormMobile contactFormMobile--dark" : "contactFormMobile contactFormMobile--bright"}>
      <div className="contactFormMobile__decorationTop">
        <h1 className="decorationTop__header">{languagePrimary ? "SKONTAKTUJ SIĘ Z NAMI" : " CONTACT US"}</h1>
      </div>
      <input type="text" value={userNameAndSurname} onChange={userNameAndSurnameHandler} className="contactFormMobile__input" placeholder={languagePrimary ? "IMIĘ I NAZWISKO*" : "NAME AND SURNAME*"} />
      <input type="text" value={emailAddress} onChange={emailAddressHandler} className="contactFormMobile__input" placeholder={languagePrimary ? "ADRES EMAIL*" : "EMAIL ADDRESS*"} />
      <input type="tel" value={phoneNumber} onChange={phoneNumberHandler} className="contactFormMobile__input" placeholder={languagePrimary ? "NUMER TELEFONU*" : "PHONE NUMBER*"} />
      <textarea type="text" value={message} onChange={messageHander} className="contactFormMobile__textarea" />
      <div className="contactFormMobile__checkboxContainer">
        <input type="checkbox" className="checkboxContainer__checkbox" required />
        <span className="checkboxContainer__clause">
          Phasellus sit amet euismod turpis. Nulla vel efficitur magna. Nam viverra dui non nunc maximus, sed aliquam risus ultricies. Integer cursus dolor metus, quis elementum nulla lacinia ut. Sed aliquam mi nec eros tincidunt dictum. Sed aliquet odio vel placerat fringilla. Quisque et pulvinar risus. Ut a tristique lectus. Ut facilisis justo nisl, a imperdiet lectus posuere sit amet. Aenean sodales tellus at sem lobortis interdum. Morbi congue mauris ut eros fermentum ullamcorper. Donec eu
          elit est. Etiam convallis fermentum laoreet. Curabitur dignissim ligula ultrices luctus iaculis.
        </span>
      </div>
      <div className="contactFormMobile__decorationBottom">
        <button className="decorationBottom__button">
          <span className="button__text">{languagePrimary ? "WYŚLIJ" : "SEND"}</span>
        </button>
      </div>
    </form>
  );
};

export default ContactFormMobile;
