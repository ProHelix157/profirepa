import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for profirepa.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Legal</div>
        <h1>Privacy Policy</h1>
      </div>
      <section className="wrap" style={{ paddingTop: 56, paddingBottom: 88 }}>
        <div className="prose">
          <p>
            This privacy policy discloses the privacy practices for profirepa.com and applies solely
            to information collected by this website.
          </p>
          <h2>Information collection, use, and sharing</h2>
          <p>
            We are the sole owners of the information collected on this site. We only have access to
            information that you voluntarily give us via our forms, email, or other direct contact.
            We will not sell or rent this information to anyone.
          </p>
          <p>
            We will use your information to respond to you regarding the reason you contacted us. We
            will not share your information with any third party outside of our organization, other
            than as necessary to fulfill your request.
          </p>
          <p>
            Unless you ask us not to, we may contact you in the future about specials, new products
            or services, or changes to this privacy policy.
          </p>
          <h2>Your access to and control over information</h2>
          <p>
            You may opt out of any future contact from us at any time. By contacting us via the
            phone number on this website ({site.phone}), you may at any time: see what data we have
            about you, if any; change or correct that data; have us delete it; or express any
            concern about our use of your data.
          </p>
          <h2>Security</h2>
          <p>
            We take precautions to protect your information. Information submitted through this
            website is transmitted over an encrypted (HTTPS) connection, and access to personally
            identifiable information is limited to employees who need it to perform a specific job.
          </p>
          <h2>Updates</h2>
          <p>Our privacy policy may change from time to time; all updates will be posted on this page.</p>
        </div>
      </section>
    </>
  );
}
