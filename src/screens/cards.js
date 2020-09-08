import React from 'react';
import {Card, CardDeck, Col, Row} from "react-bootstrap";
import styled from 'styled-components';


const Styles = styled.div`
.header-title{
    color: darkblue;
    font-style:normal;
    font-family:Raleway;
    font-size:35px;
    font-weight:extra-bold;
    margin-top:25px;

}

.image{
     width: 10rem;
     height:10rem;
     margin-left: 35px;
     margin-top: 20px;
}

h6{
    margin-top: 30px;
    color: red;
    text-align:center;
}

footer{
    margin-left: 55px;
    margin-top: 1px;
}

.bottomStroke{
    width:100px;
    height:4px;
    background-color:#62C69A;
    
}
h5{
    font-style: normal;
    font-weight:extra-bold; 
    font-family: Raleway;
    letter-spacing: 0;
    text-decoration: none;
    margin-top: 20px;
    margin-right:120px;
    margin-left:90px;
   
`;


export const Cards =()=> (
    <Styles>
    <div>
        <p className={'header-title'}>ALLIED SERVICES</p>
        <div className={'bottomStroke'}/>
        <Row style={{paddingTop: 30, paddingBottom: 100}}>
            <CardDeck>
            <Card border="light"  style={{width: '35rem' ,  height:'14.5rem'}} >
                <div className="row">
                    <div className="col-sm">
                        <img className={"image"} src={require('../assets/img1.jpg')} alt={"img"}/>
                    </div>
                    <div className="col-xs">
                        <h5>MICHELLE JOHNSON</h5>
                        <h6>50,000 ratings | 5,000 reviews</h6>
                        <div className={'d-flex flex-row justify-content-center'}>
                            <img src={require('../assets/loc icon.jpg')} alt={""} style={{width:'30px' , height:'30px'}}/>
                            <div className={'d-flex flex-column '}>
                                <p>11835 W Olympic Blvd Ste 210,<br/>Los ANgeles, CA 90064</p>
                            </div>
                        </div>
                        <div className={'d-flex flex-row justify-content-center'}>
                            <img src={require('../assets/contact icon.jpg')} alt={"img"} style={{width:'37px' , height:'30px'}}/>
                            <div className={'d-flex flex-column '}>
                                <p>(310)477-6327 | (310)477-6327</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <footer className={"footer"}>
                            <Row>
                                <Col xs={6}>E-MAIL</Col>
                                <Col xs={6}>WEBSITE</Col>
                            </Row>
                        </footer>
                    </div>
                </div>

            </Card>
                <Card border="light"  style={{width: '35rem' ,  height:'14.5rem'}} >
                    <div className="row">
                        <div className="col-sm">
                            <img className={"image"} src={require('../assets/img2.jpg')} alt={"img"}/>
                        </div>
                        <div className="col-xs">
                            <h5>MARK RHODES</h5>
                            <h6>50,000 ratings | 5,000 reviews</h6>
                            <div className={'d-flex flex-row justify-content-center '}>
                                <img src={require('../assets/loc icon.jpg')} alt={"img"} style={{width:'30px' , height:'30px'}}/>
                                <div className={'d-flex flex-column '}>
                                    <p>3660 Wilshire Blvd Str 506,<br/>Los Angeles, CA 90010</p>
                                </div>
                            </div>
                            <div className={'d-flex flex-row justify-content-center'}>
                                <img src={require('../assets/contact icon.jpg')} alt={"img"} style={{width:'37px' , height:'30px'}}/>
                                <div className={'d-flex flex-column '}>
                                    <p>(213)221-1212 | (213)221-1212</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <footer className={"footer"}>
                                <Row>
                                    <Col xs={6}>E-MAIL</Col>
                                    <Col xs={6}>WEBSITE</Col>
                                </Row>
                            </footer>
                        </div>
                    </div>
                </Card>
            </CardDeck>
        </Row>
    </div>

         </Styles>
)
