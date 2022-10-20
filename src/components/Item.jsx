import React from 'react'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils/index'
import PropTypes from 'prop-types'

const Item = ({ id, title, body, createdAt, archived }) => {
  return (
    <div className='p-4 rounded-lg border-[1px] border-t-[5px] border-white w-[284px] h-[222px] text-white' id={id}>
        <div className='my-1 font-bold text-lg'>
            <Link className='hover:underline' to={`/notes/${id}`}>{title}</Link>
        </div>
        <p className='text-gray-400 text-[14px] my-1'>
            {showFormattedDate(createdAt)}
        </p>
        <p className='mt-4 box-border text-[16px] h-[120px] w-[250px] overflow-hidden text-ellipsis'>
            {body}
        </p>
    </div>
  )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired
}

export default Item