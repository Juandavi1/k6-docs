import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './dropdown.module.scss';
import ArrowIcon from './svg/arrow.inline.svg';

export const Dropdown = ({ currentOption, options, className, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={classNames(
          styles.current,
          isOpen ? styles.currentOpen : styles.currentClose,
        )}
      >
        {currentOption && (
          <span>
            {options.find((item) => item.value === currentOption).label}
          </span>
        )}
        <ArrowIcon className={styles.icon} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {options
            .filter((option) => option.value !== currentOption)
            .map((option) => (
              <button
                key={option}
                type="button"
                className={styles.menuItem}
                onClick={() => onChange(option.value)}
              >
                <span>{option.label}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
