import Image from 'next/image'
import scss from '../styles/Mobile.module.scss';
import logo from '../public/logo.svg'

export default function Mobile() {
    return (
        <div className="mobileContainer">
            <button type="button" className="blockButton"  href="#">Checkout</button>
        </div>
    )
}