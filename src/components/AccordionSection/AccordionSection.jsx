import { Container } from "react-bootstrap";
import "./AccordionSection.css";
import HeadingCommon from "../HeadingCommon/HeadingCommon";
import Accordion from 'react-bootstrap/Accordion';

const AccordionSection = () => {
  return (
    <section className="accordion padding-y">
    <Container>
        <HeadingCommon
        title="Frequently Asked Questions"
        subtext="Duis aute irure dolor in reprehenderit in voluptate"
        />

<Accordion >
      <Accordion.Item className="my-4 accodion__item" eventKey="0">
        <Accordion.Header>Question 1 ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="my-4 accodion__item" eventKey="1">
        <Accordion.Header>Question 2 ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="my-4 accodion__item" eventKey="2">
        <Accordion.Header>Question 3 ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="my-4 accodion__item" eventKey="3">
        <Accordion.Header>Question 4 ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="my-4 accodion__item" eventKey="5">
        <Accordion.Header>Question 5 ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>



    </section>
  )
}

export default AccordionSection
