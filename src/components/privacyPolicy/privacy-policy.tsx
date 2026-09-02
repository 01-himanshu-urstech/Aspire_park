"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  UserCheck,
  FileText,
  Scale,
  AlertCircle,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We may collect information that you voluntarily provide when you
            interact with the Aspire Centurian Park by Gaurs website, submit an
            enquiry, request project information, register for a site visit, or
            otherwise communicate with us.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number and other contact details provided through enquiry forms.
            </li>
            <li>
              <strong>Property Preferences:</strong> Property interests,
              preferred configuration, budget range, location preferences and
              other information relevant to your enquiry.
            </li>
            <li>
              <strong>Communication Information:</strong> Information shared
              through calls, emails, SMS, WhatsApp or other communications with
              our representatives.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device information, cookies and Website usage information.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">
            Information collected through the Website may be used for the
            following purposes:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>To respond to your property enquiries and requests.</li>
            <li>
              To provide project information, brochures, floor plans, pricing
              information and other requested details.
            </li>
            <li>
              To schedule calls, site visits, appointments or other services
              requested by you.
            </li>
            <li>
              To communicate relevant project updates and information relating
              to your enquiry.
            </li>
            <li>
              To improve our Website, services and overall user experience.
            </li>
            <li>
              To maintain Website security and prevent unauthorized activity.
            </li>
            <li>
              To comply with applicable legal and regulatory requirements.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Property Enquiries",
      content: (
        <p>
          If you submit an enquiry regarding{" "}
          <strong>Aspire Centurian Park by Gaurs</strong>, your contact
          information may be used by authorized sales, marketing or
          customer-support representatives to respond to your request. This
          may include communication through phone calls, SMS, email, WhatsApp
          or other applicable communication channels.
        </p>
      ),
    },
    {
      title: "Data Sharing & Disclosure",
      content: (
        <>
          <p className="mb-4">
            We do not intend to sell your personal information. Your
            information may be shared with authorized personnel and trusted
            service providers where reasonably necessary to operate the
            Website or respond to your enquiry.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Service Providers:</strong> CRM, hosting, analytics,
              communication, marketing and technical service providers.
            </li>
            <li>
              <strong>Authorized Representatives:</strong> Personnel involved
              in handling property enquiries and customer support.
            </li>
            <li>
              <strong>Legal Authorities:</strong> Government authorities,
              regulators, courts or law-enforcement agencies where required by
              applicable law.
            </li>
            <li>
              <strong>Business Transfers:</strong> Information may be
              transferred where necessary as part of a merger, acquisition,
              restructuring or transfer of business assets.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <>
          <p className="mb-4">
            We take reasonable technical and organizational measures to protect
            personal information against unauthorized access, misuse,
            alteration, disclosure or destruction.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Access to personal information is restricted to authorized
              personnel where appropriate.
            </li>
            <li>
              Reasonable security measures are implemented for information
              transmitted through the Website.
            </li>
            <li>
              Appropriate safeguards may be used by our service providers to
              protect information processed on our behalf.
            </li>
          </ul>

          <p className="mt-4">
            However, no method of Internet transmission or electronic storage
            can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      title: "Cookies & Tracking Technologies",
      content: (
        <p>
          Our Website may use cookies and similar technologies to improve
          browsing experience, understand Website traffic, analyze user
          interactions, remember preferences and measure marketing
          performance. You may control or disable cookies through your browser
          settings. Disabling certain cookies may affect some Website
          functionality.
        </p>
      ),
    },
    {
      title: "Your Rights & Choices",
      content: (
        <>
          <p className="mb-4">
            Subject to applicable law, you may have certain rights regarding
            your personal information, including:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Access:</strong> Request access to personal information
              held about you.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of information where
              legally applicable.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for certain
              communications where applicable.
            </li>
            <li>
              <strong>Opt Out:</strong> Request to stop receiving promotional
              communications.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Marketing Communications",
      content: (
        <p>
          If you provide your contact information through an enquiry form, you
          may receive communications related to your enquiry, project
          information, availability, updates, offers or other relevant
          information. You may request to stop receiving promotional
          communications at any time. We may still contact you where reasonably
          necessary to respond to an active enquiry or for administrative,
          legal or transactional purposes.
        </p>
      ),
    },
    {
      title: "Third-Party Links",
      content: (
        <p>
          Our Website may contain links to third-party websites, platforms or
          services. We are not responsible for the privacy practices, security
          or content of third-party websites. We recommend reviewing the
          applicable privacy policies before providing personal information to
          external websites.
        </p>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <p>
          We may retain personal information for as long as reasonably
          necessary to fulfil the purposes described in this Privacy Policy,
          respond to enquiries, maintain appropriate business records, comply
          with legal obligations, resolve disputes and enforce applicable
          agreements. Information that is no longer required may be securely
          deleted or anonymized, subject to applicable legal and regulatory
          requirements.
        </p>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our Website, services, technology, legal requirements or
          business practices. Any updated version will be published on this
          page with a revised "Last Updated" date. We encourage you to review
          this page periodically.
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <p className="mb-4">
            If you have any questions, concerns or requests regarding this
            Privacy Policy or the handling of your personal information,
            please contact us:
          </p>

          <div className="border border-[#c7a96b]/20 bg-[#d8c38f]/5 p-5">
            <p className="font-semibold text-[#0c3b35]">
              Aspire Centurian Park by Gaurs
            </p>

            <p className="mt-2">
              <strong>Location:</strong> Techzone-4, Greater Noida (W),
              Uttar Pradesh, India
            </p>

            <p className="mt-1">
              <strong>Email:</strong> Please refer to configured project
              contact details
            </p>

            <p className="mt-1">
              <strong>Phone:</strong> Please refer to configured project
              contact details
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f0e5] text-[#172c29]">
      {/* ===================================================== */}
      {/* HEADER                                                */}
      {/* ===================================================== */}

      <header className="border-b border-[#c7a96b]/20 bg-[#0c3b35] text-[#f7f0e5]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f0e5]/70 transition hover:text-[#d8c38f]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Aspire
          </Link>

          <div className="hidden text-right sm:block">
            <p className="font-display text-xl text-[#f7f0e5]">
              Aspire
            </p>

            <p className="text-[7px] uppercase tracking-[0.3em] text-[#d8c38f]">
              Centurian Park
            </p>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* HERO                                                  */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#0c3b35] pb-20 pt-16 text-[#f7f0e5] sm:pb-24 sm:pt-20 lg:pb-28">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#d8c38f]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#d8c38f]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d8c38f]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
              Privacy & Security
            </span>

            <span className="h-px w-10 bg-[#d8c38f]" />
          </div>

          <h1 className="mt-7 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            Privacy
            <br />
            <span className="text-[#d8c38f]">Policy</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#f7f0e5]/55">
            Your privacy matters to us. This policy explains how Aspire
            Centurian Park by Gaurs collects, uses, protects and manages
            information provided through this Website.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <ShieldCheck className="h-4 w-4 text-[#d8c38f]" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-[#f7f0e5]/45">
              Your Information · Your Privacy · Our Responsibility
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTENT                                               */}
      {/* ===================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-8">
          {/* Intro */}
          <div className="mb-12 flex gap-5 border-b border-[#c7a96b]/25 pb-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c7a96b]/30 bg-[#d8c38f]/10">
              <Lock className="h-5 w-5 text-[#0c3b35]" />
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0c3b35] sm:text-3xl">
                Your Privacy Matters
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#172c29]/55">
                We are committed to protecting the personal information you
                provide while interacting with the Aspire Centurian Park by
                Gaurs Website.
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-[#c7a96b]">
                Last Updated: [02/09/2026]
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="divide-y divide-[#c7a96b]/20 border-y border-[#c7a96b]/20">
            {policies.map((policy, index) => (
              <article
                key={policy.title}
                className="group py-7 sm:py-8"
              >
                <div className="flex gap-5 sm:gap-8">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#c7a96b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0c3b35]">
                      {policy.title}
                    </h3>

                    <div className="mt-3 text-sm leading-7 text-[#172c29]/65">
                      {policy.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ================================================= */}
          {/* IMPORTANT INFORMATION                             */}
          {/* ================================================= */}

          <div className="mt-14 border border-[#c7a96b]/30 bg-[#0c3b35] p-7 text-[#f7f0e5] sm:p-9 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8c38f]/30 bg-[#d8c38f]/10">
                <AlertCircle className="h-5 w-5 text-[#d8c38f]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d8c38f]">
                  Important Information
                </p>

                <h2 className="mt-3 font-display text-3xl text-[#f7f0e5]">
                  Please Read Carefully
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-5 border-t border-[#d8c38f]/15 pt-7">
              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                By submitting your information through this Website, you
                acknowledge that you have read and understood this Privacy
                Policy and consent to the collection and use of your
                information as described herein, subject to applicable law.
              </p>

              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                You may request to stop receiving promotional communications at
                any time. However, communications necessary to respond to an
                active enquiry or fulfil administrative, legal or transactional
                requirements may still be sent where applicable.
              </p>

              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                Project information, pricing, payment plans, specifications and
                other property-related information displayed on the Website may
                be subject to change. Please verify the latest official project
                documentation before making any purchase or investment
                decision.
              </p>
            </div>

            {/* Security */}
            <div className="mt-8 flex flex-col gap-4 border-t border-[#d8c38f]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#d8c38f]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/45">
                  Privacy & Data Protection
                </span>
              </div>

              <span className="font-mono text-xs text-[#d8c38f]">
                Aspire Centurian Park
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* LEGAL NOTE                                        */}
          {/* ================================================= */}

          <div className="mt-10 flex gap-4 border-l-2 border-[#c7a96b] pl-5">
            <Scale className="mt-1 h-4 w-4 shrink-0 text-[#c7a96b]" />

            <p className="text-xs leading-6 text-[#172c29]/50">
              This Privacy Policy is provided for information regarding the
              handling of personal information through this Website. In case
              of any conflict or discrepancy, applicable laws, regulatory
              requirements and legally binding agreements shall prevail.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* BOTTOM CTA                                            */}
      {/* ===================================================== */}

      <section className="border-t border-[#c7a96b]/20 bg-[#eee7d9] py-12">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="font-display text-2xl text-[#0c3b35] sm:text-3xl">
            Aspire Centurian Park
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#c7a96b]">
            Grand Luxury Residences · Greater Noida (W)
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#0c3b35]
                px-6
                py-3.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#d8c38f]
                transition-all
                hover:bg-[#123f39]
              "
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return to Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;