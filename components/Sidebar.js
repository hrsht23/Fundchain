import React, { Component } from "react";
import { Menu, Sidebar, Segment, Icon, Header, Image } from "semantic-ui-react";
import { Link } from '../routes';

export default class SideMenu extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
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
}
