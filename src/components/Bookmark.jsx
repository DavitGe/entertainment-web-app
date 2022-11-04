import React from "react";
import styled from "styled-components";
import { toggleBookmark } from "../reducers/movieReducer";
import { useDispatch } from "react-redux";

const Bookmark = ({ active, title }) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(toggleBookmark(title));
  };

  return (
    <Button onClick={buttonClickHandler}>
      {active ? (
        <Icon
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          active
          fill="#FFF"
        >
          <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" />
        </Icon>
      ) : (
        <Icon
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          active={false}
          stroke="#FFF"
        >
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke-width="1.5"
            fill="none"
          />
        </Icon>
      )}
    </Button>
  );
};

const Icon = styled.svg`
  transition: 0.2s;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  overflow: hidden;
  background-color: rgba(16, 20, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 16px;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    ${Icon} {
      stroke: #000;
      fill: none;
      transition: 0.2s;
      stroke-width: 1.5px;
    }
    transition: 0.2s;
  }
`;

export default Bookmark;
