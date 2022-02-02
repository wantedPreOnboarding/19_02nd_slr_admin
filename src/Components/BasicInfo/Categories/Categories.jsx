import React, { useState } from 'react';
import { CheckBox, Grid } from 'Components';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { withCurlyBraces } from 'utils';
import { categories as originCategories } from 'data/basicInfo';
import styles from './Categories.module.css';

const Categories = () => {
  const [categories, setCheckedCategories] = useState([...originCategories]);

  const toggleCheckState = category => {
    const newState = [...categories];
    let id = categories.findIndex(({ id }) => id === category.id);
    newState[id].checked = !category.checked;
    setCheckedCategories(newState);
  };

  const checkedCategories = () => categories.filter(({ checked }) => checked);

  return (
    <Grid container space={5}>
      <Grid size={7} item>
        <Card>
          <ul className={styles.categories}>
            {categories.map(category => {
              return (
                <CheckBox
                  key={category.id}
                  category={category.category}
                  checked={category.checked}
                  onChange={() => toggleCheckState(category)}
                  name={`basicInfo-${category.category}`}
                >
                  {withCurlyBraces(category.category)}
                </CheckBox>
              );
            })}
          </ul>
        </Card>
      </Grid>
      <Grid size={5} item>
        <Card>
          <ul className={styles.checkedCategories}>
            {checkedCategories().map(category => {
              return (
                <li key={category.id}>
                  <Button type={1} onClick={() => toggleCheckState(category)}>
                    {withCurlyBraces(category.category)} X
                  </Button>
                </li>
              );
            })}
          </ul>
          {checkedCategories().length === 0 && (
            <span className={styles.message}>카테고리를 지정해 주세요.</span>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Categories;
