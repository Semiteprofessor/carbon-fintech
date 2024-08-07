import styled from "styled-components";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaSimCard } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { GrChannel } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const StyledBillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3rem;
  margin-top: 1rem;
`;

const BillList = styled.div`
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 18.5rem;
  height: 18rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
`;

const Icon = styled.div``;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 12px;
  color: #646464;
  text-align: center;
`;
const BillItems = [
  {
    icon: <RiLightbulbFlashLine size={50} />,
    title: "Utility",
    description: "Pay your utility bills straight from your carbon account",
    background: "#ddfff8",
  },
  {
    icon: <FaSimCard size={50} />,
    title: "Airtime",
    description: "Pay your utility bills straight from your carbon account",
    background: "#ECA2FE5E",
  },
  {
    icon: <TbWorldBolt size={50} />,
    title: "Internet",
    description: "Pay your utility bills straight from your carbon account",
    background: "#62FC485E",
  },
  {
    icon: <GrChannel size={50} />,
    title: "Cable",
    description: "Pay your utility bills straight from your carbon account",
    background: "#7B98FE5E",
  },
  {
    icon: <MdOutlineSubscriptions size={50} />,
    title: "Netflix",
    description: "Pay your utility bills straight from your carbon account",
    background: "#F85F5F5E",
  },
  {
    icon: <RiHotelFill size={50} />,
    title: "Hotels",
    description: "Pay your utility bills straight from your carbon account",
    background: "#eaed8e",
  },
];
const BillContent = () => {
  return (
    <StyledBillList>
      {BillItems.map((item, index) => (
        <BillList key={index} style={{ backgroundColor: item.background }}>
          <Icon>{item.icon}</Icon>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </BillList>
      ))}
    </StyledBillList>
  );
};

export default BillContent;
