import '../style/main.scss'
import Button from './Button'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>Discover Your Own Best Environtment</h1>
            <p>Take a look for our best home catalouge and suit your needs to your own home aesthetics</p>
            <Button text='Catalouge' colorBtn={'#fff'} bgBtn={'#000'}/>
        </div>
        <div className='hero-image'></div>
    </div>
  )
}

export default Hero