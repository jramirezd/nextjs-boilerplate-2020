import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Button from 'components/Button';
import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import 'styles/scss/styles.scss';

const layoutProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

const IndexPage = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <Layout {...layoutProps}>
      <main>
        <section>
          <h1>Dashboard title.</h1>
          <Paragraph>Lorem ipsum dolro sit amet</Paragraph>
          <Paragraph>¿Funciona?.</Paragraph>
          <Button onClick={incrementCounter}>
            Ckickat {counter}
            {counter === 1 ? ' vez' : ' veces'}!
          </Button>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
