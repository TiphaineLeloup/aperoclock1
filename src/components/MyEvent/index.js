import React from 'react';
import { Input, Button } from 'antd';
import './myevent.scss';


const MyEvent = () => {
  const { TextArea } = Input;

  return (
    <form>
      <Button type="link">Edition de l'évènement</Button>
      <Button type="link">Suppréssion de l'évènement</Button>
      <Input placeholder="Nom de l'évènement" />;
      <TextArea placeholder="Description de l'évènement" rows={4} />;
    </form>
  );
};

export default MyEvent;
