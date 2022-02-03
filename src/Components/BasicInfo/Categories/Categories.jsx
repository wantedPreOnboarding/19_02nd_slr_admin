import React, { useCallback, useState } from 'react';
import { CheckBox, Grid, MessageBox } from 'Components';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { classNames, withCurlyBraces } from 'utils';
import { categories as originCategories } from 'data/basicInfo';
import styles from './Categories.module.scss';

const Categories = () => {
  const [categories, setCheckedCategories] = useState([...originCategories]);

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
        name={`basicInfo-categories-${category.category}`}
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

  return (
    <Grid className={styles.categoriesWrapper} container space={5}>
      <MessageBox className={classNames(styles.messageBox, 'categoriesErrorMessage')}>
        한개 이상의 카테고리를 선택해 주세요.
      </MessageBox>
      <Grid size={7} item>
        <Card>
          <ul className={styles.categories}>
            {categories.map(category => {
              return <MemoCheckBox key={category.id} category={category} />;
            })}
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
