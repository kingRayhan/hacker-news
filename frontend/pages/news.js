import React from 'react'
import NewsDetails from '../components/NewsDetails'

const SingleNewspage = props => {
    return (
        <div>
            <NewsDetails id={props.query.id} />
        </div>
    )
}

export default SingleNewspage
