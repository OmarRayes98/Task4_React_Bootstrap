/* eslint-disable react/prop-types */
import "./MainCustomCard.css";
import Card from 'react-bootstrap/Card';

const MainCustomCard = ({icon,title,text,paddingY,bodyCustomClass,titleCustomClass,subCustomClass}) => {
  return (
    <Card className={`${paddingY} px-2 border-0 shadow`}>
        <Card.Body className={bodyCustomClass}>
            <span className="d-block main-card_icon mb-2">
            {icon}
            </span>
            
            <div className="d-flex flex-column gap-2">
            <Card.Title className={titleCustomClass}>{title}</Card.Title>
            <Card.Subtitle className={`${subCustomClass ? subCustomClass :'pe-3'}mb-2  fw-normal`} >{text}</Card.Subtitle>
            </div>
        </Card.Body>
    </Card>
  )
}

export default MainCustomCard
