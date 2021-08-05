import React from 'react';
import {
  useParams,
  Link,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import ProductDetails from './ProductDetails.js';

export default function Product() {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);

  return (
    <>
      <Link to="/">Back home</Link>
      <h1>Product {params.id}</h1>
      <Link to={`${match.url}/details`}>See details</Link>
      <Switch>
        <Route path={`${match.path}/details`}>
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
}
