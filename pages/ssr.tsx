import React, { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Button from 'components/Button';
import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';
import api from 'lib/api';

import 'styles/scss/styles.scss';

const layoutProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get('random-positive-int');
    if (response && response.ok) {
      const { number: randomPositiveInt } = await response.json();
      return { props: { randomPositiveInt } };
    }
  } catch (error) {
    // Do nothing
  }

  return { props: { randomPositiveInt: 0 } };
};

type SsrPageProps = {
  randomPositiveInt: number;
};

const SsrPage = ({ randomPositiveInt }: SsrPageProps) => {
  const [counter, setCounter] = useState(randomPositiveInt);
  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <Layout {...layoutProps}>
      <main>
        <div>
          <section>
            <h1>This page was server-side rendered (SSR)!</h1>
            <Paragraph>This is always built when requested.</Paragraph>
            <Paragraph>
              The button starts as if having been clicked {randomPositiveInt} time
              {randomPositiveInt === 1 ? '' : 's'}.
            </Paragraph>
            <Button onClick={incrementCounter}>
              This button has been clicked {counter} time
              {counter === 1 ? '' : 's'}!
            </Button>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default SsrPage;
