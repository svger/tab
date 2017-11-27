import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './style/index.less';

const defaultPrefixCls = 'cefc-cell';

/**
 * 表单列表组件
 * 
 * @example
 * <Cell>
 *   <Cell.Title>添加银行卡</Cell.Title>
 *   <Cell.Item>
 *     <Cell.Left text="选择银行" />
 *     <Cell.Right arrow>
 *       <span>请选择</span>
 *     </Cell.Right>
 *   </Cell.Item>
 *   <Cell.Item>
 *     <Cell.Left text="银行卡号" />
 *     <Cell.Right arrow>
 *       <input />
 *     </Cell.Right>
 *   </Cell.Item>
 * </Cell>
 */
export default function Cell({ prefixCls, children }) {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-inner`}>{children}</div>
    </div>
  );
}

Cell.defaultProps = {
  prefixCls: defaultPrefixCls
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  prefixCls: PropTypes.string.isRequired
};

// 标题
export function Title({ prefixCls, children }) {
  return (
    <div className={`${prefixCls}-title`}>{children}</div>
  );
}

Title.defaultProps = {
  prefixCls: defaultPrefixCls
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  prefixCls: PropTypes.string.isRequired
}


// 左标签/icon
export function Left({ text, icon, prefixCls }) {
  return (
    <div className={`${prefixCls}-left`}>
      {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
      <div className={`${prefixCls}-label`}>{text}</div>
    </div>
  );
}

Left.defaultProps = {
  prefixCls: defaultPrefixCls
};

Left.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  prefixCls: PropTypes.string.isRequired
};

// 右边内容
export function Right({ arrow, prefixCls, children }) {
  return (
    <div className={cns(`${prefixCls}-right`, { [`${prefixCls}-arrow`]: arrow })}>{children}</div>
  );
}

Right.defaultProps = {
  arrow: false,
  prefixCls: defaultPrefixCls
};

Right.propTypes = {
  arrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  prefixCls: PropTypes.string.isRequired
};

// 表单项
export function Item({ prefixCls, label, onClick, children }) {
  if (label) {
    return <label className={`${prefixCls}-item`} onClick={onClick}>{children}</label>
  }

  return (
    <div className={`${prefixCls}-item`} onClick={onClick}>{children}</div>
  );
}

Item.propTypes = {
  label: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  prefixCls: PropTypes.string.isRequired
};

Item.defaultProps = {
  onClick() {},
  prefixCls: defaultPrefixCls
};

Cell.Title = Title;
Cell.Left = Left;
Cell.Right = Right;
Cell.Item = Item;
