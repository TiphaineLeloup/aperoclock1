import React from 'react';
import { Input, Button } from 'antd';


const CreateEventForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Button type="link">Suppression de l'événement</Button>
      <Input placeholder="Nom de l'événement" />;
      <TextArea placeholder="Description de l'événement" rows={4} />;
    </form>
  );
};

export default CreateEventForm;
