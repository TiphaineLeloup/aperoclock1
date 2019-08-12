// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Contact from 'src/components/Contact';


const mapStateToProps = state => ({
  contact: state.contact,
});

const mapDispatchToProps = {};

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
