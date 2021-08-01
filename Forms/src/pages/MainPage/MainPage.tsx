import './MainPage.scss';
import React from 'react';
import { Form } from '../../components/Form/Form.tsx';

export function MainPage(): JSX.Element {
  return (
    <>
      <main className="main">
        <Form />
      </main>
    </>
  );
}
