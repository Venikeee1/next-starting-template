import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Button.module.scss';
import { ReactComponent as HackerIcon } from './icons/hacker.svg';

export const Button = ({ children, size }) => {
  const buttonStyles = cn(size === 'small' ? css.small : css.base, css.button);
  return (
    <button className={buttonStyles}>
      <HackerIcon width={30} height={30} className={css.icon} />
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
};
