import React from 'react'
import PropTypes from 'prop-types'
import CardTitle from './CardTitle'
import CardText from './CardText'
import CardLink from './CardLink'

function CardBody(props) {
    return (
        <div class="card-body">
            <CardTitle title={props.title} />
            <CardText text={props.text} />
            <CardLink link={props.link} />
        </div>
    )
}

CardBody.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default CardBody

