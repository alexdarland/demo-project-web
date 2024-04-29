import { useState } from "react";
import styled from "styled-components";

const Headline = styled.p`
  font-size: 20px;
  margin: 1em 0;
`;

interface SliderProps {
  label: string;
  apply: Function;
}

const Slider = ({ label, apply }: SliderProps) => {
  return (
    <div>
      <input
        defaultValue={0}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          apply(parseInt(e.target.value))
        }
        type="range"
        min="0"
        max="100"
      />
      <label>{label}</label>
    </div>
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
      <Slider label="Praktisk" apply={setPractical} />
      <Slider label="Omsorgsfull" apply={setCaring} />
      <Slider label="Analytisk" apply={setAnalytical} />
      <Slider label="Driven" apply={setDriven} />
      <Slider label="Konstnärlig" apply={setArtistic} />
      <Slider label="Ordningsam" apply={setOrganized} />

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
