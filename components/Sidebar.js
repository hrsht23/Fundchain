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
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link route="/discount">
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Discount
          </Menu.Item>
        </Link>
        <Menu.Item as="a">
          <Icon name="camera" />
          NFTs
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Promotions
        </Menu.Item>
      </Sidebar>
    );
  }
}
