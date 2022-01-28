import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, ToggleBtn, Grid, FormDatePicker } from 'Components';
import styles from './ProductDelivery.module.scss';

const ProductDelivery = () => {
    const [userDelivery, setUserDelivery] = useState(false);
    const [visit, setVisit] = useState(false);
    const [preOrder, setPreOrder] = useState(false);

    useEffect(() => {
        preOrder && 
            setVisit(false);
            setUserDelivery(false);
        },[preOrder]);
        
        useEffect(() => {
        userDelivery || visit &&
            setPreOrder(false);
        }, [userDelivery, visit])

    const handleUserDelivery = (state) => {
        setUserDelivery(state);
    };
    const handleVisit = (state) => {
        setVisit(state);
    };
    const handlePreOrder = (state) => {
        setPreOrder(state);
    };
    const handleTime = (date) => {
        console.log(date);
    };
        
    return(
        <>
            <form 
  onSubmit={e => { e.preventDefault(); console.log(e.target); 
  const data = new FormData(e.target); 
  for (var [key, value] of data.entries()) { console.log(key, value); } }} >
        <Table>
            <TableHeader>상품 배송 설정</TableHeader>
            <TableRow label="사용자 배송일 출발일 지정" className={styles.productDelivery}>
                <ToggleBtn menuTitle="delivery-userDelivery" changeHandler={handleUserDelivery} toggleValue={`${userDelivery}`}/>
            </TableRow>
            <TableRow label="방문 수령" className={styles.productDelivery}>
                <ToggleBtn menuTitle="delivery-visiting" changeHandler={handleVisit} toggleValue={`${visit}`}/> 
            </TableRow>
            <TableRow label="선 주문 예약 배송" className={styles.productDelivery}>
                <ToggleBtn menuTitle="delivery-preOrder" changeHandler={handlePreOrder} toggleValue={`${preOrder}`}/> 
                <Grid container className={styles.gridTop}>
                    <Grid size={12} container item>
                        <Grid item className={styles.gridItem}>
                            <span className={styles.span}>주문시간</span>
                            <FormDatePicker name="delivery-orderStartTime" dateType="time" changeHandler={handleTime} />
                            <span className={styles.tilde}> ~ </span>
                            <FormDatePicker name="delivery-orderEndTime" dateType="time" changeHandler={handleTime} />
                        </Grid>
                    </Grid>
                    <Grid size={12} container item>
                        <Grid item className={styles.gridItem}>
                            <span className={styles.span}>새벽 배송</span>
                            <FormDatePicker name="delivery-earlyDelivery" dateType="day" changeHandler={handleTime} />
                            <span className={styles.normalSpan}>일반 배송</span>
                            <FormDatePicker name="delivery-normalelivery" dateType="day" changeHandler={handleTime} />
                        </Grid>
                    </Grid>
                </Grid>
            </TableRow>
        </Table>
        <button>123</button>
        </form>
        </>
    );
};

export default ProductDelivery;