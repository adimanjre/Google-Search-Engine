import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-5 text-gray-500'>
        <p>Copyright &copy; {new Date().getFullYear()} Aditya Manjekar</p>
    </footer>
  )
}

export default Footer