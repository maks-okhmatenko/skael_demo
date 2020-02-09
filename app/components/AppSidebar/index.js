import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import Logo from '../Logo';
import { MAIN_MENU } from './constants';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const { SubMenu } = Menu;
const { Sider } = Layout;

const linkStyles = {
  color: 'inherit',
  width: '100%',
  display: 'block'
};


class AppSidebar extends React.Component {
  renderItemTitle = (menuItem, link) => (
    <div>
      {menuItem.icon ? <Icon type={menuItem.icon} /> : null}
      <Link style={linkStyles} to={link}>{menuItem.value}</Link>
    </div>
  );

  renderMenuItems = (items = [], parentLink = '') => {
    const { location } = this.props;
    const itemsToRender = items.length ? items : MAIN_MENU;

    return itemsToRender.map(item => {
      const link = `${parentLink}${item.link}`;
      const isMenuOpened = location.pathname.indexOf(item.key) !== -1;

      if (item.children) {
        return (
          <SubMenu key={link} isOpen={isMenuOpened} title={this.renderItemTitle(item, link)}>
            {this.renderMenuItems(item.children, item.link)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={link}>
          {this.renderItemTitle(item, link)}
        </Menu.Item>
      );
    });
  };

  render() {
    const { location } = this.props;
    const openedKey = `/${location.pathname.split('/')[1]}`;

    const menuProps = {
      theme: 'dark',
      defaultSelectedKeys: [location.pathname],
      defaultOpenKeys: [openedKey],
      mode: 'inline',
      selectedKeys: [location.pathname],
    };

    return (
      <Sider>
        <Logo />
        <Menu {...menuProps}>
          {this.renderMenuItems()}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(AppSidebar);
