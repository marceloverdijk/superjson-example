import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  date: Date
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      date: new Date(0),
    },
  }
}

const WihPropsPage = ({ date }: Props): JSX.Element => (
  <p>props.date is Date: {date instanceof Date}</p>
)

export default WihPropsPage
