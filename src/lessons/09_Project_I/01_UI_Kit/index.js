import React from 'react';
import { render } from 'react-dom';
import Link from './Link';
import Button from './Button';
import Container from './Container';
import Input from './Input';

function App() {
  return (
    <>
      <Container>
        <Link href="https://react-tutorial.app">Shop online</Link>
        <Button type={'submit'} disabled={true}>
          Submit
        </Button>
        <Input placeholder="Full Name" name="full_name" />
      </Container>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
