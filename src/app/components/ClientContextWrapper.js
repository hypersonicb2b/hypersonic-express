import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import ReactContextWrapper from 'react-context-wrapper';

class ClientContextWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {routes} = this.props;
    return (
      <ReactContextWrapper data={window.APP_STATE || {}}>
        <Router history={createHistory()}>
          {routes}
        </Router>
      </ReactContextWrapper>
    );
  }
}
export default ClientContextWrapper;