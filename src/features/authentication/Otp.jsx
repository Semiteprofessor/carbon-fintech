import { useState } from "react";
import OtpInput from "react-otp-input";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 24px;
`;

const Image = styled.img`
  position: absolute;
  left: -17rem;
  bottom: -17rem;
`;

const Otp = () => {
  const [otp, setOtp] = useState("");
  return (
    <Wrapper>
      <Image src="./images/otp.png" />
      <Heading as="h1">Verify Email</Heading>
      <p>
        Enter the 6-digit OTP sent to your registered email or phone number.
      </p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          padding: "1rem 2rem",
          border: "2px solid gray",
          fontSize: 24,
          fontWeight: "bold",
        }}
      />
      <Button
        title="Verify OTP"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius={5}
      />
      <p>
        Didn't receive the OTP? <a href="#">Resend</a>
      </p>
    </Wrapper>
  );
};

export default Otp;
