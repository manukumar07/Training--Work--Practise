import React from 'react'

const Home = () => {
    
  return (
    <>
        <h1 className='h1'>To-do List</h1>
        <div className='main-container'>
                {/* <h2>Add Item here!</h2> */}
                    {/* <img src='images/img.jpeg' alt='logo' className='log'/> */}
            <div> 
                    <input type='text' placeholder='Add Item..' className='inp'></input>
                    <button type='button' className='btn'>Add</button>
            </div>
        </div>
    </>
  )
}

export default Home
