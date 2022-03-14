import React, { useCallback, useState, useContext, useEffect, useRef } from 'react';
import { ErrorContext } from 'context/error';
import { CheckBox, Grid, MessageBox } from 'Components';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { classNames, withCurlyBraces } from 'utils';
import { categories as originCategories } from 'data/basicInfo';
import styles from './Categories.module.scss';

const Categories = () => {
  const checkBoxesRef = useRef(null);
  const [categories, setCheckedCategories] = useState([...originCategories]);
  const { categories: error } = useContext(ErrorContext);

  const toggleCheckState = category => {
    const newState = [...categories];
    let id = categories.findIndex(({ id }) => id === category.id);
    newState[id].checked = !category.checked;
    setCheckedCategories(newState);
  };

  const checkedCategories = categories.filter(({ checked }) => checked);

  const MemoCheckBox = ({ category }) => {
    const memoToggleCheckState = useCallback(() => toggleCheckState(category), [category]);

    return (
      <CheckBox
        key={category.id}
        id={category.category}
        checked={category.checked}
        onChange={memoToggleCheckState}
        value={category.category}
        name={`basicInfo-categories`}
      >
        {withCurlyBraces(category.category)}
      </CheckBox>
    );
  };

  const MemoButton = ({ category }) => {
    const memoToggleCheckState = useCallback(() => toggleCheckState(category), [category]);

    return (
      <Button type={1} onClick={memoToggleCheckState}>
        {withCurlyBraces(category.category)} X
      </Button>
    );
  };

  useEffect(() => {
    error && checkBoxesRef.current.querySelector('input')?.focus();
  }, [error]);

  return (
    <Grid className={styles.categoriesWrapper} container space={5}>
      {error && (
        <MessageBox className={classNames(styles.messageBox, 'categoriesErrorMessage')}>
          <span>한 개 이상의 카테고리를 선택해 주세요.</span>
        </MessageBox>
      )}
      <Grid size={7} item>
        <Card>
          <ul className={styles.categories} ref={checkBoxesRef}>
            {categories.map(category => (
              <MemoCheckBox key={category.id} category={category} />
            ))}
          </ul>
        </Card>
      </Grid>
      <Grid size={5} item>
        <Card>
          <ul className={styles.checkedCategories}>
            {checkedCategories.map(category => {
              return (
                <li key={category.id}>
                  <MemoButton category={category} />
                </li>
              );
            })}
          </ul>
          {checkedCategories.length === 0 && (
            <span className={styles.message}>카테고리를 지정해 주세요.</span>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Categories;
