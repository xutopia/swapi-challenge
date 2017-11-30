import React from 'react';


const ModalContent = (props) => {
  return (
    <div>
      <h3>
        It appears that {props.selected} did not return any results. Please try a different character.
      </h3>
    </div>
  );
}



export default ModalContent;
