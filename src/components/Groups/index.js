// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Modal,
  Input,
} from 'antd';

// == Import : local
import SelectSpecial from 'src/containers/SelectSpecial';


// == Composant
class Groups extends React.Component {
  state = { visible: false };

  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Groupes');
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { actualGroup, groups } = this.props;

    const actualGroupFull = groups.find(group => (group.id === actualGroup));

    const { TextArea } = Input;

    return (
      <div id="groups">
        <SelectSpecial showGroups />
        {
          actualGroup !== null && (
            <Card title={actualGroupFull.name}>
              <p>{actualGroupFull.description}</p>
            </Card>
          )
        }
        <Button type="primary" onClick={this.showModal}>
          Créer un groupe
        </Button>
        <Modal
          title="Création d'un groupe"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="Nom du groupe" />
          <TextArea placeholder="Description du groupe" rows={4} />
        </Modal>
      </div>
    );
  }
}

Groups.propTypes = {
  actualGroup: PropTypes.number,
  groups: PropTypes.array,
  dispatchNewTitle: PropTypes.func.isRequired,
};

Groups.defaultProps = {
  actualGroup: null,
  groups: [],
};

// == Export
export default Groups;
