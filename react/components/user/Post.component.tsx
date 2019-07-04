import * as React from 'react';
import { css } from 'emotion';

const wrapperStyles = css`
  background: white;
  border-radius: 5px;
  /* .... */
`;

interface PostProps {
  title: string;
  body: string;
}

export const Post = (props: PostProps) => {
  return (
    <div className={wrapperStyles}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};
