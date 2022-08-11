import React from 'react'
import PropTypes from 'prop-types'

function CardLink(props) {
    return (
      <a href={props.link} class="btn btn-primary">Go somewhere</a>
    )
}

CardLink.propTypes = {
  link: PropTypes.string.isRequired,
}

export default CardLink

