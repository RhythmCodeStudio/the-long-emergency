// export function MailinglistConfirmationEmailTemplate() {
//   return (
//     <div>
//       <h1 className="font-emergency">Welcome to The Long Emergency mailing list!</h1>
//       <p>Thanks for signing up. We will keep you posted on new music and shows.</p>
//       <p>
//         You can unsubscribe at any time by visiting your mailing-list
//         preferences.
//       </p>
//     </div>
//   );
// }

// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Tailwind,
//   Text,
// } from "react-email";

// export default function MailingListConfirmationEmailTemplate() {
//   return (
//     <Html>
//       <Head>
//         <style>
//           {`
//             @font-face {
//               font-family: "Emergency";
//               src: url("https://thelongemergency.com/fonts/emergency.ttf")
//                 format("truetype");
//               font-weight: 400;
//               font-style: normal;
//             }
//           `}
//         </style>
//       </Head>
//       <Preview>Welcome to The Long Emergency mailing list</Preview>

//       <Tailwind>
//         <Body className="bg-neutral-100 font-sans">
//           <Container className="mx-auto my-10 max-w-140 bg-white p-8">
//             {/* <Heading className="text-2xl font-bold text-black">
//               Welcome to The Long Emergency mailing list!
//             </Heading> */}

//             <Heading
//               style={{
//                 fontFamily: "'Emergency', Georgia, serif",
//                 fontWeight: 400,
//                 fontSize: "28px",
//                 color: "#000000",
//               }}>
//               Welcome to The Long Emergency mailing list!
//             </Heading>

//             <Text className="text-base leading-6 text-neutral-700">
//               Thanks for signing up. We will keep you posted on new music and
//               shows.
//             </Text>

//             <Text className="text-sm text-neutral-500">
//               You can unsubscribe at any time.
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// }

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

const baseUrl = process.env.BANDNAME_URL
  ? `https://${process.env.BANDNAME_URL}`
  : "";

export default function MailingListConfirmationEmailTemplate() {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
          `}
        </style>
      </Head>

      <Preview>Welcome to The Long Emergency mailing list</Preview>

      <Tailwind>
        <Body
          className="bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_58%)] font-sans w-full"
          style={{
            fontFamily: "'Special Elite', Georgia, serif",
            // fontWeight: 400,
          }}>
          <Container className="text-white">
            <Section className="my-4">
              <Row>
                <Column align="center">
                  <Link
                    href={`https://www.thelongemergency.com/`}
                    className="inline-block">
                    <Img
                      alt="The Long Emergency logo"
                      height="42"
                      src={`${baseUrl}/static/band-name-white.png`}
                    />
                  </Link>
                </Column>
              </Row>
              <Row>
                <Column align="center">
                  <Text className="text-center text-lg mt-0">
                    St. Louis, Missouri
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column align="center">
                  <table>
                    <tr>
                      <td className="px-6">
                        <Link
                          className="text-white [text-decoration:none]"
                          href="https://www.thelongemergency.com/about">
                          About
                        </Link>
                      </td>
                      <td className="px-6">
                        <Link
                          className="text-white [text-decoration:none]"
                          href="https://www.thelongemergency.com/music">
                          Music
                        </Link>
                      </td>
                      <td className="px-6">
                        <Link
                          className="text-white [text-decoration:none]"
                          href="https://www.thelongemergency.com/shows">
                          Shows
                        </Link>
                      </td>
                      <td className="px-6">
                        <Link
                          className="text-white [text-decoration:none]"
                          href="https://www.thelongemergency.com/contact">
                          Contact
                        </Link>
                      </td>
                    </tr>
                  </table>
                </Column>
              </Row>
            </Section>
            <Section>
              <Heading className="text-center text-xl">
                Welcome to The Long Emergency Mailing List!
              </Heading>
              <Text className="text-center text-lg">
                Thank you for signing up. We will keep you posted on new music
                and shows. Keep an eye on your inbox for updates.
              </Text>
              <Text className="text-center text-lg ">
                You can{" "}
                <Link
                  className="underline text-white"
                  href="https://www.thelongemergency.com/mailing-list?mode=remove">
                  unsubscribe
                </Link>{" "}
                at any time.
              </Text>
            </Section>
          </Container>
          <Img
            src="https://www.thelongemergency.com/images/kevcutout3.png"
            alt="The Long Emergency Logo"
            className="mx-auto mt-4 w-60"
          />
        </Body>
      </Tailwind>
    </Html>
  );
}
