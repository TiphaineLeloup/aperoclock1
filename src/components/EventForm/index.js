import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import './eventform.scss';


const EventForm = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Input placeholder="Nom de l'évènement" />;
      <TextArea placeholder="Description de l'évènement" rows={4} />;
      <Button type="link">Valider</Button>
    </form>
  );
};

export default EventForm;
