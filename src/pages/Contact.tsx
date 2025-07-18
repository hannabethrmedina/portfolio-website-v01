import Lottie from 'lottie-react';
import animationDataBubbles from '../assets/animation-bubbles.json'
import animationDataOrange from '../assets/animation-orange.json'
import animationDataBlack from '../assets/animation-black.json'
import animationDataPinkOrange from '../assets/animation-pinkorange.json'

function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <Lottie animationData={animationDataBlack} loop className='w-64 h-64 mb-6' speed={0.5}/>
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg">Email: <a href="mailto:hannabeth.medina@gmail.com" className="text-blue-500 underline">hannabeth.medina@gmail.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+19563589750" className="text-blue-500 underline">(956) 358-9750</a></p>
        </div>
    )
}

export default Contact;