import "./disclaimer.scss";
import SubheaderMobile from "../../../Subheader/subheaderMobile";
import HeaderMobile from "../../../Header/headerMobile";
import FooterMobile from "../../../Footer/footerMobile";
import NavbarMobile from "../../../Navbar/navbarMobile";
import ScrollToTop from "../../../../components/scrollToTop";

const DisclaimerMobile = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderMobile />
      <SubheaderMobile />
      <div className="disclaimerWrapperMobile">
        <section className="disclaimerTextWrapperMobile">
          <h1>Disclaimer</h1>
          <br />
          <p>
            The Family Care Southwest website provides links to Internet sites
            maintained by third parties. Family Care Southwest does not operate
            or control the information, products, or services on these linked
            third-party sites. The materials on this Family Care Southwest
            website and the linked third-party sites are offered "as is" and
            without warranties of any kind, either express or implied.
            Information contained in the third-party sites may not reflect the
            opinions, recommendations, or practices of Family Care Southwest.
            <br />
            <br />
            All materials on the Family Care Southwest website are protected by
            federal and international copyright and trademark laws and are the
            property of Family Care Southwest and/or its affiliates. Except for
            personal use, no portion of the Family Care Southwest materials may
            be reprinted, republished, modified, reproduced, or distributed in
            any form without the express written permission of Family Care
            Southwest. <br />
            <br />
            These web pages and related web pages are intended to be a public
            resource of general information which is intended, but not promised
            or guaranteed, to be correct, complete, and up-to-date. Family Care
            Southwest does not intend that links on the web page be referrals or
            endorsements of linked entities. The use of the internet to transmit
            or store sensitive or confidential materials is discouraged.
            <br />
            <br /> The Family Care Southwest website is intended to provide
            information to assist you in accessing health care and is no a
            substitute for professional medical advice. Do not use information
            on this site to diagnose or treat a health condition or disease
            without consulting a qualified health care provider. If you are
            experiencing abnormal health symptoms of any kind, you are urged to
            contact your physician for professional medical advice as soon as
            possible. In the event of a medical emergency, dial 911, where a
            trained emergency dispatcher will handle your call and dispatch
            emergency personnel as necessary.
            <br />
            <br /> If this website is used to obtain names of health care
            providers from which you seek medical treatment, Family Care
            Southwest makes no representation(s) as to the qualifications of
            such provider(s) to respond to, or care for, your particular health
            care needs.
            <br />
            <br /> Family Care Southwest, its affiliates, and its sponsors are
            neither responsible nor liable for any direct, indirect, incidental,
            consequential, special, exemplary, punitive, or other damages
            arising out of or relating in any way to this site, site-related
            services, content or information contained herein, or any
            hyperlinked website. Your sole remedy for dissatisfaction with this
            site, site-related services, content, or information contained
            herein or on any hyperlinked website is to stop using the site,
            site-related services, content, information, or hyperlinked
            websites.
            <br />
            <br /> Family Care Southwest retains the right to send Family Care
            Southwest-related information to any website user.
          </p>
        </section>
      </div>
      <NavbarMobile />
      <FooterMobile />
    </>
  );
};

export default DisclaimerMobile;
