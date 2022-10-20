import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const List = ({ notes }) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-2'>
      {
        notes.length > 0 ? notes.map((note) => (  
          <Item key={note.id} {...note} />
        )) : <p className='text-[16px] text-white text-center'>Tidak ada catatan!</p>
      }
    </div>
  )
}

List.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}

export default List