import React, { useState } from 'react'
import Searchbar from './Searchbar'
import List from './List'
import { getArchivedNotes } from '../utils/local-data'
import PropTypes from 'prop-types'

const Archive = ({ defaultKeyword, keywordChange }) => {
    const AllNotes = getArchivedNotes().sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1
        if (b.createdAt > a.createdAt) return 1
        return 0
    })
    const [notes] = useState(AllNotes)
    const [keyword, setKeyword] = useState(defaultKeyword || '')
    const onSearchHandler = (keyword) => {
        setKeyword(keyword)
        keywordChange(keyword)
    }
    const notesList = notes.filter((note) => {
        if (note.title.toLowerCase().includes(keyword.toLowerCase()))
        {
          return note
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-bold text-white'>Catatan Arsip</h1>
            <Searchbar searchHandler={onSearchHandler} />
            <List notes={notesList} />
        </div>
    )
}

Archive.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func,
}

export default Archive