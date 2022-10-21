import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light1.svg';
import helloDark from '../media/hello-dark1.svg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import helloDark1 from "../media/firstone.jpg"
const Home = ({darkMode}) => {
    return (
			<div>
				<AttentionSeeker shakeX>
					<Row>
						<Col lg={12} xs={12}>
							<h1 className="display-3 hello" align="center">
								HELLO!<code> I'm Unnikrishnan</code>
							</h1>
							<h2 className="lead" align="center">
								Aspiring Full-Stack Web Developer.
							</h2>
						</Col>
					</Row>
					<Row>
						<Container align="center">
							<Col lg={12} xs={12}>
								<img src={darkMode ? helloDark: helloLight } alt="hello" className="hello-img" />
							</Col>
						</Container>
					</Row>
				</AttentionSeeker>
				<br></br>
				<hr></hr>
			</div>
		);
}

export default Home
