import React from "react";
import { Html, Head, Body, Container, Heading, Text, Section } from "@react-email/components";

interface PropertyInquiryEmailProps {
  name?: string;
  phone: string;
  email?: string;
  otherFields?: Record<string, string>;
}

const PropertyInquiryEmail: React.FC<PropertyInquiryEmailProps> = ({ name = "N/A", phone, email = "N/A", otherFields }) => {
  const otherFieldsText = otherFields
    ? Object.entries(otherFields)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join("")
    : "";

  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f4",
          padding: "20px",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Heading as="h2" style={{ color: "#2c3e50", textAlign: "center" }}>
            New Property Inquiry - Aspire Centurian Park by Gaurs
          </Heading>
          <Text>
            Hello <strong>The Aspire Centurian Park by Gaurs Team</strong>,
          </Text>
          <Text>
            A new inquiry has been received from your website. Below are the
            details:
          </Text>

          <Section
            style={{
              backgroundColor: "#f8f9fa",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            {otherFieldsText && (
              <div dangerouslySetInnerHTML={{ __html: otherFieldsText }} />
            )}
          </Section>

          <Text>
            Please reach out to the client as soon as possible to assist with
            their real estate needs.
          </Text>

          <Text>Best Regards,</Text>
          <Text>Your Website System</Text>
          <Text>
            <a href="https://example.com/" style={{ color: "#3498db" }}>
              [Project website]
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default PropertyInquiryEmail;
