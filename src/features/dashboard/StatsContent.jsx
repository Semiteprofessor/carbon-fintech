import styled from "styled-components";

const StyledStatsContent = styled.div`
  background-color: #600affc4;
  border-radius: 10px;
  position: relative;
  height: 16rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image1 = styled.img`
  position: absolute;
  left: -2rem;
  bottom: -2em;
`;

const Image2 = styled.img`
  position: absolute;
  right: -1rem;
  width: 7.5rem;
`;

const StatTitle = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  text-align: center;
`;

const StatValue = styled.h2`
  color: #ffffff;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;
const StatsContent = () => {
  return (
    <StyledStatsContent>
      <Image1 src="./images/dash1.png" />
      <Image2 src="./images/dash2.png" />
      <StatTitle>Wallet Ballance (NGN)</StatTitle>
      <StatValue>500,000</StatValue>
    </StyledStatsContent>
  );
};

export default StatsContent;
