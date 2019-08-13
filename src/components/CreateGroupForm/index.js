import React from 'react';
import { Input, Button } from 'antd';

// FORMULAIRE DE CREATION D'UN GROUPE

const CreateGroupForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Input placeholder="Nom du groupe" />;
      <TextArea placeholder="Description du groupe" rows={4} />;
      <Button type="submit">Création du groupe</Button>
    </form>
  );
};

export default CreateGroupForm;
