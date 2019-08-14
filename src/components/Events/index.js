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
class Events extends React.Component {
  state = { visible: false };

  eventnameInput = React.createRef();

  descriptionInput = React.createRef();

  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Événements');
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const eventname = this.eventnameInput.current.state.value;
    const description = this.descriptionInput.current.state.value;
    const { dispatchEvent } = this.props;
    if (eventname && description) {
      dispatchEvent(eventname, description);
    }
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
    const { actualEvent, events } = this.props;

    const actualEventFull = events.find(event => (event.id === actualEvent));

    const { TextArea } = Input;

    return (
      <div id="events">
        <SelectSpecial showEvents />
        {
          actualEvent !== null && (
            <Card title={actualEventFull.name}>
              <p>{actualEventFull.description}</p>
            </Card>
          )
        }
        <Button type="primary" onClick={this.showModal}>
          Créer un événement
        </Button>
        <Modal
          title="Création d'un événement"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="Nom de l'événement" />
          <TextArea placeholder="Description de l'événement" rows={4} />
        </Modal>
      </div>
    );
  }
}

Events.propTypes = {
  actualEvent: PropTypes.number,
  events: PropTypes.array,
  dispatchNewTitle: PropTypes.func.isRequired,
  dispatchEvent: PropTypes.func.isRequired,
};

Events.defaultProps = {
  actualEvent: null,
  events: [],
};

// const EventCreate = Modal.create({ name: 'Event' })(Events);
// == Export
export default Events;
