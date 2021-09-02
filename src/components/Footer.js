import React from 'react'

import call from '../public/footer/telephone.png'
import mail from '../public/footer/mail.png'
import message from '../public/footer/message.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
    <div className="container-fluid">
        <div className="container">
            <div className="row ">
                <div className="col-lg-7 contact-column-1">
                    <h4>Get in touch</h4>
                    <p>Got a question? Our superstar support team is standing by.</p>
                    <div className="row contacts_icon">

                        <div className="col-lg-3 col-md-4 text-center">
                            <img src={call} alt="Call us on" />
                            <div className="title">Call us on</div>
                            <div className="text">+357 25261240</div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <img src={mail} alt="Email us at" />
                            <div className="title">Email us at</div>
                            <div className="text">support@everestcm.com</div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <img src={message} alt="Talk to us now via" />
                            <div className="title">Talk to us now via</div>
                            <div className="text">Live Chat</div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 contact-column-2">
                    <h4>The markets are waiting…</h4>
                   <p>Go ahead and register your Everest account. You’ll be up and running in minutes. What are you waiting for?
                   </p>
                    <Link to="#" className="btn btn-blue">TRADE NOW</Link>
                </div>
                <hr className="mb-5"/>
                <div className="col-md-12 footer2">

                    <p>The Everest™ brand is owned and operated by Myrtle Ltd with registration number [ADD NUMBER].</p>

                    <p><span className="grey">Regulation & Licensing:</span> Myrtle Ltd which is registered as a [ADD CONTENT HERE] and licensed by the Financial Securities Commission (FSC) under licence number [ADD LICENSE NUMBER].  The Company is headquartered at Suite 602, 6th Floor, Hennessy Tower, Pope Hennessy Street, Port Louis, Mauritius.
</p>
                    <p><span className="grey">Risk Warning:</span> Forex and CFDs are leveraged financial instruments that carry a high degree of risk and may expose you to significant losses. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                    </p>

                    <p><span className="grey">Regional Restrictions:</span> Everest does not provide its services to residents of the USA, Mauritius, South Africa, North Korea, Iran, Japan, Belgium, Canada, and other countries whose domestic regulations classify such investment offering as prohibited.
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div className="copyright text-center">
        <p style={{color:'white'}}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 Everest™ </p>
    </div>
</footer>

    )
}
