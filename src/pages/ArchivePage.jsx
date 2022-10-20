import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Archive from '../components/Archive'

const ArchivePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const changeSearchParams = (keyword) => {
        setSearchParams({ keyword })
    }

  return (
    <Archive defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )
}

export default ArchivePage