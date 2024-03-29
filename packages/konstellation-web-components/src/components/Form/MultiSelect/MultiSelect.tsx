import React, { useState } from 'react';

import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';
import Option from './Option';
import cx from 'classnames';
import styles from './MultiSelect.module.scss';
import { ExpandableMenu } from '../../ExpandableMenu/ExpandableMenu';

export enum MultiSelectTheme {
  DEFAULT = 'default',
  LIGHT = 'light',
}

export type MultiSelectOption<T> = {
  /** This inherits a generic type passed to this element MultiSelectOption<T> */
  label: T;
  Icon?: JSX.Element;
};

export type MultiSelectProps<T> = {
  onChange?: (selections: T[]) => void;
  label?: string;
  selectAllText?: string;
  error?: string;
  placeholder?: string;
  options: MultiSelectOption<T>[];
  formSelectedOptions: T[];
  hideError?: boolean;
  className?: string;
  theme?: MultiSelectTheme;
  selectionUnit?: string;
  iconAtStart?: boolean;
  customLabels?: Map<T, JSX.Element>;
};

export function MultiSelect<T>({
  options,
  onChange = function () {},
  label = '',
  error = '',
  placeholder = '',
  selectAllText = '',
  formSelectedOptions = [],
  hideError = false,
  className = '',
  theme = MultiSelectTheme.DEFAULT,
  selectionUnit = '',
  iconAtStart = false,
  customLabels,
}: MultiSelectProps<T>) {
  const [optionsOpened, setOptionsOpened] = useState(false);

  function openOptions() {
    if (!optionsOpened) {
      setOptionsOpened(true);
    }
  }

  function closeOptions() {
    setOptionsOpened(false);
  }

  function onSelect(option: T) {
    const newSelection = [...formSelectedOptions].concat([option]);

    if (newSelection.length === options.length) onSelectAll();
    else onChange(newSelection);
  }

  function onDeselect(option: T) {
    const newSelections = formSelectedOptions.filter((o) => o !== option);
    onChange(newSelections);
  }

  function onOptionChange(option: T, checked: boolean) {
    checked ? onSelect(option) : onDeselect(option);
  }

  function onSelectAll() {
    onChange([]);
  }

  const optionList = options.map(({ label: lab, Icon }) => (
    <Option<T>
      key={`${lab}`}
      label={lab}
      selected={formSelectedOptions.includes(lab)}
      onChange={onOptionChange}
      Icon={Icon}
      iconAtStart={iconAtStart}
      customLabel={customLabels && customLabels.get(lab)}
    />
  ));

  if (selectAllText !== '')
    optionList.push(
      <div
        key="select_all_row"
        className={cx(styles.selectAll, {
          [styles.selected]: formSelectedOptions.length === 0,
        })}
        onClick={onSelectAll}
      >
        {selectAllText}
      </div>
    );

  const nSelections = formSelectedOptions.length;
  const placeholderText =
    nSelections === 0
      ? placeholder
      : `${nSelections} ${selectionUnit}${nSelections > 1 ? 'S' : ''}`;

  return (
    <div className={cx(className, styles[theme], styles.container)}>
      {label && <InputLabel text={label} />}
      <div className={styles.inputContainer}>
        <div
          className={cx(styles.input, {
            [styles.error]: error !== '',
            [styles.opened]: optionsOpened,
            [styles.placeholder]: placeholder !== '',
          })}
          onClick={openOptions}
        >
          {placeholderText}
        </div>
        <ExpandableMenu
          opened={optionsOpened}
          close={closeOptions}
          className={styles.optionsContainer}
        >
          {optionList}
        </ExpandableMenu>
      </div>
      {!hideError && <InputError message={error} />}
    </div>
  );
}
