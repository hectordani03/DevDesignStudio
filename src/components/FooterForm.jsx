import SvgFooter from '../svg/bg-footer.svg'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import axios from 'axios'


export const FooterForm = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if(name.length === 0 || lastName.length === 0 || email.length === 0 || mobile.length === 0 || message.length === 0) {
      alert('Todos los campos son obligatorios')
    } else {
      // alert('Gracias por contactarnos, te responderemos en 24/48h')
      const url = "http://localhost/DevStudioBackend/enquiry.php";

      let fData = new FormData();
      fData.append('name', name);
      fData.append('lastname', lastName);
      fData.append('email', email);
      fData.append('mobile', mobile);
      fData.append('message', message);

      axios.post(url, fData)
      .then((response) => { alert(response.data) })
      .catch((error) => { alert(error) })

    }
  }

    return (
        <section className='relative dark:bg-slate-800' style={{height: '120vh' }}>
      <div
      className='relative inset-0 bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${SvgFooter})`
      }}
    >
        <section className='flex relative max-w-screen flex-col lg:flex-row justify-center items-center pt-96'>
          <div className='w-auto lg:w-1/2 flex flex-col justify-center lg:items-start items-center lg:text-start text-center lg:mb-0 mb-20 mt-0 lg:mt-0'>
            <h1 className='text-4xl sm:text-5xl font-bold ml-0 sm:ml-10 mb-12 text-white'>Pruebanos Ponte en <span className='text-emerald-700'> contacto</span></h1>
            <p className='text-white font-semibold w-3/4 ml-0 sm:ml-10 text-xl'>Un asesor especializado contactará contigo en 24/48h, para conocer tus necesidades y poder agendar una demo.
            Nuestras demos no son estándar.</p>
          </div>

          <form action="#" method="post" className='flex flex-col items-center justify-center gap-y-8 text-xl w-1/2'>
            <div className='flex sm:space-x-4 space-x-0 flex-col sm:flex-row gap-10 sm:gap-0'>
              <div className='flex flex-col text-white'>
                <input type="text" id="name" name="name" required="" placeholder='Nombre' className='rounded-full p-3 text-gray-400' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='flex flex-col text-white'>
                <input type="text" id="lastName" name="lastName" required="" placeholder='Apellidos' className='rounded-full p-3 text-gray-400' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div className='flex sm:space-x-4 space-x-0 flex-col sm:flex-row gap-10 sm:gap-0'>
              <div className='flex flex-col text-white'>
                <input type="email" id="email" name="email" required="" placeholder='Correo' className='rounded-full p-3 text-gray-400' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='flex flex-col text-white'>  
                <input type="tel" id="phoneNumber" name="phoneNumber" required="" placeholder='Telefono' className='rounded-full p-3 text-gray-400' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
              </div>
            </div>
            <div className='flex flex-col text-white'>
              <textarea
                id="message"
                name="message"
                rows={4}
                required=""
                className='rounded-xl text-gray-400 p-3 px-auto sm:px-20 text-start resize-none mx-10'
                placeholder='Mensaje'
                value={message} onChange={(e) => setMessage(e.target.value)}/>
              <input type="button" name='send' id='send' value="Enviar" className='bg-emerald-700 font-semibold rounded-full p-2 mt-5 mb-20' onClick={handleSubmit}></input>
            </div>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </section>
    )
}