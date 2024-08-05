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
  border: 2px solid #dedede;
  border-radius: 5px;
  outline: none;
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
