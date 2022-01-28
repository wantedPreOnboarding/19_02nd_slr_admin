import React, {useState} from 'react';
import { Table, TableHeader, TableRow, ToggleBtn, Grid } from 'Components';
import styles from './ProductDelivery.module.scss';

const ProductDelivery = () => {
    const [userDelivery, setUserDelivery] = useState(false);
    const [visit, setVisit] = useState(false);
    const [preOrder, setPreOrder] = useState(false);

    const handleUserDelivery = (state) => {
        setUserDelivery(state);
    }
    const handleVisit = (state) => {
        setVisit(state);
    }
    const handlePreOrder = (state) => {
        setPreOrder(state);
    }

    return(
        <>
        <Table>
            <TableHeader>상품 배송 설정</TableHeader>
            <TableRow label="사용자 배송일 출발일 지정" className={styles.ProductDelivery}>
                <ToggleBtn menuTitle="userDelivery" changeHandler={handleUserDelivery}/>
                {
                userDelivery && 
                <div>
                <input 
                    className={styles.inputTime} 
                    type="datetime-local" 
                    name="startDate"
                    />
                    <span> ~ </span>
                    <input 
                        className={styles.inputTime} 
                        type="datetime-local" 
                        name="endDate" 
                        />
                </div>
                }
            </TableRow>
            <TableRow label="방문 수령" className={styles.ProductDelivery}>
                <ToggleBtn menuTitle="visiting" changeHandler={handleVisit} /> 
                {
                visit && 
                <div>
                <input 
                    className={styles.inputTime} 
                    type="datetime-local" 
                    name="startDate"
                    />
                    <span> ~ </span>
                    <input 
                        className={styles.inputTime} 
                        type="datetime-local" 
                        name="endDate" 
                        />
                </div>
                }
            </TableRow>
            <TableRow label="선 주문 예약 배송" className={styles.ProductDelivery}>
                <ToggleBtn menuTitle="pre-order" changeHandler={handlePreOrder} /> 
                <Grid container className={styles.gridTop}>
                    <Grid size={3} container item>
                        <Grid item>주문시간</Grid>
                    </Grid>
                    <Grid size={9} container item>
                        <Grid item>
                            <input 
                                className={styles.inputTime} 
                                type="datetime-local" 
                                name="startDate"
                            />
                            <span> ~ </span>
                            <input 
                                className={styles.inputTime} 
                                type="datetime-local" 
                                name="endDate" 
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid size={3} container item>
                        <Grid item>새벽 배송</Grid>
                    </Grid>
                    <Grid size={3} container item>
                        <Grid item>
                        <input 
                            className={styles.inputTime} 
                            type="datetime-local" 
                            name="startDate" 
                        />

                        </Grid>
                    </Grid>
                    <Grid size={3} container item>
                        <Grid item>일반 배송</Grid>
                    </Grid>
                    <Grid size={3} container item>
                        <Grid item>
                            <input 
                                className={styles.inputTime} 
                                type="datetime-local" 
                                name="startDate"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </TableRow>
        </Table>
        </>
    );
};

export default ProductDelivery;
