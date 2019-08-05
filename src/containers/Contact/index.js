// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Contact from 'src/components/Contact';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
