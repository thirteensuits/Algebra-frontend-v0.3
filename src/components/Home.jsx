import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GIF from "./images/Algebra_logo.gif";
import img from './images/themala.gif';
import think from './images/thinking.jpg';
import { Widget } from '@typeform/embed-react'
import { NavHashLink as Link } from 'react-router-hash-link';


function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])


  return (
  <div className="home">
    {
      loading ? (
        <div style={{textAlign: "center"}}>
      <img src={GIF} loading={loading} class="opener" />
      </div>

      ) : (
      <>
      <div class="borders">
        <h2 class="top" style={{textAlign: "center"}}><b>reimagine commerce</b></h2>
        <h5 style={{textAlign: "center"}}><i>enabling full-chain transactions for everyday products</i></h5>
        <Row>
          <Col>
            <h1 class="invite">interested in building physical products for full-chain commerce?</h1>
            <p>we are looking to partner with influencers and product creators to explore the future of commerce.</p>
            <Link to='/#contact'><button className="loginBtn" style={{paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>Contact Us</button></Link>
          </Col>
          <Col>
            <div class="thick">
            <img src={img} style={{width: "80%"}}/>
            </div>
          </Col>
        </Row>
        <section id="thesis">
        <Row>
          <Col>
          <div class="thick">
          <img src={think} style={{width: "80%"}}/>
          </div>
          </Col>
          <Col>
          <h2 class="invite">want to know what we're imagining?</h2>
          <p>check out our brief thesis</p>
          <button className="loginBtn" onClick={(e) => {window.open("/config/roadmap.pdf", "_blank");}} style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>Open PDF</button>
          </Col>
        </Row>
        </section>
        <section id="contact">
          <Widget id="w7tbJoxg" style={{ width: '100%', height: "100vh" }} className="my-form" />
        </section>
      </div>
        <section id="demo">
          <h5 class="thick">👀 check out a Rinkeby demo of our protocol in action 👇</h5>
          <img src={img} style={{width: "30%"}}/>
          <div class="thick">
          <a href="https://themala.xyz"><button className="loginBtn" style={{paddingLeft: 20, paddingRight: 20}}>TheMala DEMO</button></a>
          </div>
        </section>
      </>
)
      }

    </div>
  );
}

export default Home;
