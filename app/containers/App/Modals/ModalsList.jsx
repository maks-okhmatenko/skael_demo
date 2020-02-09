import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ModalsFactory from '../ModalsFactory';
import reducer from '../reducer';
import { selectModals } from '../selectors';
import { useInjectReducer } from '../../../utils/injectReducer';

const ModalsList = props => {
  useInjectReducer({ key: 'global', reducer });
  return (
    <div style={{ position: 'absolute' }}>
      {props.modals.map((modal) => {
        const modalComponent = ModalsFactory[modal.type](modal.props);

        return (
          <div key={modal.type}>
            {modalComponent}
          </div>
        )
      })}
    </div>
  );
};

ModalsList.defaultProps = {
  modals: [],
};

ModalsList.propTypes = {
  modals: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  modals: selectModals(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(withConnect)(ModalsList);
