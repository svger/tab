import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import styles from '../style/TabPanel.less';

const defaultPrefixCls = 'cefc-tabs';

class TabPanel extends Component {
  
    render() {
      const { prefixCls, isActive } = this.props;
      const panelStyle = cns({
        [`${prefixCls}-panel`]: true,
        [`${prefixCls}-panel--hidden`]: !isActive,
      });
  
      return (
        <div className={panelStyle}>
        {this.props.children}
        </div>
      )
    }
  }
  
  TabPanel.defaultProps = {
    prefixCls: defaultPrefixCls  
  };
  
  TabPanel.PropTypes = {
    order: PropTypes.string,
    tab: PropTypes.string,
    isActive: PropTypes.bool,
    prefixCls: PropTypes.string.isRequired,  
  }

  export default TabPanel;