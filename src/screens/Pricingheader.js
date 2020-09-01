import React from 'react';
import styled from 'styled-components';


const Appheader = styled.div`
    background-size:cover;
    background-color:#E0FFFF;
    height:350px;      
`;
const Appimg = styled.img`
     height: 360px;
     width:450px;  
     margin-right:25px; 
     margin-top:10px;   
`;


export const Pricingheader = () => (
    <Appheader>
        <container>
            <div className="row">
                <div className="col-sm">
                    <textstyle>
                        <h1>CHOOSE THE BEST <br/><b>SUBSCRIPTION FOR YOU</b></h1><br/><br/>
                        <p>
                            Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam<br/>
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/>
                            volutpat.Ut wisi enim ad minim venisam,quis nostrud exerci tation ullam-<br/>
                            corper suscipit lobortis nisl ut aliquip ex ea com
                        </p>
                    </textstyle>
                </div>
                <div className="col-xs">
                    <Appimg src={require('../assets/img.png')} alt={"img"}/>
                </div>
            </div>
            <h2><b>FQAs ABOUT PRICING</b></h2><br/>
            <p>
                Lorem ipsum dolor sit amet. consectetuer adipiscing elit,sed diam nonummy nibh enuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut Wisi<br/>
                enim ad minim veniam. quis nostrud exerci tation ulamcorper suscipit lobortis nisl ut aliquip ex ea com
            </p>
        </container>
    </Appheader>
)


