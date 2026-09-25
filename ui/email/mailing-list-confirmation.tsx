// import {
//   Body,
//   Button,
//   Column,
//   Container,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Tailwind,
//   Text,
// } from "react-email";

// // const baseUrl = process.env.SITE_URL
// //   ? `https://${process.env.SITE_URL}`
// //   : "";

// export default function MailingListConfirmationEmailTemplate() {
//   return (
//     <Html lang="en">
//       <Head>
//         <style>
//           {`
//             @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
//           `}
//         </style>
//       </Head>

//       <Preview>Welcome to The Long Emergency...</Preview>

//       <Tailwind>
//         <Body className="bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_58%)] font-sans w-full">
//           <Container className="text-white w-full">
//             <Section className="my-4">
//               <Row>
//                 <Column align="center">
//                   <Link
//                     href={`https://www.thelongemergency.com/`}
//                     className="inline-block">
//                     {/* <Img
//                       alt="The Long Emergency logo"
//                       height="60"
//                       src={`https://www.thelongemergency.com/images/email/band-name-white.png`}
//                     /> */}
//                     <Img
//                       alt="The Long Emergency logo"
//                       // width="240"
//                       height="60"
//                       src="cid:band-logo"
//                     />
//                   </Link>
//                 </Column>
//               </Row>
//               <Row>
//                 <Column align="center">
//                   <Text
//                     className="text-center text-lg -mt-2 mb-0"
//                     style={{
//                       fontFamily: "'Special Elite', Georgia, serif",
//                       fontWeight: 400,
//                     }}>
//                     St. Louis, Missouri
//                   </Text>
//                 </Column>
//               </Row>
//             </Section>
//             <Section>
//               <Heading
//                 className="text-center text-xl mt-0"
//                 style={{
//                   fontFamily: "'Special Elite', Georgia, serif",
//                   fontWeight: 400,
//                 }}>
//                 Welcome to The Long Emergency Mailing List!
//               </Heading>
//               <Text
//                 className="text-center text-lg"
//                 style={{
//                   fontFamily: "'Special Elite', Georgia, serif",
//                 }}>
//                 Thank you for signing up. Keep an eye on your inbox for all the
//                 latest from The Long Emergency.
//               </Text>
//             </Section>
//             <Section className="mb-6">
//               <table
//                 role="presentation"
//                 width="100%"
//                 cellPadding="0"
//                 cellSpacing="0"
//                 border={0}>
//                 <tbody>
//                   <tr>
//                     <td align="center">
//                       <Button
//                         href="https://www.thelongemergency.com/request-a-show"
//                         style={{
//                           backgroundColor: "#000000",
//                           border: "2px solid #ffffff",
//                           borderRadius: "999px",
//                           color: "#ffffff",
//                           display: "inline-block",
//                           fontFamily: "'Special Elite', Georgia, serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           lineHeight: "20px",
//                           padding: "0px 16px",
//                           textAlign: "center",
//                           textDecoration: "none",
//                           width: "14rem",
//                         }}>
//                         <Text className="my-2">Request a Show</Text>
//                       </Button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </Section>
//             <Section>
//               <table
//                 role="presentation"
//                 width="100%"
//                 cellPadding="0"
//                 cellSpacing="0"
//                 border={0}>
//                 <tbody>
//                   <tr>
//                     <td align="center">
//                       <Button
//                         href="https://www.thelongemergency.com/music"
//                         style={{
//                           backgroundColor: "#000000",
//                           border: "2px solid #ffffff",
//                           borderRadius: "999px",
//                           color: "#ffffff",
//                           display: "inline-block",
//                           fontFamily: "'Special Elite', Georgia, serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           lineHeight: "20px",
//                           padding: "0px 16px",
//                           textAlign: "center",
//                           textDecoration: "none",
//                           width: "14rem",
//                         }}>
//                         <Text className="my-2">
//                           Listen to The Long Emergency
//                         </Text>
//                       </Button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </Section>
//             <Section>
//               <Row>
//                 <Column align="center">
//                   <Img
//                     src="cid:kevin-image"
//                     alt="Kevin Long playing the guitar"
//                     width="240"
//                     style={{
//                       display: "block",
//                       margin: "16px auto 0",
//                     }}
//                   />
//                 </Column>
//               </Row>
//             </Section>

//             <Section className="text-center">
//               <table className="w-full">
//                 <tr className="w-full">
//                   <td align="center">
//                     {/* <Img
//                       alt="The Long Emergency logo"
//                       height="36"
//                       src={`https://www.thelongemergency.com/images/email/band-name-white.png`}
//                     /> */}
//                     <Img
//                       alt="The Long Emergency logo"
//                       // width="144"
//                       height="36"
//                       src="cid:band-logo"
//                     />
//                     <Text className="text-center text-white mt-0 mb-2">
//                       St. Louis, Missouri
//                     </Text>
//                     <Link
//                       title="Visit thelongemergency.com"
//                       href={`https://www.thelongemergency.com/`}
//                       className="inline-block text-white underline">
//                       thelongemergency.com
//                     </Link>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td align="center">
//                     <Text className="text-white mb-1">Booking:</Text>
//                     <Link
//                       title="Email The Long Emergency at booking@thelongemergency.com"
//                       href="mailto:booking@thelongemergency.com"
//                       className="mt-1 mb-0 font-semibold text-white underline leading-6">
//                       booking@thelongemergency.com
//                     </Link>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td align="center">
//                     <Text className="text-white mb-1">General Inquiries:</Text>
//                     <Link
//                       title="Email The Long Emergency at info@thelongemergency.com"
//                       href="mailto:info@thelongemergency.com"
//                       className="mt-1 mb-0 font-semibold text-white underline leading-6">
//                       info@thelongemergency.com
//                     </Link>
//                   </td>
//                 </tr>
//               </table>
//             </Section>
//             <Text className="text-center text-gray-400 mt-6">
//               <Link
//                 className="underline text-gray-400"
//                 href="https://www.thelongemergency.com/mailing-list?mode=remove"
//                 title="Unsubscribe from mailing list">
//                 unsubscribe
//               </Link>
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// }

import { Heading, Text } from "react-email";
import EmailLayout from "./email-layout";

export default function MailingListConfirmationEmail() {
  return (
    <EmailLayout preview="Welcome to The Long Emergency...">
      <Heading
        className="text-center text-lg"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
        }}>
        Welcome to The Long Emergency Mailing List!
      </Heading>

      <Text
        className="text-center"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
          padding: "0 4rem",
        }}>
        Thank you for signing up. Keep an eye on your inbox for all the latest
        from The Long Emergency.
      </Text>
    </EmailLayout>
  );
}
