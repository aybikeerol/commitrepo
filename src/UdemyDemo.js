import React, { Component } from "react";

import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container } from "reactstrap";

class UdemyDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "Aybikemm"
    };
  }

  disabledCategory = () => {};
  enabledCategory = () => {};
  enabledCategory = () => {};

  render() {
    return (
      <Container>
        <CategoryList />
        <ProductList category={this.state.activeCategory} />
      </Container>
    );
  }
}

export default UdemyDemo;

/*Kategorilere enable eden olacak 
Kategorilere buton eklencek toggle butonu eklenecek
disabled edecek en son teke düşür  */
