import { useState } from "react";
import styled from "styled-components";

const Headline = styled.p`
  font-size: 20px;
  margin: 1em 0;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
`;

const SliderItem = styled.div`
  width: 33.33%;
  margin: 5px 0;
`;

const SliderWrapper = styled.div`
  width: calc(100% - 20px);
  margin-top: 5px;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;

interface SliderProps {
  label: string;
  apply: Function;
  value: number;
}

const Slider = ({ label, apply, value }: SliderProps) => {
  return (
    <SliderItem>
      <label>
        {label} ({value})
      </label>
      <SliderWrapper>
        <SliderInput
          defaultValue={0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            apply(parseInt(e.target.value))
          }
          type="range"
          min="0"
          max="100"
        />
      </SliderWrapper>
    </SliderItem>
  );
};

interface PersonalitySlider {
  submit: Function;
}

export const PersonalitySlider = ({ submit }: PersonalitySlider) => {
  const [practical, setPractical] = useState<number>(0);
  const [caring, setCaring] = useState<number>(0);
  const [analytical, setAnalytical] = useState<number>(0);
  const [driven, setDriven] = useState<number>(0);
  const [artistic, setArtistic] = useState<number>(0);
  const [organized, setOrganized] = useState<number>(0);

  return (
    <>
      <Headline>Beskriv din personlighet med följande egenskaper</Headline>
      <MainWrapper>
        <Slider label="Praktisk" apply={setPractical} value={practical} />
        <Slider label="Omsorgsfull" apply={setCaring} value={caring} />
        <Slider label="Analytisk" apply={setAnalytical} value={analytical} />
        <Slider label="Driven" apply={setDriven} value={driven} />
        <Slider label="Konstnärlig" apply={setArtistic} value={artistic} />
        <Slider label="Ordningsam" apply={setOrganized} value={organized} />
      </MainWrapper>
      <button
        onClick={() => {
          submit({
            practical,
            caring,
            analytical,
            driven,
            artistic,
            organized,
          });
        }}
      >
        Klar
      </button>
    </>
  );
};
