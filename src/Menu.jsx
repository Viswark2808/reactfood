import React from 'react';

function Menu() {
  const menuItems = [
    {
      imag: "/icons/Ellipse 42(1).jpg",
      title: "Breakfast",
      description: "In the new era of technology we look in the future with certainty and pride for our life."
    },
    {
      imag: "/icons/icon(1).jpg",
      title: "Main Dishes",
      description: "In the new era of technology we look in the future with certainty and pride for our life."
    },
    {
      imag: "/icons/Ellipse 42 (1)(1).jpg",
      title: "Drinks",
      description: "In the new era of technology we look in the future with certainty and pride for our life."
    },
    {
      imag: "/icons/icon (3)(1).jpg",
      title: "Desserts",
      description: "In the new era of technology we look in the future with certainty and pride for our life."
    }
  ];

  return (
    <>
      <div className='pt-[30px] pl-[440px] text-[50px]'>
        <h1>Browse Our Menu</h1>
      </div>
      <div className='flex ml-[90px]'>
        {menuItems.map((item, index) => (
          <div key={index} className='w-[200px] h-[249px] border-[2px] ml-[50px] border-[#ebebef]'>
            <img src={item.imag} alt="" className='w-[50px] h-[50px] ml-[70px] my-[12px]' />
            <h3 className='text-[20px] ml-[57px] my-[7px]'>{item.title}</h3>
            <p className='text-[13px] ml-[20px] my-[8px] mx-[3px]'>{item.description}</p>
            <button className='my-[4px] ml-[38px] text-[red] text-[18px] font-bold'>Explore Menu</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
