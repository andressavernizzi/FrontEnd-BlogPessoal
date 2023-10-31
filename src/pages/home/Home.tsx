import './Home.css'
import homeLogo from '../../assets/Data_security_05.jpg'

function Home() {
    return (
        <>
            <h1 className='titulo'>Home</h1>

            <img src={homeLogo} className='img' alt="Imagem Tela Inicial"/>
        </>
    )
}

export default Home