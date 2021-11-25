import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import * as data from '../Body/items.json' 


function Footer() {

    const money = useSelector(state => state.money);
    const amount = useSelector(state => state.amount);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

    return (
        <>
            <Row>
                <Col xs={{span:24}} md={{offset:6, span:12}} >
                    <div className="receipt">
                        <h1>Your Receipt</h1>

                        <Row>
                            <Col xs={{span:22}} md={{offset:6, span:12}} >
                                
                                {
                                    data['default'].map((element,i)=>{
                                    if (amount.amountArr[i] === 0) return
                                    return(
                                        <Row key={i}>
                                        <Col offset={3} span={6}><p className="text" style={{float:"left"}}>{element.title}</p></Col>
                                        <Col span={6}><p className="text">x{amount.amountArr[i]}</p></Col>
                                        <Col span={6}><p className="text" style={{float:"right"}}>{formatter.format(element.price)}</p></Col>
                                        </Row>
                                    )
                                    
                                })
                                }
                                    
                                
                                <hr  style={{margin:"0 65px 10px"}}/>
                                <p className="text" style={{float:"left", marginLeft:"65px"}}>TOTAL</p>
                                <p className="text" style={{float:"right", marginRight:"65px", marginBottom:"50px"}}>{formatter.format(100000000000-money.amount)}</p>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Footer
