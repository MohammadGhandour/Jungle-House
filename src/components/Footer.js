import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [emailValue, setEmailValue] = useState('');
    function blur() {
        if (!emailValue.includes('@')) {
            alert(`Your email: '${emailValue}' doesn't contain an @. We're sorry but we can't accept this email 😥 !`)
        }
    }

    return (
        <footer>
            <div>
                For plant enthusiasts 🌿🌱🌵
            </div>
            <div>Subscribe to our newsletter :</div>
            <input
                name='email'
                type='email'
                placeholder='Email'
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                onBlur={(e) => blur(e.target.value)}
            />
        </footer>
    )
}

export default Footer