import styled from "styled-components";

const StyledStatsContent = styled.div`
  background-color: #600affc4;
  border-radius: 5px;
  position: relative;
  border: 2px solid red;
`;

const Image1 = styled.img`
  position: absolute;
  /* left: -2rem;
  bottom: -26em; */
`;

const Image2 = styled.img`
  position: absolute;
  /* right: -1rem; */
`;

const StatsContent = () => {
  return (
    <StyledStatsContent>
      <Image1 src="./images/dash1.png" />
      <Image2 src="./images/dash2.png" />
    </StyledStatsContent>
  );
};

export default StatsContent;
