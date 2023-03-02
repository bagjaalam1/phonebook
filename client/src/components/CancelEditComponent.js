import React from 'react';
import { Button } from 'reactstrap';
import { FaBan } from 'react-icons/fa';

const cancelEditComponent = ({ handleCancelEdit }) => {
  return (
    <Button color="warning" onClick={handleCancelEdit}>
      <FaBan /> Cancel
    </Button>
  );
};

export default cancelEditComponent;