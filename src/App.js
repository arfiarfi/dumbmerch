import logo from './image/logo.png';
import './index.css';

function App() {
  return (
    <div className="bg-[#0B0B0B] h-screen p-11">

      <div className='w-2/4'>

        <div className=" gap-x-12 flex justify-center mr-44 mt-14">
          <img className='img ' src={logo}/>
        </div>

          <div className='text-white text-5xl font-semibold flex justify-center '>
            <h1>Easy, Fast and Reliable</h1>
          </div>
          
            <div className='text-slate-600 flex justify-center mr-24 '>
              <p>
                Go shopping for merchandise,
                just go to dumb merch <br/> shopping.
                the biggest merchandise in Indonesia
              </p>
           </div>
        
          <div className='flex space-x-3 '>
            <div><button type="button" color='#ffffff' className='text-white border-red-500 border-solid rounded
            bg-red-500 w-36 my-12 ml-20'>register</button></div>
            <div><button type="button" color='#ffffff' className='text-white w-36 my-12 ml-20'>login</button></div>
          </div>

      </div>

        <div className='flex justify-end mr-14 -my-[500px]' >
          <div className='bg-zinc-800 w-3/12 p-11 rounded-md mr-16 ' >

            <p className='text-white text-3xl font-semibold px-3 my-4 '>Register</p>

            <form>
              <label htmlFor="Name" className='mb-3 text-white'></label>
              <input type="text" placeholder='Name' id='Name' className='p-2 text-black h-9 w-full rounded-md ' />
            
              <label htmlFor="Email" className='mb-1 text-white'></label>
              <input type="Email" placeholder='@Email' id='Email' className='p-2 text-black h-9 w-full rounded-md my-3' />
          
              <label htmlFor="password" className='mx-14 text-white'></label>
              <input type="password" placeholder='Password' id='password' className='p-2 text-black h-9 w-full rounded-md ' />
        
              <button color='#ffffff' className='border-4 border-red-500 border-solid rounded
              bg-red-500 w-full my-9'>Register</button>
            
            </form>
          </div>

        </div>
      </div>
    
    
  );
}

export default App;
