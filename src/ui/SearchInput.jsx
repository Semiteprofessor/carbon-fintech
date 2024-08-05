import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const StyledSearch = styled.div`
  position: relative;
`;

const SearchIcon = styled(FiSearch)`
  color: #dedede;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Input = styled.input`
  padding: 5px 50px 5px 5px;
  border: 3px solid #dedede;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: gray;
  width: 200px;
  transition: 1s ease-in-out;

  &:focus {
    outline: none;
    border: 3px solid #2b007a;
    transition: border 1s ease-in-out;
    transition: 1s ease-in-out;
    width: 300px;
  }
`;

const SearchInput = () => {
  return (
    <StyledSearch>
      <SearchIcon />
      <Input type="text" placeholder="Search..." />
    </StyledSearch>
  );
};

export default SearchInput;
