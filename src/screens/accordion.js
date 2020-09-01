import React,{useState} from 'react';
import {Pricingheader} from './Pricingheader';
import FAQ from "./FAQ";


export function accordion () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [faqs,setfaqs] = useState([

        {
            question: 'How long are you contracts?',
            answer: ' ',
            open: false
        },
        {
            question: 'How do I sign up?',
            answer: '',
            open: false
        },
        {
            question: 'Is there a discount for yearly service?',
            answer: '',
            open:false
        },
        {
            question: 'How do I cancel the service?',
            answer: '',
            open: false
        },
        {
            question: 'How can I switch plans?',
            answer: '',
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq , i)=>{
            if(i === index){
                faq.open = !faq.open
            }else{
                faq.open = false;
            }
            return faq;
        }))
    }



    return (
        <div>
            <Pricingheader/>
        <div className="faqs">
            {faqs.map((faq,i)=>(
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ()}/>
            ))}

        </div>
        </div>

    );

}
