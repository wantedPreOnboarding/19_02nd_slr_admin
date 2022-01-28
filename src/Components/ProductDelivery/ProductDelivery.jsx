import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, ToggleBtn, Grid, FormDatePicker } from 'Components';
import styles from './ProductDelivery.module.scss';

const ProductDelivery = () => {
    const [userDelivery, setUserDelivery] = useState(false);
    const [visit, setVisit] = useState(false);
    const [preOrder, setPreOrder] = useState(false);
    const [orderStartTime, setOrderStartTime] = useState();
    const [orderEndTime, setOrderEndTime] = useState();
    const [earlyDelivery, setEarlyDelivery] = useState(new Date());
    const [normalDelivery, setNormalDelivery] = useState(new Date());


    useEffect(() => {
        // console.log('preOrder', preOrder);
        preOrder && 
            setVisit(false);
            setUserDelivery(false);
        },[preOrder]);
        
        useEffect(() => {
        // console.log('userDelivery', userDelivery);
        // console.log('visit', visit);
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
        // console.log('state',state);
        setPreOrder(state);
    };
    const handleOrderStartTime = (date) => {
        setOrderStartTime(date);
    };
    const handleOrderEndTime = (date) => {
        setOrderEndTime(date);
    };
    const handleEarlyDelivery = (date) => {
        setEarlyDelivery(date);
    };
    const handleNormalDelivery = (date) => {
        setNormalDelivery(date);
    };
        
    return(
        <>
        <Table>
            <TableHeader>상품 배송 설정</TableHeader>
            <TableRow label="사용자 배송일 출발일 지정" className={styles.ProductDelivery}>
                <ToggleBtn menuTitle="delivery-userDelivery" changeHandler={handleUserDelivery} toggleValue={`${userDelivery}`}/>
            </TableRow>
            <TableRow label="방문 수령" className={styles.ProductDelivery}>
                <ToggleBtn menuTitle="visit-visiting" changeHandler={handleVisit} toggleValue={`${visit}`}/> 
            </TableRow>
            <TableRow label="선 주문 예약 배송" className={styles.roductDelivery}>
                <ToggleBtn menuTitle="pre-order" changeHandler={handlePreOrder} toggleValue={`${preOrder}`}/> 
                <Grid container className={styles.gridTop}>
                    <Grid size={12} container item>
                        <Grid item>
                            <span>주문시간</span>
                            <FormDatePicker name="orderStartTime" dateType="day" changeHandler={handleOrderStartTime} />
                            <span> ~ </span>
                            <FormDatePicker name="orderEndTime" dateType="day" changeHandler={handleOrderEndTime} />
                        </Grid>
                    </Grid>
                    <Grid size={12} container item>
                        <Grid item>
                            <span>새벽 배송</span>
                            <FormDatePicker name="earlyDelivery" dateType="day" changeHandler={handleEarlyDelivery} />
                            <span>일반 배송</span>
                            <FormDatePicker name="normalelivery" dateType="day" changeHandler={handleNormalDelivery} />
                        </Grid>
                    </Grid>
                </Grid>
            </TableRow>
        </Table>
        </>
    );
};

export default ProductDelivery;
