import React, { useContext } from 'react'
import { Context } from '../context/BookContext'

const BookDetails = ({book}) => {

    const {removeBook} = useContext(Context)
    return (
        <div className='ui card container'  onClick={()=>removeBook(book.id)}>
            <div className='header' >{book.title}</div>
            <div className='meta' >{book.author}</div>
        </div>
    )
}

export default BookDetails
