import { Col, Row } from "react-bootstrap"
import HeadingCommon from "../HeadingCommon/HeadingCommon"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./PricingSection"
const PricingSection = () => {
  return (
    <section className="pricing padding-y">
        <HeadingCommon
        title="Pricing"
        subtext="Duis aute irure dolor in reprehenderit in voluptate"
        />

        <Row>
            <Col className="col-12 col-md-6 col-lg-3 my-2">
            <Card className="text-center">
      <Card.Header className="py-3 fw-bold text-muted">Free</Card.Header>
      
      <Card.Body>
        <Card.Title ><sup className="fs-5">$</sup><span className="fs-4">0</span> <span className="text-muted fs-6 fw-normal">/month</span></Card.Title>
        
        <Card.Text>
          With supporting text 2
        </Card.Text>
        <Card.Text>
          With supporting text 3
        </Card.Text>
        <Card.Text>
          With supporting text 4
        </Card.Text>
        <Card.Text className="text-muted">
          <del>Additional content.5</del>
        </Card.Text>
        <Card.Text className="text-muted">
        <del>Additional content.5</del>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted py-3">
      <Button className="border-0  order-lg-1 bg-primary-color ms-auto ms-sm-4 " variant="primary" >Buy Now</Button>
      </Card.Footer>
            </Card>
            </Col>

            <Col className="col-12 col-md-6 col-lg-3 my-2">
            <Card className="text-center">
      <Card.Header className="py-3 fw-bold text-muted">Free</Card.Header>
      
      <Card.Body>
        <Card.Title ><sup className="fs-5">$</sup><span className="fs-4">0</span> <span className="text-muted fs-6 fw-normal">/month</span></Card.Title>
        
        <Card.Text>
          With supporting text 2
        </Card.Text>
        <Card.Text>
          With supporting text 3
        </Card.Text>
        <Card.Text>
          With supporting text 4
        </Card.Text>
        <Card.Text className="text-muted">
          <del>Additional content.5</del>
        </Card.Text>
        <Card.Text className="text-muted">
        <del>Additional content.5</del>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted py-3">
      <Button className="border-0  order-lg-1 bg-primary-color ms-auto ms-sm-4 " variant="primary" >Buy Now</Button>
      </Card.Footer>
            </Card>
            </Col>

            <Col className="col-12 col-md-6 col-lg-3 my-2">
            <Card className="text-center">
      <Card.Header className="py-3 fw-bold text-muted">Free</Card.Header>
      
      <Card.Body>
        <Card.Title ><sup className="fs-5">$</sup><span className="fs-4">0</span> <span className="text-muted fs-6 fw-normal">/month</span></Card.Title>
        
        <Card.Text>
          With supporting text 2
        </Card.Text>
        <Card.Text>
          With supporting text 3
        </Card.Text>
        <Card.Text>
          With supporting text 4
        </Card.Text>
        <Card.Text className="text-muted">
          <del>Additional content.5</del>
        </Card.Text>
        <Card.Text className="text-muted">
        <del>Additional content.5</del>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted py-3">
      <Button className="border-0  order-lg-1 bg-primary-color ms-auto ms-sm-4 " variant="primary" >Buy Now</Button>
      </Card.Footer>
            </Card>
            </Col>

            <Col className="col-12 col-md-6 col-lg-3 my-2">
            <Card className="text-center">
      <Card.Header className="py-3 fw-bold text-muted">Free</Card.Header>
      
      <Card.Body>
        <Card.Title ><sup className="fs-5">$</sup><span className="fs-4">0</span> <span className="text-muted fs-6 fw-normal">/month</span></Card.Title>
        
        <Card.Text>
          With supporting text 2
        </Card.Text>
        <Card.Text>
          With supporting text 3
        </Card.Text>
        <Card.Text>
          With supporting text 4
        </Card.Text>
        <Card.Text className="text-muted">
          <del>Additional content.5</del>
        </Card.Text>
        <Card.Text className="text-muted">
        <del>Additional content.5</del>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted py-3">
      <Button className="border-0  order-lg-1 bg-primary-color ms-auto ms-sm-4 " variant="primary" >Buy Now</Button>
      </Card.Footer>
            </Card>
            </Col>

        </Row>
      
    </section>
  )
}

export default PricingSection
