import React, { useState, useRef } from 'react';
import { A11yInput } from 'Components';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { filterTags } from 'data/basicInfo';
import style from './SearchFilter.module.scss';
import commonStyles from 'styles/index.module.scss';

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [clickedFilterTags, setClickedFilterTags] = useState([]);
  const searchWindowRef = useRef(null);

  const addFilter = tag => {
    setClickedFilterTags([...clickedFilterTags, tag]);
  };

  const removeFilter = tag => {
    setClickedFilterTags(clickedFilterTags.filter(({ id: clickedId }) => clickedId !== tag.id));
  };

  function findOverlap(str1, str2) {
    if (str2.length === 0) {
      return '';
    }
    if (str1.endsWith(str2)) {
      return str2;
    }
    if (str1.indexOf(str2) >= 0) {
      return str2;
    }
    return findOverlap(str1, str2.substring(0, str2.length - 1));
  }

  function sortTagsFromSearch() {
    return filterTags
      .map(({ id, tag }) => ({ id, tag, length: findOverlap(tag, searchValue).length }))
      .sort((a, b) => b.length - a.length);
  }

  return (
    <>
      <A11yInput
        id="searchFilter"
        label="필터 태그"
        placeholder="필터태그를 검색해 주세요."
        islabel={false}
        onFocusHandler={() => {
          setIsOpenSearch(true);
        }}
        onBlurHandler={e => {
          if (e.relatedTarget?.closest('article')?.className.includes('SearchFilter')) {
            e.target.focus();
            return;
          }
          setIsOpenSearch(false);
        }}
        onChangeHandler={e => {
          setSearchValue(e.target.value);
        }}
        autoComplete="off"
      />
      <label htmlFor="searchFilter" className={style.searchBtn}>
        검색
      </label>
      {clickedFilterTags.map(({ id, tag }) => (
        <input
          key={id}
          className={commonStyles.a11yHidden}
          name="basicInfo-filters"
          value={tag}
          readOnly
        />
      ))}
      {isOpenSearch && (
        <Card className={style.searchWindow} ref={searchWindowRef}>
          {sortTagsFromSearch().map(tag => (
            <Button
              type={2}
              key={tag.id}
              className={clickedFilterTags.filter(({ id }) => id === tag.id).length && 'active'}
              onClick={e => {
                e.target.classList.toggle('active');
                if (
                  clickedFilterTags.filter(({ id: clickedId }) => clickedId === tag.id).length === 0
                ) {
                  addFilter(tag);
                } else {
                  removeFilter(tag);
                }
              }}
            >
              {tag.tag}
            </Button>
          ))}
        </Card>
      )}
      {clickedFilterTags.length !== 0 && (
        <div className={style.clickedFilter}>
          {clickedFilterTags.map(tag => (
            <Button
              type={2}
              ontype={2}
              key={tag.id}
              onClick={() => {
                removeFilter(tag);
              }}
            >
              {tag.tag}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};
export default SearchFilter;
