'use client'
import { useState } from 'react'
import style from './Bookmark.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Bookmark = ({children}) =>{
    const [bookmarked, setBookmarked] = useState('')
    const handleBookmark = () => {return setBookmarked(!bookmarked)}
    return (
        <button role="button" className={`${style.button} ${bookmarked ? style.bookmarked : ''} pr-0 md:pr-6`} onClick={handleBookmark}>
            <div className={style.icon}>
                <FontAwesomeIcon icon={faBookmark} className={`${style.vector} text-xl}`}/>
            </div>
            <span className={style.text}>{bookmarked ? 'Bookmarked': children}</span>
        </button>
    )
}

export default Bookmark