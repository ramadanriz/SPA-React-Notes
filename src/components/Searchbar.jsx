import React from 'react'
import PropTypes from 'prop-types'

const Searchbar = ({ searchHandler }) => {
  return (
    <div>
        <input className='my-4 text-sm bg-transparent border-[1px] border-white rounded-[4px] p-2 w-full text-white placeholder:text-gray-500' type="text" placeholder="Cari berdasarkan judul .." onChange={(event) => searchHandler(event.target.value)} />
    </div>
  )
}

Searchbar.propTypes = {
    searchHandler: PropTypes.func
}

export default Searchbar