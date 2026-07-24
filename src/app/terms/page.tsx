import { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Absolon Designs",
  description:
    "Terms and conditions for Absolon Designs services and the PB Content Intel Reddit application.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions (“Terms”) govern your use of websites,
        applications, and related services operated by Absolon Designs / CBHR
        (“we”, “us”, or “our”), including the PB Content Intel Reddit
        application and any connected automation tools.
      </p>

      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing or using our services, you agree to these Terms. If you do
        not agree, do not use the services.
      </p>

      <h2>2. Description of services</h2>
      <p>
        Our services may include portfolio websites, consulting deliverables,
        and software tools that analyze publicly available Reddit discussions
        to help create educational or marketing content insights. Outputs are
        informational and may be incomplete or inaccurate.
      </p>

      <h2>3. Eligibility and accounts</h2>
      <p>
        You are responsible for any credentials you use to access third-party
        platforms (including Reddit) and for complying with those platforms’
        terms and policies.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not misuse, disrupt, or attempt unauthorized access to our systems.</li>
        <li>Do not use the services for unlawful, harassing, or deceptive activity.</li>
        <li>
          Do not scrape, store, or redistribute content in ways that violate
          Reddit’s or other platforms’ rules.
        </li>
      </ul>

      <h2>5. Third-party services</h2>
      <p>
        Our tools may send data to third-party systems you configure (for
        example, workflow automation endpoints). We are not responsible for
        those third parties’ availability, security, or policies.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        Site design, branding, and original software remain our property unless
        otherwise agreed in writing. You retain rights to content you lawfully
        provide to us.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        Services are provided “as is” without warranties of any kind. We do not
        guarantee uninterrupted operation, specific business results, or error-free
        analysis.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for indirect,
        incidental, special, consequential, or punitive damages arising from your
        use of the services.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes
        take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:hello@absolondesigns.com">hello@absolondesigns.com</a>
        {" "}or via{" "}
        <a href="https://absolondesigns.com">absolondesigns.com</a>.
      </p>
    </LegalPage>
  );
}
