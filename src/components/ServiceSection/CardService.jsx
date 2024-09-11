/* eslint-disable react/prop-types */
import HeadingCommon from "../HeadingCommon/HeadingCommon"

const CardService = ({Icon,title,subText}) => {
  return (
    <>
      <span className="service-section__icon shadow-lg" data-aos="fade-up">
            {Icon}
             </span>
             <HeadingCommon
        title={title}
        subtext={subText}
        />
    </>
  )
}

export default CardService
