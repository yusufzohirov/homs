
import './App.css'

import logo from "./assets/image.png";
import img1 from "./assets/img1.svg"
import img2 from "./assets/img2.svg"
import box1 from "./assets/box1.svg"
import box2 from "./assets/box3.svg"
import box3 from "./assets/box3.svg"
import wer from "./assets/wer.svg"
import luna from "./assets/luna.svg"
import nukta from "./assets/nukta.svg"
import foter from "./assets/foter.svg"



export function App() {
  return (
    <>
      <header>
        <nav>
        <img src={logo} alt="" className='logo' />
        <div className='div1'>
          <p>Início</p>
          <p>Sobre</p>
          <p>Serviços</p>
          <p>Depoimentos</p>
          <p>Contato</p>
        </div>
        </nav>

        <section className='section1'>
          <div className='div2'>
            <h1>Saúde natural para os seus cabelos</h1>
            <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
            <button className='btnSec1'>Agendar um  horário</button>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>

        </section>

        <section className='section2'>

       <div>
        <img src={img2} alt="" className='img2' />
       </div>
       <div className='div3'>
        <h1>Sobre nós</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
<br /><br /><br />
In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 
<br /><br /><br />

Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
       </div>

        </section>

        <section className='section3'>
        <div className='div4'>
          <h1>Serviços</h1>
          Com mais de 10 anos no mercado, <span className='bea'> Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais
        </div>

  <div className='divbox'>
    <div className="box1 boxes">
     <img src={box1} alt="" className='imgboxes' />
     <h1>Terapia capilar</h1>
     <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
    </div>

    <div className="box2 boxes">
     <img src={box2} alt="" className='imgboxes' />
     <h1>Cortes</h1>
     <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
    </div>

    <div className="box3 boxes">
     <img src={box3} alt="" className='imgboxes' />
      <h1>Tratamentos</h1>
      <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
    </div>
  </div>



        </section>

        <section className='section4'>
          <div className='divtext'>
          <h1>Depoimentos de quem já passou por aqui</h1>
          </div>


       <div className='divwerluna'>

        <div className="text">
          <p>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.   </p>
            <div className='divwer'>
              <img src={wer} alt="" />
              <p>Wanessa Souza</p>
            </div>
        </div>

         <div className="text">
          <p>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.   </p>
            <div className='divwer'>
              <img src={luna} alt="" />
              <p>Luna Falcão</p>
            </div>
        </div>
      
       </div>
      <div className='ff'>
        <img src={nukta} alt="" />
      </div>
        </section>

      <section className='section5'>
         <div className='en'>
          <h1>Entre em contato com a gente!</h1>
          <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <button className='btnSec1'>Entrar em contato</button>
         </div>

         <div>
          <p>11 99845-6754</p>
          <p>R. Amauri Souza, 346</p>
          <p>contato@beautysalon.com</p>
         </div>
      </section>

      <footer>
        <div className='gg'>
          <img src={foter} alt="" />
          <p>©2021 Beautysalon.</p>
          <p>Todos os direitos reservados.</p>
        </div>

      </footer>


      </header>
    </>
  );
}