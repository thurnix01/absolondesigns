import { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Absolon Designs",
  description:
    "Privacy policy for Absolon Designs services and the PB Content Intel Reddit application.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how Absolon Designs / CBHR (“we”, “us”, or
        “our”) collects, uses, and shares information when you use our websites
        and applications, including the PB Content Intel Reddit app.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> such as contact details or
          form submissions you send us.
        </li>
        <li>
          <strong>Usage data:</strong> basic technical logs (for example,
          timestamps, request metadata) needed to operate and debug services.
        </li>
        <li>
          <strong>Public platform content:</strong> when you run analysis tools,
          we may process publicly available Reddit posts and comments you
          request analysis for.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To operate, maintain, and improve our services</li>
        <li>To generate insights and deliver requested analysis results</li>
        <li>To communicate with you about support or service updates</li>
        <li>To protect against abuse and comply with legal obligations</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>
        We may share information with service providers that help us run the
        product (for example hosting, automation, or analytics providers) when
        necessary to fulfill a request you initiate. We do not sell personal
        information.
      </p>
      <p>
        If you connect an external webhook or automation endpoint, analysis
        results you generate may be sent to that endpoint under your control.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We retain information only as long as needed for the purposes described
        above, unless a longer period is required by law. Transient processing
        data may be discarded after a job completes.
      </p>

      <h2>5. Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        information. No method of transmission or storage is completely secure.
      </p>

      <h2>6. Your choices</h2>
      <p>
        You may contact us to request access, correction, or deletion of
        personal information we hold about you, subject to applicable law and
        technical limitations.
      </p>

      <h2>7. Children’s privacy</h2>
      <p>
        Our services are not directed to children under 13, and we do not
        knowingly collect personal information from children.
      </p>

      <h2>8. International processing</h2>
      <p>
        Information may be processed in Canada, the United States, or other
        locations where we or our providers operate.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy periodically. The effective year shown
        on this page will be updated when material changes are made.
      </p>

      <h2>10. Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href="mailto:hello@absolondesigns.com">hello@absolondesigns.com</a>
        {" "}or via{" "}
        <a href="https://absolondesigns.com">absolondesigns.com</a>.
      </p>
    </LegalPage>
  );
}
