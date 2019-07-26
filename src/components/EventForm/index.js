import React from 'react';
import { Input, Button } from 'antd';
import './eventform.scss';


const EventForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Input placeholder="Nom de l'évènement" />;
      <TextArea placeholder="Description de l'évènement" rows={4} />;
      <Button type="link">Création de l'évènement</Button>
    </form>
  );
};

export default EventForm;
