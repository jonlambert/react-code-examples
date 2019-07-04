import * as React from 'react';
import { css } from 'emotion';

const wrapperStyles = css`
  background: white;
  border-radius: 5px;
  /* .... */
`;

interface SinglePostProps {
  title: string;
  body: string;
}

export const SinglePost = (props: SinglePostProps) => {
  return (
    <div className={wrapperStyles}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};
