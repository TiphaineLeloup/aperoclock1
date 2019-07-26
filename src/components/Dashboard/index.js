// == Import : npm
import React, { useState } from 'react';
import { Switch } from 'antd';

// == Import : local
import ListGroups from 'src/components/ListGroups';
import ListEvents from 'src/components/ListEvents';
import './dashboard.scss';

// == Composant
const Dashboard = () => {
  const VIEW_GROUPS = true;
  const VIEW_EVENTS = false;
  const [view, setView] = useState(VIEW_GROUPS);

  return (
    <div id="dashboard">
      <Switch
        checked={view}
        checkedChildren="Vue par Groupes"
        onChange={() => setView(!view)}
        unCheckedChildren="Vue par événements"
      />
      { view === VIEW_GROUPS ? <ListGroups /> : <ListEvents /> }
    </div>
  );
};

// == Export
export default Dashboard;
