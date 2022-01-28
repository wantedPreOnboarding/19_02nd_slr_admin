import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = ({ name, setToggle, isToggle }) => {
  // const [isToggle, setIsToggle] = useState(false);

  const handleToggleBtn = (event) => {
    console.log(isToggle);
    setToggle(event.target.checked);
  }
  

  return (
    <label htmlFor={name} class={styles.switchBtn}>
    <input onChange={handleToggleBtn} id={name} type="checkbox" /> <span class={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
