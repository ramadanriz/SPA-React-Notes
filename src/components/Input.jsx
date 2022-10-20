import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/local-data'
import { AiFillCheckCircle } from 'react-icons/ai'

const Input = () => {
    const navigate =useNavigate()

    const form = {
        title: '',
        body: ''
    }

    const [controlForm, setControlForm] = useState(form)
    const { title, body } = controlForm

    const inputNoteHandler = () => {
        addNote({title, body})
        navigate('/');
    }

    return (
        <div>
            <input className='w-full bg-transparent border-none text-[64px] text-white font-bold py-2 placeholder:text-gray' type="text" placeholder="Catatan rahasia" value={controlForm.title} onChange={(event) => setControlForm({...controlForm, title: event.target.value })}/>
            <textarea className='bg-transparent w-full border-0 py-2 min-h-[500px] text-white text-2xl placeholder:text-gray' placeholder="Sebenarnya saya adalah ..." contentEditable="true" suppressContentEditableWarning="true" onInput={(event) => setControlForm({...controlForm, body: event.target.value })} defaultValue={controlForm.body} ></textarea>
            <button className='text-6xl text-white fixed bottom-5 right-5' type='button' name='Simpan' onClick={inputNoteHandler}><AiFillCheckCircle /></button>
        </div>
    )
}

export default Input