import React, { useState, useEffect } from 'react';
import {
  Switch,
  NavLink,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import useFetch from './useFetch.js';
import ProductDetailInfo from './ProductDetailInfo.js';
import ProductDetailNutrition from './ProductDetailNutrition.js';
import ProductDetailStorage from './ProductDetailStorage.js';

export default function ProductDetails() {
  const params = useParams();
  const match = useRouteMatch();
  const [product, setProduct] = useState();
  const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => setProduct(data))
      .catch((err) => console.error('failed to fetch product details', err));
  }, []);

  return (
    <div className="product-details-layout">
      {product && (
        <>
          <div>
            <h2>{product.name}</h2>
            <img
              src={product.image}
              width="125"
              height="125"
              className="product-details-image"
              alt={product.name}
            />
          </div>
          <div>
            <div className="tabs">
              <ul>
                <li>
                  <NavLink
                    exact
                    to={`/products/${params.id}`}
                    activeClassName="tab-active"
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/products/${params.id}/nutrition`}
                    activeClassName="tab-active"
                  >
                    Nutrition
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/products/${params.id}/storage`}
                    activeClassName="tab-active"
                  >
                    Storage
                  </NavLink>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path={`${match.url}`}>
                <ProductDetailInfo price={product.price} />
              </Route>
              <Route exact path={`${match.url}/nutrition`}>
                <ProductDetailNutrition nutrition={product.nutrition} />
              </Route>
              <Route exact path={`${match.url}/storage`}>
                <ProductDetailStorage storage={product.storage} />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}
