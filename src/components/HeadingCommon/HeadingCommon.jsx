/* eslint-disable react/prop-types */
import "./HeadingCommon.css";

const HeadingCommon = ({title,subtext,isTextStart}) => {
  return (
    <section className={`heading-common pb-4 ${isTextStart ? 'text-start':'text-center'}`}>
        <h2 className={`${isTextStart ? 'heading-common_h2_left0':'heading-common_h2'}`}>
        {title}
        </h2>
        <p className="mt-3">
        {subtext}
        </p>
    
    </section>
  )
}

export default HeadingCommon
