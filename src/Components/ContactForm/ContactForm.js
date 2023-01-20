import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { breaktPoint_900 } from "../../data/variables";
// COMPONENTS
import ContactFormMobile from "./ContactFormMobile/ContactFormMobile";
import ContactFormDesktop from "./ContactFormDesktop/ContactFormDesktop";

const ContactForm = (props) => {
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: breaktPoint_900 }) && <ContactFormMobile headerText={props.headerText} placeholderMessage={props.placeholderMessage} />}
      {!useMediaQuery({ maxWidth: breaktPoint_900 }) && <ContactFormDesktop headerText={props.headerText} placeholderMessage={props.placeholderMessage} />}
    </Fragment>
  );
};

export default ContactForm;
