// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';


const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = {};

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;
