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
          panels={children}
          activeKey={activeKey}
          prefixCls={prefixCls}
          handleTabClicked={this.handleTabClicked}
        />
        <TabContent
          panels={children}
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
function TabNav({ activeKey, handleTabClicked, prefixCls, panels }) {
  const handleClick = (key) => {
    return () => {
      handleTabClicked(key);
    };
  };

  return (
    <ul className={`${prefixCls}-nav`}>
      {
        panels.map((panel) => {
          if (!panel) {
            return ;
          }

          const { order, tab } = panel.props;
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
  panels: PropTypes.node.isRequired
}


// Tab Content
function TabContent({ activeKey, prefixCls, panels }) {

  return (
    <div>
      {
        panels.map((panel) => {
          if (!panel) {
            return ;
          }
          
          const isActive = activeKey === panel.props.order;
          return React.cloneElement(panel, {
            isActive,
            prefixCls,
            key: panel.props.order
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
  panels: PropTypes.node.isRequired
};

export default Tabs;