import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b-[1px] flex justify-between items-center p-4 text-white underline text-2xl'>
        <Link to='/' className='font-bold text-[32px]'>Aplikasi Catatan</Link>
        <Link to='/archives' title="arsip catatan">Arsip</Link>
    </div>
  )
}

export default Navbar