import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Chip } from '../../Chip/Chip';
import ClearIcon from '@material-ui/icons/Close';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import cx from 'classnames';
import styles from './SearchSelect.module.scss';
import useClickOutside from '../../../hooks/useClickOutside';

export const ARROW_UP_KEY_CODE = 38;
export const ARROW_DOWN_KEY_CODE = 40;
export const ENTER_KEY_CODE = 13;

export enum SearchSelectTheme {
  DEFAULT = 'default',
  LIGHT = 'light',
  TRANSPARENT = 'transparent',
};

export type SearchSelectProps = {
  options: string[];
  onChange?: Function;
  onEnter?: Function;
  onRemoveChip?: (chip: string) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  name?: string;
  inputRef?: React.Ref<any>;
  hideError?: boolean;
  hideLabel?: boolean;
  showSearchIcon?: boolean;
  showClear?: boolean;
  className?: string;
  chipSelection?: string[];
  theme?: SearchSelectTheme;
};

export function SearchSelect({
  options,
  chipSelection,
  onChange = () => {},
  onEnter = () => {},
  onRemoveChip,
  value = '',
  placeholder = '',
  label = '',
  error = '',
  name = 'searchSelect',
  inputRef = null,
  hideError = false,
  hideLabel = false,
  showSearchIcon = false,
  showClear = false,
  className = '',
  theme = SearchSelectTheme.DEFAULT,
}: SearchSelectProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [highlightedOption, setHighlightedOption] = useState<number>(-1);

  const optionsRef = useRef<HTMLInputElement>(null);
  const { addClickOutsideEvents, removeClickOutsideEvents } = useClickOutside({
    componentRef: optionsRef,
    action: onClose,
  });

  useEffect(() => {
    if (filteredOptions.length !== 0) {
      addClickOutsideEvents();
    } else {
      removeClickOutsideEvents();
    }
  }, [filteredOptions, addClickOutsideEvents, removeClickOutsideEvents]);

  function onClose() {
    setFilteredOptions([]);
    onChange(selectedOption);
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
    if (event.target.value) {
      setFilteredOptions(
        options
          .filter((option) => option.includes(`${event.target.value}`))
          .sort()
      );
    } else {
      setFilteredOptions([]);
    }
  }

  function handleSelectOption(option: string) {
    onChange(option);

    if (chipSelection) {
      setSelectedOption('');
    } else {
      setSelectedOption(option);
    }

    setFilteredOptions([]);
    setHighlightedOption(-1);
    if (optionsRef.current) {
      const input = optionsRef.current.querySelector('input');
      if (input) {
        input.focus();
      }
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === ARROW_DOWN_KEY_CODE) {
      e.preventDefault();
      const newValue =
        highlightedOption + 1 > filteredOptions.length - 1
          ? 0
          : highlightedOption + 1;
      setHighlightedOption(newValue);
    } else if (e.keyCode === ARROW_UP_KEY_CODE) {
      e.preventDefault();
      const newValue =
        highlightedOption - 1 < 0
          ? filteredOptions.length - 1
          : highlightedOption - 1;
      setHighlightedOption(newValue);
    } else if (e.keyCode === ENTER_KEY_CODE) {
      const option =
        highlightedOption === -1
          ? selectedOption
          : filteredOptions[highlightedOption];
      handleSelectOption(option);
      onEnter();
    } else {
      setHighlightedOption(-1);
    }
  }

  useEffect(() => {
    setSelectedOption(value || '');
  }, [value]);

  return (
    <div
      className={cx(className, styles.container, styles[theme], {
        [styles.noChips]: !onRemoveChip && chipSelection === undefined,
      })}
      ref={optionsRef}
    >
      {!hideLabel && <InputLabel text={label} />}
      <div className={ styles.inputContainer}>
        {showSearchIcon && (
          <div className={styles.searchIcon}>
            <SearchIcon className="icon-regular" />
          </div>
        )}
        <div className={ styles.inputContent}>
          {chipSelection &&
            chipSelection.map((chip: string) =>
              <Chip
                key={chip}
                label={chip}
                title={chip}
                onClose={() => onRemoveChip && onRemoveChip(chip)}
                className={ styles.searchChip }
                round
              />
            )
          }
          <input
            name={name}
            ref={inputRef}
            value={selectedOption}
            className={styles.input}
            type="text"
            placeholder={placeholder}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>
        <div
          className={cx(styles.clear, {
            [styles.show]: showClear && selectedOption,
          })}
          onClick={() => handleSelectOption('')}
          title="Clear input"
        >
          <ClearIcon className="icon-small" />
        </div>
      </div>
      <ul className={styles.optionsList}>
        {filteredOptions.map((option, index) => (
          <li
            className={cx({
              [styles.isHighlighted]: index === highlightedOption,
            })}
            key={`${option}-${index}`}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {!hideError && <InputError message={error} />}
    </div>
  );
}
