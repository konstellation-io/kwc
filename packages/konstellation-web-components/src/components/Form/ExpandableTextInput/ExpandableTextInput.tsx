import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';

import IconSearch from '@material-ui/icons/Search';
import cx from 'classnames';
import styles from './ExpandableTextInput.module.scss';

export type ExpandableTextInputProps = {
  onEnterKeyPress?: Function;
  onChange?: Function;
  onBlur?: Function;
  formValue?: string | number;
  className?: string;
};

export function ExpandableTextInput({
  onEnterKeyPress = function () {},
  onChange = function () {},
  onBlur = () => {},
  formValue = '',
  className = '',
}: ExpandableTextInputProps) {
  const [value, setValue] = useState(formValue);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setValue(formValue);
  }, [formValue, setValue]);

  function updateValue(newValue: string) {
    setValue(newValue);
    onChange(newValue);
  }

  function onType(e: ChangeEvent<HTMLInputElement>) {
    updateValue(e.target.value);
  }

  function onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    e.key === 'Enter' && onEnterKeyPress();
  }

  function onInputBlur() {
    onBlur();
    setOpened(false);
  }

  return (
    <div
      className={cx(styles.container, className, {
        [styles.opened]: opened,
      })}
      onClick={() => !opened && setOpened(true)}
    >
      <input
        className={styles.input}
        value={value}
        type="text"
        onChange={onType}
        onKeyPress={onKeyPress}
        onBlur={() => onInputBlur()}
      />
      <IconSearch className={cx("icon-regular", styles.searchIcon)}/>
    </div>
  );
}
