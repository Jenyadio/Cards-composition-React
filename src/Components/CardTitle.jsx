import React from 'react'
import PropTypes from 'prop-types'

function CardTitle(props) {
    return (
        <h5 class="card-title">{props.title}</h5>
    )
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardTitle

