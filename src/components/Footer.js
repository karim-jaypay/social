import React from 'react'

import call from '../public/footer/telephone.png'
import mail from '../public/footer/mail.png'
import message from '../public/footer/message.png'

export default function Footer() {
    return (
        <footer className="footer">
    <div className="container-fluid">
        <div className="container">
            <div className="row ">
                <div className="col-lg-7 contact-column-1">
                    <h4 style={{fontWeight:'lighter'}}>Get in touch</h4>
                    <p>Got a question? Our superstar support team is standing by.</p>
                    <div className="row contacts_icon">

                        <div className="col-lg-3 col-md-4 text-center">
                            <img src={call} alt="Call us on" />
                            <div className="title">Call us on</div>
                            <div className="text"><a className="text" href="tel:+357 25261240">+357 25261240</a></div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <img src={mail} alt="Email us at" />
                            <div className="title">Email us at</div>
                            <div className="text"><a className="text" href="mailto:support@everestcm.com">support@everestcm.com</a></div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <img src={message} alt="Talk to us now via" />
                            <div className="title">Talk to us now via</div>
                            <div className="text"><a className="text" href="#">Live Chat</a></div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 contact-column-2">
                    <h4 style={{fontWeight:'lighter'}}>The markets are waiting…</h4>
                   <p>Go ahead and register your Everest account. You’ll be up and running in minutes. What are you waiting for?
                   </p>
                    <a href="https://ascend-mu.everestcm.com/register" target="_blank" className="btn btn-blue">TRADE NOW</a>
                </div>
                <hr className="mb-5"/>
                <div className="col-md-12 footer2">

                    <p>The EverestCM brand is owned and operated by Myrtle Ltd with registration number 179291 GBC Regulation:</p>

                    <p><span className="grey">Regulation & Licensing Warning:</span> Myrtle Ltd is authorized and regulated by Mauritius Financial Services Commission (FSC) under the license number GB21026300.
</p>
                    <p><span className="grey">Risk Warning:</span> CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Bearing this in mind, you should not invest more than you can afford to lose. Please read the full Risk Disclosure.
                    </p>

                    <p><span className="grey">Regional Restrictions:</span> Everest does not provide its services to residents of the USA, Seychelles, Mauritius, North Korea, Iran, Japan, Belgium, Canada and other countries whose domestic regulations classify such investment offering as prohibited.
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div className="copyright text-center">
        <p style={{color:'black'}}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 Everest™ </p>
    </div>
</footer>

    )
}
