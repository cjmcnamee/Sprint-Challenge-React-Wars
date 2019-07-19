import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const CoolDiv = styled.div`
  border-top: 5px dotted black;
`;

export const CoolDiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const CoolH1 = styled.h1`
  font-size: 2rem;
  color: lightblue;
  text-shadow: 1px 1px 5px lightblue;
`;

export const CoolH2 = styled.h2`
  font-size: 1.2rem;
  color: white;
  text-shadow: 1px 1px 3px white;
`;

const Character = ({itemProp}) => {
  return (
    <CoolDiv>
      <CoolH1>{itemProp.name}</CoolH1>
      <CoolDiv2>
        <CoolH2>height: {itemProp.height}</CoolH2>
        <CoolH2>mass: {itemProp.mass}</CoolH2>
        <CoolH2>eye color: {itemProp.eye_color}</CoolH2>
        <CoolH2>skin color: {itemProp.skin_color}</CoolH2>
        <CoolH2>hair color: {itemProp.hair_color}</CoolH2>
      </CoolDiv2>
    </CoolDiv>
  )
}

export default Character;
