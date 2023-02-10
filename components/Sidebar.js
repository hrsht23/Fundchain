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
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link route="/discount">
          <Menu.Item>
            <Icon name="gamepad" />
            Discount
          </Menu.Item>
        </Link>
        <Menu.Item>
          <Icon name="camera" />
          NFTs
        </Menu.Item>
        <Menu.Item>
          <Icon name="camera" />
          Promotions
        </Menu.Item>
      </Sidebar>
    );
  }

