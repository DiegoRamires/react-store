import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import Product from './Product';
import Title from './Title'

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map(product => {
                      return <Product
                        key={product.id}
                        product={product}
                      />
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;