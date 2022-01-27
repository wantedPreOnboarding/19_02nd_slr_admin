import { Grid } from 'Components';
import styles from './TableHeader.module.css';
import { classNames } from 'utils';

export default function TableHeader({ className, children }) {
  return (
    <Grid item xs={12} className={classNames(styles.tableHeader, className)}>
      {children}
    </Grid>
  );
}
