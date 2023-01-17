import { Fragment } from "react";
import { BrowserView, MobileView } from "react-device-detect";
// COMPONENTS
import ContactFormMobile from "./ContactFormMobile/ContactFormMobile";
import ContactFormDesktop from "./ContactFormDesktop/ContactFormDesktop";

const ContactForm = () => {
  return (
    <Fragment>
      <MobileView>
        <ContactFormMobile />
      </MobileView>
      <BrowserView>
        <ContactFormDesktop />
      </BrowserView>
    </Fragment>
  );
};

export default ContactForm;
