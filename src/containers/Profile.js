/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Profile from 'src/components/Profile';

import { getUserInfos, changeViewProfile } from 'src/store/reducer';

const mapStateToProps = state => ({
  userData: state.userLoggedData,
  loggedIn: state.loggedIn,
  userInfos: state.publicUserInfos,
  viewProfile: state.viewProfile, 
});

const mapDispatchToProps = dispatch => ({
  handleGetUserInfos: () => dispatch(getUserInfos()),
  changeViewProfile: (currentView) => dispatch(changeViewProfile(currentView))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
