import React from 'react';

const TableItem = ({ className, size, children, row, col }) => {
  return (
    <div
      className={className}
      style={size && {
        display: 'grid',
        width: '100%',
        gridRow: row,
        gridColumn: col,
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}>
      {children}
    </div>
  );
}

export default TableItem;
