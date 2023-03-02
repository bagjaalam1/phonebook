import React from 'react';
import { Button } from 'reactstrap';
import { FaPencilAlt } from 'react-icons/fa';

const EditButtonComponent = (props) => {
  const handleClick = () => {
    console.log(`Edit item with id ${props.itemId}`);
  }

  return (
    <Button color="success" size="sm" onClick={handleClick}>
      <FaPencilAlt /> Edit
    </Button>
  );
}

export default EditButtonComponent;