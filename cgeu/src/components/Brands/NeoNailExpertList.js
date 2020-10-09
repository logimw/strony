import React from "react";
import ListText from "../../constants/brandsTextList";

const NeoNailExpertList = () => {
  return (
    <ul>
      {ListText.map((liText, index) => {
        return <li key={index}>{liText.text}</li>;
      })}
    </ul>
  );
};
// Wcześniej lista była w komponencie ze stylami na dole, bo miał niestandardowy list-style
// Earlier ul was in styled component below due to customized list-style
// const TextListItem = styled.div`
//   ul li {
//     list-style: none;
//   }
// `;

export default NeoNailExpertList;
