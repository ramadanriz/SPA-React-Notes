import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { getActiveNotes } from '../utils/local-data'
import Searchbar from './Searchbar'
import List from './List'
import { AiFillPlusCircle } from 'react-icons/ai'

const Home = ({ defaultKeyword, keywordChange }) => {
    const navigate = useNavigate()
    const AllNotes = getActiveNotes().sort((a,b) => {
      if (a.createdAt > b.createdAt) return -1
      if (b.createdAt > a.createdAt) return 1
      return 0
    })
    const [notes] = useState(AllNotes)
    const [keyword, setKeyword] = useState(defaultKeyword || '')
    const searchHandler = (keyword) => {
      setKeyword(keyword)
      keywordChange(keyword)
    }
    const notesList = notes.filter((note) => {
      if (note.title.toLowerCase().includes(keyword.toLowerCase()))
      {
        return note
      }
    })
    const addNoteNavigate = () => {
      navigate("/new")
    }
  
    return (
      <section className="homepage">
        <h2 className='text-2xl font-bold text-white'>Catatan Aktif</h2>
        <Searchbar searchHandler={searchHandler} />
        <List notes={notesList} />
        <button type="button" className="text-6xl text-white fixed bottom-5 right-5" title="Tambah" onClick={addNoteNavigate}><AiFillPlusCircle /></button>
      </section>
    )
}

Home.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
}

export default Home