import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    const items = this.props.items;
    let countItem = 0;
    items.forEach(item => {
      countItem = countItem + item.quantity;
    });
    return (
      <view>
        <Text>{countItem}</Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
      </view>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
