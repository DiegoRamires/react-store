import React, { Component } from 'react';
import { storeProducts } from '../data'
import Product from './Product';
import Title from './Title'

class ProductList extends Component {
  state = {
    products: storeProducts
  }

  render() {
    console.log(this.state.products)
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name="our" title="products" />
            </div>
          </div>
        </div>
        <Product />
      </>
    );
  }
}

export default ProductList;