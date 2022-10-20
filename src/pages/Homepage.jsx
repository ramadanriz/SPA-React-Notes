import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Home from '../components/Home'

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get("keyword")
  const changeSearchParams = (keyword) => {setSearchParams({ keyword })}
  return (
    <Home defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )
}

export default Homepage