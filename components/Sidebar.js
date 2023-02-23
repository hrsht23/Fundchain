import React, { Component } from "react";
import { Menu, Sidebar, Segment, Icon, Header, Image } from "semantic-ui-react";
import { Link } from '../routes';

export default ({visible}) => {
  // let state = { activeItem: "Home" };

  // const handleItemClick = (e, { name }) => state = { activeItem: name };

 
    return (
      <Sidebar
        as={Menu}
        animation="slide along"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Link route="/">
          <Menu.Item>
            <h1>Discount<br />Sales</h1>
          </Menu.Item>
        </Link>
        <Link route="/">
          <Menu.Item>
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link route="/discount">
          <Menu.Item>
            <Icon name="setting" />
            Discount
          </Menu.Item>
        </Link>
        <Menu.Item>
          <Icon name="rocket" />
          NFTs
        </Menu.Item>
        <Menu.Item>
          <Icon name="fire" />
          Promotions
        </Menu.Item>
      </Sidebar>
    );
  }

