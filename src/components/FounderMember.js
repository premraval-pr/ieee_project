import React from "react";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";
import aishwarya from "../assets/aishwarya.jpg";
import anjana from "../assets/anjana.jpg";
import anup from "../assets/anup.jpg";
import parul from "../assets/parul.jpg";
import sandhya from "../assets/sandhya.jpg";
import nirzar from "../assets/nirzar.jpg";
import nilima from "../assets/nilima.jpg";
import saroj from "../assets/saroj.jpg";
import suchit from "../assets/suchit.jpeg";
import anupam from "../assets/anupam.jpg";
import dharmendra from "../assets/dharmendra.jpg";
import sriram from "../assets/sriram.jpg";
import pravin from "../assets/pravin.jpg";
import ahire from "../assets/ahire.jpg";
import panjabrao from "../assets/panjabrao.png";

const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text {
    color: white;
  }
  .padding {
    margin: 15px;
  }
`;
const FounderMembers = () => {
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="display-3 main-bg text">Founder Members</div>
          <ListGroup>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={shivmohan} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Shiv Mohan<br></br>
                  Visiting Scientist <br></br>
                  PLANEX, Physical Research Laboratory <br></br>
                  Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                  Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
                  <br></br>
                  Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                  Email: shivmohan.isro@gmail.com <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={aishwarya} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr Aishwarya Narain<br></br>
                  Nascent Info Technologies Private Limited<br></br>A 605,
                  Shapath IV, Opp. Karnavati Club,<br></br>
                  S.G. Highway,<br></br>
                  Ahmedabad 380015<br></br>
                  Ph.: +917567301000 (O);<br></br>
                  Mobile +919879133828<br></br>
                  E-mail:aishwarya19@yahoo.com; narain@nascentinfo.net<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={anjana} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Anjana Vyas<br></br>
                  Professor, Faculty of Planning and Public Policy &amp;{" "}
                  <br></br>
                  Programme Coordinator (Geomatics), Faculty of Technology
                  <br></br>
                  CEPT University, K L Campus, Navrangpura,<br></br>
                  Ahmedabad- 380009 Gujarat<br></br>
                  Phone: (O) +91-79-26302470/ 26302740 (Extn. 298) <br></br>
                  Fax: 079-26302075 (O); Mobile: +91-9825522844<br></br>
                  Email: anjanavyas@cept.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={anup} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Anup Kumar Das<br></br>
                  Scientist / Engineer<br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Dept. of Space, Govt. of India<br></br>
                  Ahmedabad – 380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4003 (O); +91-79-2686 1445 (R)<br></br>
                  Email: anup@sac.isro.gov.in; anup_k_das@rediffmail.com{" "}
                  <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={parul} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Parul Patel
                  <br />
                  Professor<br></br>
                  Civil Engineering Department,<br></br>
                  Institute of TechnologyNirma University,<br></br>
                  Ahmedabad-382 481<br></br>
                  Ph: +91-2717-24191115 (extn. 214);<br></br>
                  Mobile: +91-9429438562<br></br>
                  Email: parul.patel@nirmauni.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={sandhya} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. G. Sandhya Kiran<br></br>
                  Professor<br></br>
                  Eco-Physiology and Remote-Sensing Laboratory,<br></br>
                  Department of Botany,<br></br>
                  M.S. University of Baroda,<br></br>
                  Vadodara, 390 002, Gujarat<br></br>
                  Ph: +91-265-2434583 ;<br></br>
                  Mobile:+91-9879048141<br></br>
                  Email: sandhyakiran60@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={nirzar} height="150px" width="150px" />
                </Col>
                <Col>
                  Nirzar Lakhia<br></br>
                  Director<br></br>
                  Indian Geomatics Research Institute (IGRI)<br></br>
                  A/1 Sona Duplex,<br></br>
                  190 Nehru park Society,<br></br>
                  Vastrapur, Ahmedabad – 380015<br></br>
                  (M) – 9825647127; 8490849095/96<br></br>
                  Email: nirzarlakhia@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={nilima} height="150px" width="150px" />
                </Col>
                <Col>
                  Nilima Rani Chaube<br></br>
                  Scientist / Engineer,<br></br>
                  Space Applications Centre (ISRO),<br></br>
                  Dept. of Space, Govt. Of India,<br></br>
                  Ahmedabad-380015, Gujarat<br></br>
                  Ph: +91-79-2691 4039 (O)<br></br>
                  Email:chaube@sac.isro.gov.in, neelimachaube@yahoo.co.in
                  <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={saroj} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Saroj Maity<br></br>
                  Scientist/Engineer Space Applications Centre Department of
                  Space,
                  <br></br>
                  Govt. of India<br></br>
                  Ahmedabad -380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4035 (O);<br></br>
                  Mobile: +91-9924310223<br></br>
                  Email:maitys@sac.isro.gov.in; smaity00@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={suchit} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Suchit Purohit<br></br>
                  Lecturer<br></br>
                  Department of Computer Science<br></br>
                  Gujarat University,<br></br>
                  Navrangpura<br></br>
                  Ahmedabad -380009 (Gujarat)<br></br>
                  Ph: +91-79-26300877;<br></br>
                  Mobile:+919913419959<br></br>
                  Email: suchitpurohit@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={anupam} height="150px" width="150px" />
                </Col>
                <Col>
                  Prof. Dr-Ing. Anupam K. Singh<br></br>
                  Professor<br></br>
                  Water Engineering &amp; Head, Department of Civil Engineering{" "}
                  <br></br>
                  PDP University Gandhinagar-382 007 <br></br>
                  Ph: +91-79-2327 5421 (O); +91-79-4005 6928 (R) <br></br>
                  Email: anupam.singh@gmx.net<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={dharmendra} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Dharmendra G. Trivedi<br></br>
                  Associate Professor, <br></br>
                  St. Xavier`s College, <br></br>
                  Gujarat University 38009 (Gujarat), India<br></br>
                  Ph: +91-79-26308057(O); Mobile: 0-9426384201<br></br>
                  Email: dgtrivedi60@rediffmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={sriram} height="150px" width="150px" />
                </Col>
                <Col>
                  Sriram Saran<br></br>
                  Senior Research Scholar <br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Department of Space, Govt. of India<br></br>
                  Ahmedabad -380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4134 (O); Mobile: +91-9727263735<br></br>
                  Email: saran@sac.isro.gov.in; saran_sriram7@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={pravin} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Pravin Chaudhari Associate Professor <br></br>
                  Department of Electronics<br></br>
                  Zulal Bhilajirao Patil College,<br></br>
                  Dhule-424002, Maharashtra, India<br></br>
                  Ph: +91-02562-222343 (extn. 34); Mobile: +91-9422757654
                  <br></br>
                  Email: prc_61@rediffmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={ahire} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. D.V. Ahire<br></br>
                  Associate Professor and Head,<br></br>
                  Department of Physics, JET’s Z.B. Patil College,<br></br>
                  Dhule-424002, Maharashtra, India<br></br>
                  Ph: +91-2562-221310; Mobile: +91-9423979468<br></br>
                  Email: dvahire@rediffmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={panjabrao} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Panjabrao Pawar<br></br>
                  Principal <br></br>
                  Department of Electronics<br></br>
                  Zulal Bhilajirao Patil College,<br></br>
                  Dhule-424002, Maharashtra, India<br></br>
                  Ph: +91-02562-222343 (extn. 34); Mobile: +91-9423193364
                  <br></br>
                  Email: phpawar31@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>

        <Accordion defaultActiveKey="1">
          <Card width="500px">
            <Card.Header width="500px">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row>
                  <Col>
                    <img src={shivmohan} height="150px" width="150px" />
                  </Col>
                  <Col>
                    Dr. Shiv Mohan<br></br>
                    Visiting Scientist <br></br>
                  </Col>
                </Row>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="main-bg text">
                PLANEX, Physical Research Laboratory <br></br>
                Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
                <br></br>
                Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                Email: shivmohan.isro@gmail.com <br></br>
                Shiv Mohan (Member, 2012; Senior Member, 2013) received the
                M.Sc. degree from Aligarh Muslim University in 1972 and the
                Ph.D. degree from Agra University in 1985. He joined Space
                Applications Centre in 1978 and was associated with microwave
                remote sensing programme of ISRO since early eighties. He has
                contributed towards development of various applications using
                microwave sensors in India. He initiated multi-frequency
                experiment using ground based scatterometer, X/C-band Airborne
                SAR, DM SAR, DLR E-SAR. He was also PI of several AO projects
                from ESA, JAXA, and ASI. He has conducted a large number of
                applications of SAR for hydrology, forestry, agriculture,
                disaster management. He also initiated SAR quality parameters
                and SAR calibration studies in ISRO. More recently, he initiated
                applications of SAR polarimetry and interferometry for land
                applications. He also initiated SAR applications for lunar
                surface using Chandrayaan-1 Mini-SAR related to lunar scattering
                properties, damaged crater detection and polar water ice
                detection under PLANEX programme. He has contributed
                significantly towards the definition of payload for Mini-SAR in
                Chandrayaan-2 and SAR payload for RISAT-1 and RISAT-3. He has
                served as Chief Scientist, Haryana Space Applications Centre
                during 1998-2001. He has also worked as Project Director, RISAT
                utilization programme of ISRO during 2009-2011. Presently he is
                a Visiting Scientist at PLANEX, Physical Research Laboratory and
                Visiting Faculty at CEPT University, Ahmedabad. He is also PI of
                ALOS-AO-2 PALSAR project on SAR polarimetry and interferometry
                along with JAXA and Niigata University, Japan. He is a recipient
                of ISRS National Remote Sensing Award (1995) for his pioneering
                efforts in the area of microwave remote sensing applications. He
                is also a recipient certificate of special services from
                Government of Haryana (2003). He has about 260 publications and
                reports to his credit. He is life member of five Indian
                Scientific/Professional Societies and Fellow of Society of Earth
                Scientist, India. He is also founder Chair of IEEE Geosciences
                and Remote Sensing Society- Gujarat Chapter.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Styles>
  );
};
export default FounderMembers;
