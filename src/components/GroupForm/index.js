import React from 'react';
import { Input } from 'antd';
import { TextArea } from 'antd';
import { Button } from 'antd';
import './groupform.scss';


const GroupForm = () => (
  <form>
    <Input placeholder="Nom du groupe" />;
    <TextArea placeholder="Description du groupe" rows={4} />;
    <Button type="link">Valider</Button>
  </form>
);

export default GroupForm;
