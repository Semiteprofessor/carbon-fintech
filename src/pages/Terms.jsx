import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 30px;
`;

const Number = styled.ul``;

const List = styled.li`
  font-size: 22px;
  font-weight: bold;
`;

const Details = styled.p`
  font-size: 18px;
`;

const Terms = () => {
  return (
    <Wrapper>
      <Heading as="h1">Terms and Conditions</Heading>
      <Number>
        <List>Introduction</List>
      </Number>

      <Details>
        Welcome to Carbon. These terms and conditions outline the rules and
        regulations for the use of Carbon's Website, located at
        <Link to="https://carbon.com"> Carbon website</Link>. By accessing this
        website we assume you accept these terms and conditions. Do not continue
        to use Carbon Fintech if you do not agree to take all of the terms and
        conditions stated on this page.
      </Details>

      <Number>
        <List>License</List>
      </Number>

      <Details>
        Unless otherwise stated, Carbon and/or its licensors own the
        intellectual property rights for all material on Carbon Fintech. All
        intellectual property rights are reserved. You may access this from
        Carbon Fintech for your own personal use subjected to restrictions set
        in these terms and conditions. You must not: Republish material from
        Carbon Fintech Sell, rent, or sub-license material from Carbon FIntech i
        Reproduce, duplicate, or copy material from Carbon Fintech Redistribute
        content from Carbon Fintech
      </Details>
    </Wrapper>
  );
};

export default Terms;
