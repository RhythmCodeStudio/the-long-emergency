import { Heading, Text } from "react-email";
import EmailLayout from "./email-layout";

export default function ShowRequestResponseEmail() {
  return (
    <EmailLayout preview="Thank you for your show request!">
       <Heading
        className="text-center text-lg"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
        }}>Show Request Received</Heading>
      <Text
        className="text-center"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
          padding: "0 4rem",
        }}>Thank you for your show request! We will review the information and get back to you shortly.</Text>
    </EmailLayout>
  );
}