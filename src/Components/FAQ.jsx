import React, { useState } from 'react';
import arrowDown from '../assets/arrowDown.png'
import upCaret from '../assets/upCaret.png'

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'What is Market Assistant?',
            answer: "Market Assistants are La'ada Agents. Their main objectives are to help you with market shopping activities, either in-person; when you are available are the market destination or online when you need your bush market done with trusted and reliable people like partners. ",
            isOpen: false,
        },
        {
            question: 'How can I buy from La’ada?',
            answer: 'To purchase from La’ada is simple. Navigate the website, contact our agent directly, and also download our application from Google Playstore, register as a customer and purchase directly from any market listed on the La’ada application.',
            isOpen: false,
        },
        {
            question: 'How do I become a Parter?',
            answer: 'Partners are very important in our business structure. Join our partner network by contacting us directly. The requirements are having access to a pull of community within your physical location. Participate directly by going on Playstore, downloading the La’ada application and there you go, enjoy!',
            isOpen: false,
        },
        {
            question: 'How  do I become a Vendor with La’ada?',
            answer: 'To be a La’ada Vendor, go to google playstore, download the  La’ada application, select vendor registration, register to be part of the community offering exclusive market experience.',
            isOpen: false,
        },
        {
            question: 'Will I have discounts when I use La’ada?',
            answer: 'La’ada offer lots of perks and competitive prices to goods via its vendors. Yes. Buying from La’ada ensures you will have access to top quality items, for a fair or advantageous market price.',
            isOpen: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqs(prevFaqs => {
            const updatedFaqs = prevFaqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, isOpen: !faq.isOpen };
                } else {
                    return { ...faq, isOpen: false };
                }
            });
            return updatedFaqs;
        });
    };

    return (
        <div className=" ">
            <h2 className=' text-left text-2xl mb-10'>FAQs</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">

                    <button
                        className="  flex flex-col bg-gray-200 hover:bg-gray-300 text-left py-1 px-4 rounded-lg focus:outline-none focus:bg-gray-300 mt-8"
                        onClick={() => toggleFAQ(index)}
                    >

                        <div className='flex items-center gap-4 p-2 rounded-[10px] mb-1 '>
                            <p className="font-semibold">{faq.question}</p>
                            <img src={faq.isOpen ? upCaret : arrowDown} alt="" className='w-4' />
                        </div>
                    </button>

                    {faq.isOpen && <p className="mt-2 max-w-[500px] bg-gray-100 rounded-lg p-2 text-left">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
