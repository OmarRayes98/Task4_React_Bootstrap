/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card"

const CardContact = ({title,subtitle,icon}) => {
  return (
<Card className={`py-4 px-2 border-0 shadow text-center`}>
        <Card.Body >
            <span className="contact__icon d-block main-card_icon mb-2">
            {icon}
            </span>
            
            <div className="d-flex flex-column gap-2">
            <Card.Title >{title}</Card.Title>
            <Card.Subtitle className={`mb-2  fw-normal`} >{subtitle}</Card.Subtitle>
            </div>
        </Card.Body>
            </Card>
  )
}

export default CardContact
