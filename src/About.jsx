import React from 'react'

function About() {
  return (
    <>
    <div className='flex bg-[#030125c8] gap-[50px] pl-[120px] text-white'>
        <p>🕻 6383528895</p>
        <p>✉︎ viswark28@gmail.com</p>
        <div className='flex gap-[15px] pl-[500px]'>
          <a href=""><img src="/icons/1(1).png" alt="icon 1" /></a>
          <a href=""><img src="/icons/2(1).png" alt="icon 2" /></a>
          <a href=""><img src="/icons/3(1).png" alt="icon 3" /></a>
          <a href=""><img src="/icons/4(1).png" alt="icon 4" /></a>
        </div>
      </div>
      <div className='flex pl-[120px] gap-[30px] pt-[20px]'>
        <img src="/icons/japanese-food(1).jpg" alt="logo" />
        <h1 className='text-[25px] pt-[20px] font-bold'>Bistro Bliss</h1>
        <div className='flex pt-[25px] gap-[40px] pl-[80px] text-[22px]'>
          <a href=""><h2>Home</h2></a>
          <a href=""><h2>About</h2></a>
          <a href=""><h2>Menu</h2></a>
          <a href=""><h2>Pages</h2></a>
          <a href=""><h2>Contact</h2></a>
        </div>
        <div >
        <button className='bg-red-700 px-4 py-2 rounded-3xl ml-[100px] text-[white] mt-[15px]'>
        Book the table
        </button>
        </div>
        </div>
        <div className=' flex'>
          <div className='my-[30px] ml-[60px] '>
             <img src="/icons/Image(1).jpg" alt="" className='w-[800px] h-[400px]' />
          </div>
          <div className='w-[360px] h-[220px] bg-slate-500 absolute mt-[260px] ml-[200px] text-[white]'>
             <h3 className='mt-[40px] ml-[40px] font-bold'>Come and visit us</h3>
             <p className='mt-[20px] ml-[48px] font-bold'> 🕻 6383528895</p>
             <p className='mt-[20px] ml-[40px] font-bold'>✉︎ viswark28@gmail.com</p>
             <p className='mt-[20px] ml-[48px] font-bold'>⚲ Thoraipakkam Chennai-600097</p>
          </div>
          <div className='my-[50px]'>
            <h1 className='text-[50px] ml-[80px]'>We provide healthy food for your family.</h1>
            <h3 className='text-[13px] ml-[80px] my-[20px]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h3>
            <p className='text-[13px]  my-[20px] ml-[80px]'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button className='bg-red-700 px-4 py-2 rounded-3xl ml-[140px] text-[white]'>More About Us</button>
          </div>
        </div>
        <iframe className='mt-[40px] w-[1250px] h-[400px]' src="icons/WhatsApp Video 2024-07-01 at 3.43.05 PM.mp4"/>
        <div className='flex ml-[110px] gap-[140px] mt-[70px] mb-[30px] w-[250px]'>
            <img src="/icons/1(1).jpg" alt="" />
            <img src="/icons/2(1).jpg" alt="" />
            <img src="/icons/3(1).jpg" alt="" />
        </div>
        <div>
            <img src="/icons/Rectangle 478(1).jpg" alt="" />
        </div>
        <div>
            <img src="/icons/Testimonial(1).jpg" alt="" />
        </div>
        <div className='bg-[#060423e1] h-[450px] py-[100px] px-[30px] flex'>
            <div >
            <img src="/icons/Logo(1).png" alt="" />
            <p className='text-[white] text-[11px] py-[30px] w-[240px] px-[30px]'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            <div className='flex gap-8'>
              <a href=""><img src="/icons/4 (1)(1).png" alt="" /></a>
              <a href=""><img src="/icons/3 (1)(1).png" alt="" /></a>
              <a href=""><img src="icons/2 (1)(1).png" alt="" /></a>
              <a href=""><img src="icons/1 (1)(1).png" alt="" /></a>
            </div>
            </div>
            <div className='text-[white] ml-[200px] flex'>
              <div>
              <h3 >Pages</h3>
                <a href=""><p className='mt-[30px]'>Home</p></a>
                <a href=""><p className='my-[10px]'>About</p></a>
                <a href=""><p className='my-[10px]'>Menu</p></a>
                <a href=""><p className='my-[10px]'>Pricing</p></a>
                <a href=""><p className='my-[10px]'>Blog</p></a>
                <a href=""><p className='my-[10px]'>Contact</p></a>
                <a href=""><p className='my-[10px]'>Delivery</p></a>
              </div>
            </div>
            <div className='text-[white] ml-[160px]'>
            <h3 >Pages</h3>
                <a href=""><p className='mt-[30px]'>Start Here</p></a>
                <a href=""><p className='my-[10px]'>Styleguide</p></a>
                <a href=""><p className='my-[10px]'>Password Protected</p></a>
                <a href=""><p className='my-[10px]'>404 Not Found</p></a>
                <a href=""><p className='my-[10px]'>Licenses</p></a>
                <a href=""><p className='my-[10px]'>Log</p></a>
                <a href=""><p className='my-[10px]'>More</p></a>
              </div>
               <div>
                <img src="/icons/col 3(1).png" alt="" className='w-[200px] ml-[70px]' />
               </div>
          </div>






        </>
       )
}

export default About;