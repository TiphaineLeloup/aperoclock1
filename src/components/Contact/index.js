// == Import : npm
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './contact.scss';

const { Meta } = Card;

// == Import : local


// == Composant
const Contact = () => (
  <div id="contact">
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Rime Z. - Product owner" description="sarahconnor@gmail.com" />
    </Card>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Tiphaine L. - Project manager" description="sarahconnor@gmail.com" />
    </Card>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Gabriel AL. - Lead dev Front" description="sarahconnor@gmail.com" />
    </Card>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Anaïs B. - Lead dev Back" description="sarahconnor@gmail.com" />
    </Card>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Kevin B. - Scrum Master" description="sarahconnor@gmail.com" />
    </Card>
  </div>
);

// == Export
export default Contact;
