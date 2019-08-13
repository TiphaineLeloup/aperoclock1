import React from 'react';
import { Input, Button } from 'antd';

// FORMULAIRE DE CREATION D'UN EVENEMENT

const CreateEventForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Input placeholder="Nom de l'événement" />;
      <TextArea placeholder="Description de l'événement" rows={4} />;
      <Button type="submit">Création de l'événement</Button>
    </form>
  );
};

export default CreateEventForm;
