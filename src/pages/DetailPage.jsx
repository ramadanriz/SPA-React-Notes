import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { showFormattedDate } from '../utils/index'
import { deleteNote, getNote, archiveNote, unarchiveNote } from '../utils/local-data'
import { IoMdArchive, IoMdTrash, IoMdCheckmarkCircle } from 'react-icons/io'
import { MdUnarchive } from 'react-icons/md'

const DetailPage = () => {
    const { id } = useParams()
    const detailNoteHandler = getNote(id)
    const navigate = useNavigate()
    const [detailNotes] = useState(detailNoteHandler)
    const {title, body, createdAt, archived} = detailNotes

    const deleteHandler = () => {
        const temp = []
        temp.push({ title }) 
        deleteNote(id)
        navigate("/")

    }
  
    const archivedNote = () => {
        const temp = []
        temp.push({ title })
        archiveNote(id)
        navigate("/")
    }

    const activatedNote = () => {
        const temp = []
        temp.push({ title })
        unarchiveNote(id)
        navigate("/archives")
    }

  return (
    <div className='max-w-[1200px] h-[291px] text-white my-7'>
        <div className='mt-8 mx-[60px]'>
            <h1 className='text-5xl mb-2 font-bold'>{title}</h1>
            <p className='text-gray-500'>{showFormattedDate(createdAt)}</p>
            <p className='leading-normal mt-9 text-[18px]'>{body}</p>
        </div>
        
        <div className='fixed flex bottom-8 right-8'>
            {
                archived === true && <button className="flex items-center justify-center text-[32px] border-none w-[50px] h-[50px] rounded-[50px] p-2 cursor-pointer" title="aktifkan" onClick={activatedNote}><MdUnarchive /> </button>
            }
            {
                archived === false && <button className="flex items-center justify-center text-[32px] border-none w-[50px] h-[50px] rounded-[50px] p-2 cursor-pointer" title="arsipkan" onClick={archivedNote}><IoMdArchive /> </button>
            }
            <button className="flex items-center justify-center text-[32px] border-none w-[50px] h-[50px] rounded-[50px] p-2 cursor-pointer" type="button" title="hapus" onClick={deleteHandler}><IoMdTrash /></button>
        </div>
    </div>
  )
}

export default DetailPage