import React from 'react'
import './styles.css'
import { Row, Col, Affix, Card, Button, InputNumber } from "antd";
import "antd/dist/antd.css";
import * as data from './items.json' 
import { useSelector, useDispatch } from 'react-redux'
import {setMoney} from '../../redux/moneySlice'
import {setAmount} from '../../redux/amountSlice'

function Body() {
    const { Meta } = Card;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

      const money = useSelector(state => state.money);
      const amount = useSelector(state => state.amount);

      const dispatch = useDispatch();

      
      const onNumberChange = (e,i,num) => {
        const newArr = [...amount.amountArr];
        const newArrC = [...newArr]
        newArr[i] = e;
        dispatch(setAmount(newArr));
        e > newArrC[i] ? dispatch(setMoney(money.amount-num)) : dispatch(setMoney(money.amount+num))
      }

      

    return (
        <>
            <Row>
                <Col xs={{span:24}} md={{offset:6, span:12}} >
                    <div className="info">
                        <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
                        <h1><strong>Spend Bill Gates' Money</strong></h1>
                    </div>
                </Col>
            </Row>
            <Affix >
                <Row>
                    <Col xs={{span:24}} md={{offset:6, span:12}} >
                        <div className="money"> 
                            <p>{formatter.format(money.amount)}</p>
                        </div>
                    </Col>
                </Row>
            </Affix>
            <Row>
                <Col xs={{span:24}} md={{offset:6, span:12}} >
                    <Row justify="start" gutter={[10,15]}>

                        {
                        data['default'].map((element,i)=>{
                            return (
                            <Col key={i} xs={{span:24}} md={{span:8}}>
                                <Card
                                style={{ width: "100%"}}
                                cover={
                                <div style={{textAlign:"center",overflow:"clip"}}>
                                    <img
                                    style={{scale:"70%",maxHeight:"220px"}}
                                    alt="example"
                                    src={element.img}
                                    />
                                </div>
                                }
                                actions={[
                                <Button disabled={amount.amountArr[i]===0?true:false} onClick={()=>onNumberChange((amount.amountArr[i]-1),i,element.price)} size="large" className="sellButton"><strong>Sell</strong></Button>,
                                <InputNumber value={amount.amountArr[i]} onChange={(e)=>onNumberChange(e,i,element.price)}  size="large" min={0} max={element.title === "Mona Lisa" && 1} defaultValue={0} />,
                                <Button disabled={(element.title === "Mona Lisa" && amount.amountArr[i]===1)?true:false} onClick={()=>onNumberChange((amount.amountArr[i]+1),i,element.price)} size="large" className="buyButton"><strong>Buy</strong></Button>,
                                ]}
                                >
                                <Meta
                                title={<p style={{fontWeight:"bold", fontSize:"22px", textAlign:"center", marginTop:"-10px"}}>{element.title}</p>}
                                description={<p style={{fontSize:"18px", textAlign:"center", marginTop:"-20px", marginBottom:"-5px", color:"#21a565"}}> {formatter.format(element.price)} </p>}
                                />
                            </Card>
                            </Col>
                            )})}  
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Body 
