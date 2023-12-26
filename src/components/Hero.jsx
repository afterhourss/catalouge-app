import '../style/main.scss'
import Button from './Button'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>Discover your environtment</h1>
            <p>Take a look for our best home catalouge and suit your needs to your own home aesthetics</p>
            <Button text='Log in' colorBtn={'#000'} bgBtn={'#fff'}/>
            <Button text='Catalouge' colorBtn={'#fff'} borderBtn={true} bgBtn={'transparent'}/>
        </div>
    </div>
  )
}

export default Hero