import React from 'react';
import { Input } from 'antd';
import { TextArea } from 'antd';
import { Button } from 'antd';
import './eventform.scss';


const EventForm = () => (
  <form>
    <label htmlFor="eventName">
    Nom de l'évènement
      <Input type="text" placeholder="Ecrivez ici" />;
    </label>
    <label htmlFor="eventDescription">
    Description de l'évènement
      <TextArea placeholder="Ecrivez ici" rows={4} />;
    </label>
    <Button type="link">Valider</Button>
  </form>
);

export default EventForm;
