import React, {useState} from 'react';
import { Table, TableHeader, TableRow, ToggleBtn, Grid } from 'Components';
import styles from './ProductDelivery.module.scss';

const ProductDelivery = () => {
    const [isToggle, setIsToggle] = useState(false);

    const setToggle = (isToggle) => {
        setIsToggle(isToggle);
    }

    return(
        <>
        <br />
        <Table>
            <TableHeader>상품 배송 설정</TableHeader>
            <TableRow label="사용자 배송일 출발일 지정" className={styles.ProductDelivery}>
                <ToggleBtn name="userDelivery" setToggle={setToggle} isToggle={isToggle}/>
            </TableRow>
            <TableRow label="방문 수령" className={styles.ProductDelivery}>
                <ToggleBtn name="visiting" /> 
            </TableRow>
            <TableRow label="선 주문 예약 배송" className={styles.ProductDelivery}>
                <ToggleBtn name="pre-order" /> 
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
        <br />
        
        </>
    );
};

export default ProductDelivery;