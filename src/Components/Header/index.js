import React from 'react'
import './styles.css'
import { Row, Col } from "antd";
import "antd/dist/antd.css";

function Header() {
    return (
        <>
            <div className="header">
                <Row>
                    <Col md={{offset:6, span:6}} >
                        <h1 className="title">Mert.fun</h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Header
