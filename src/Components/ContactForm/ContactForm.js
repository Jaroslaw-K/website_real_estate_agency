import { Fragment } from "react";
import { BrowserView, MobileView } from "react-device-detect";
// COMPONENTS
import ContactFormMobile from "./ContactFormMobile/ContactFormMobile";
import ContactFormDesktop from "./ContactFormDesktop/ContactFormDesktop";

const ContactForm = (props) => {
  return (
    <Fragment>
      <MobileView>
        <ContactFormMobile headerText={props.headerText} placeholderMessage={props.placeholderMessage} />
      </MobileView>
      <BrowserView>
        <ContactFormDesktop headerText={props.headerText} placeholderMessage={props.placeholderMessage} />
      </BrowserView>
    </Fragment>
  );
};

export default ContactForm;
