// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';


const mapStateToProps = state => ({
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = {};

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
