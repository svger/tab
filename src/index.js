import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import styles from './style/index.less';

const defaultPrefixCls = 'cefc-tabs';

class Tabs extends Component {
  constructor(props) {
    super(props);

    const { activeKey, defaultActiveKey } = this.props;

    this.state = {
      activeKey: activeKey || defaultActiveKey,
      preActiveKey: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { activeKey } = this.state;

    if (nextProps.activeKey !== activeKey ) {
      this.setState({
        activeKey: nextProps.activeKey,
        preActiveKey: activeKey
      });
    }
  }

  handleTabClicked = (nextActiveKey) => {
    const { activeKey } = this.state;

    if (nextActiveKey !== activeKey ) {
      this.setState({
        activeKey: nextActiveKey,
        preActiveKey: activeKey
      });

      this.props.onChange(nextActiveKey, activeKey);
    }
  }

  render() {
    const { activeKey } = this.state;
    const { prefixCls, children } = this.props;

    return (
      <div className={`${prefixCls}-tabs`}>
        <TabNav
          panes={children}
          activeKey={activeKey}
          prefixCls={prefixCls}
          handleTabClicked={this.handleTabClicked}
        />
        <TabContent
          panes={children}
          activeKey={activeKey}
          prefixCls={prefixCls}
        />
      </div>
    );
  }
}

Tabs.defaultProps = {
  prefixCls: defaultPrefixCls,
  onChange: () => {}
};

Tabs.propTypes = {
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onChange: PropTypes.func,
  prefixCls: PropTypes.string.isRequired,  
  children: PropTypes.node.isRequired
};

// Tab Nav
function TabNav({ activeKey, handleTabClicked, prefixCls, panes }) {
  const handleClick = (key) => {
    return () => {
      handleTabClicked(key);
    };
  };

  return (
    <ul className={`${prefixCls}-nav`}>
      {
        panes.map((pane) => {
          if (!pane) {
            return ;
          }

          const { order, tab } = pane.props;
          const navItemStyle = cns({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item--active`]: activeKey === order
          });

          return (
            <li
            className={navItemStyle}
            onClick={handleClick(order)}
            key={order}
            >
            {tab}
            </li>
          );    
        })
      }
    </ul>
  );
}

TabNav.defaultProps = {
  prefixCls: defaultPrefixCls
};

TabNav.propTypes = {
  activeKey: PropTypes.string,
  handleTabClicked: PropTypes.func,
  prefixCls: PropTypes.string.isRequired,  
  panes: PropTypes.node.isRequired
}


// Tab Content
function TabContent({ activeKey, prefixCls, panes }) {

  return (
    <div>
      {
        panes.map((pane) => {
          if (!pane) {
            return ;
          }
          
          const isActive = activeKey === pane.props.order;
          return React.cloneElement(pane, {
            isActive,
            prefixCls,
            key: pane.props.order
          })
        })
      }
    </div>
  );
}

TabContent.defaultProps = {
  prefixCls: defaultPrefixCls
};

TabContent.propTypes = {
  activeKey: PropTypes.string,
  prefixCls: PropTypes.string.isRequired,  
  panes: PropTypes.node.isRequired
};

export default Tabs;