import type { ReactNode } from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface EmailLayoutProps {
  preview: string;
  children: ReactNode;
}

export default function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
          `}
        </style>
      </Head>

      <Preview>{preview}</Preview>

      <Tailwind>
        <Body className="bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_58%)] font-sans w-full">
          <Container className="w-full text-white">
            {/* Header */}
            <Section className="my-4">
              <Link href="https://www.thelongemergency.com/">
                <Img
                  alt="The Long Emergency logo"
                  src="cid:band-logo"
                  // width="240"
                  height="60"
                  className="mx-auto"
                />
              </Link>

              <Text
                className="mb-0 mt-0 text-center text-lg"
                style={{
                  fontFamily: "'Special Elite', Georgia, serif",
                }}>
                St. Louis, Missouri
              </Text>
            </Section>

            {/* Email-specific content */}
            <Section>{children}</Section>

            <Section className="mb-6">
              <table
                role="presentation"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                border={0}>
                <tbody>
                  <tr>
                    <td align="center">
                      <Button
                        href="https://www.thelongemergency.com/request-a-show"
                        style={{
                          backgroundColor: "#000000",
                          border: "2px solid #ffffff",
                          borderRadius: "999px",
                          color: "#ffffff",
                          display: "inline-block",
                          fontFamily: "'Special Elite', Georgia, serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "20px",
                          padding: "0px 16px",
                          textAlign: "center",
                          textDecoration: "none",
                          width: "14rem",
                        }}>
                        <Text className="my-2">Request a Show</Text>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>
            <Section>
              <table
                role="presentation"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                border={0}>
                <tbody>
                  <tr>
                    <td align="center">
                      <Button
                        href="https://www.thelongemergency.com/music"
                        style={{
                          backgroundColor: "#000000",
                          border: "2px solid #ffffff",
                          borderRadius: "999px",
                          color: "#ffffff",
                          display: "inline-block",
                          fontFamily: "'Special Elite', Georgia, serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "20px",
                          padding: "0px 16px",
                          textAlign: "center",
                          textDecoration: "none",
                          width: "14rem",
                        }}>
                        <Text className="my-2">
                          Listen to The Long Emergency
                        </Text>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Shared image */}
            <Section>
              <Img
                src="cid:kevin-image"
                alt="Kevin Long playing the guitar"
                width="240"
                className="mx-auto mt-4"
              />
            </Section>

            {/* Footer */}
            <Section
              className="text-center"
              style={{
                fontFamily: "'Special Elite', Georgia, serif",
              }}>
              <Img
                alt="The Long Emergency logo"
                src="cid:band-logo"
                // width="144"
                height="36"
                className="mx-auto"
              />

              <Text className="mb-2 mt-0 text-center text-white">
                St. Louis, Missouri
              </Text>

              <Link
                href="https://www.thelongemergency.com/"
                className="text-white underline">
                thelongemergency.com
              </Link>

              <Text className="mb-1 text-white">Booking:</Text>
              <Link
                href="mailto:booking@thelongemergency.com"
                className="text-white underline">
                booking@thelongemergency.com
              </Link>

              <Text className="mb-1 text-white">General Inquiries:</Text>
              <Link
                href="mailto:info@thelongemergency.com"
                className="text-white underline">
                info@thelongemergency.com
              </Link>

              <Text className="text-center text-gray-400 my-6">
                <Link
                  className="underline text-gray-400"
                  href="https://www.thelongemergency.com/mailing-list?mode=remove"
                  title="Unsubscribe from mailing list">
                  unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
