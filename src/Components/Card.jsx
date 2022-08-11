import React from 'react'
import PropTypes from 'prop-types'
import CardBody from './CardBody'

function Card(props) {
    return (
        <div class="card" style={{width: "18rem"}}>
            {props.children}
            <CardBody
              title={props.title}
              text={props.text}
              link={props.link}
            />
        </div>
    )
}

Card.propTypes = {
    props: PropTypes.object.isRequired,
}

export default Card

