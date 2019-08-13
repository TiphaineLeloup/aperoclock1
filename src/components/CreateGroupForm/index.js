import React from 'react';
import { Input, Button } from 'antd';


const CreateGroupForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Button type="link">Suppression du groupe</Button>
      <Input placeholder="Nom du groupe" />;
      <TextArea placeholder="Description du groupe" rows={4} />;
    </form>
  );
};

export default CreateGroupForm;
