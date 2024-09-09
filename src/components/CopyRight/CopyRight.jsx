import  Container  from "react-bootstrap/Container";
import "./CopyRight.css";

const CopyRight = () => {
  return (
    <section className="copy-right py-3 text-center">
    <Container className="content py-4">
        <p>
        &copy; CopyRight <span className="fw-bold">Medicio</span>  All Rights Reserved
        </p>
        <p>
            <span>
                Designed By 
            </span>
            <span className="mx-1" style={{color:'var(--bs-color-primary)'}}>
            BootstrapMade
            </span>
        </p>

    </Container>
    </section>
  )
}

export default CopyRight
