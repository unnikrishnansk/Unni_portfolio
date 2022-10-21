import { useState, React } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import dsc from '../media/DSC.png';
import scr from '../media/SCR.png';
import gotg from '../media/big.png';
import rfp from '../media/RFP.png';
import ca from '../media/nykaa.png';
import tcd from '../media/freshly.png';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Modal from 'react-bootstrap/Modal';
import hotspot from '../media/hotspot.png';
import timecamp from '../media/timecamp.jpg';
import { ChakraProvider } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3Alt,
	faDocker,
	faHtml5,
	faJs,
	faReact,
	faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

const Experience = ({ darkMode }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div data-theme={darkMode ? 'dark' : 'light'}>
			<br></br>
			<Fade>
				<Container>
					<br></br>
					<h2 className="lead" align="center">
						<b>PROJECTS</b>
					</h2>
					<br></br>
					<Zoom>
						<Row>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={tcd} />
													<Card.Body>
														<Card.Title align="center">
														Freshly Clone
														</Card.Title>
														<Card.Text>
															<p align="center">
															A web application to purchase and provide delivery service of Food products.
															
															</p>

															<p className='techstacks'>TECH STACKS USED </p> <p>HTML, css, Javascript, Netlify, Github</p>
														</Card.Text>
													</Card.Body>
												</div>
												
												{/* <div className="flip-card-back">
													<h2>Tech Stacks used</h2>
													
												</div> */}
												</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://lovely-moonbeam-38080e.netlify.app"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/unnikrishnansk/Freshly-clone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>


							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={gotg} />
													<Card.Body>
														<Card.Title align="center">
															BigBasket.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
																A Web Application where user can
																order ther Grocery products.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														This is an Grocery Ordering Web
														Application where the customers can
														login and go through all the items i.e
														vegetables,fruits,staples,cosmetic so
														on & then they can add the items
														according to their cart and pay for
														the above items via card or cash, the
														items get delivered. Thank You for
														ordering
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<Modal
											show={show}
											onHide={handleClose}
											className="modal"
										>
											<Modal.Body>
												Heya! The project is in development mode,
												you can visit the repository and have a
												look. Feel free to contribute!
											</Modal.Body>
											<Modal.Footer>
												<Button
													variant="outline-dark"
													onClick={handleClose}
												>
													Close
												</Button>
												<a
													href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
													target="_blank"
													rel="noreferrer noopener"
												>
													<Button variant="outline-dark">
														View Github Repo
													</Button>
												</a>
											</Modal.Footer>
										</Modal>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											onClick={handleShow}
											className="sbtn"
										>
											View Project
										</Button>
										<a
											href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
											</Col> */}

							
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={timecamp} />
													<Card.Body>
														<Card.Title align="center">
														Timecamp Clone
														</Card.Title>
														<Card.Text>
															<p align="center">
															TimeCamp is a simple time tracking app to help you gain insights into your projects and tasks.
															</p>

															<p className='techstacks'>TECH STACKS USED </p> <p>React, Redux , Javascript, css, mongoDB, Netlify, Git, ChakraUI</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
									
													
													
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://timecamp-clone-1.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/unnikrishnansk/Timecamp_Clone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
						</Row>
					</Zoom>
					<br></br>
					<Zoom>
						<Row> 

						<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={hotspot} />
													<Card.Body>
														<Card.Title align="center">
														Hubspot Clone
														</Card.Title>
														<Card.Text>
															<p align="center">
															A web application to purchase and provide services to various software applications.
															</p>
															<p className='techstacks'>TECH STACKS USED </p> <p>React, Javascript, Redux, css, Netlify, Git, ChakraUI</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
									
													
													
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://bespoke-nougat-f81552.netlify.app"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/unnikrishnansk/Hubspot-Clone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
						</Row>
					</Zoom>
					<br></br>
					<Zoom>
						<Row>

							
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={rfp} />
													<Card.Body>
														<Card.Title align="center">
															Rooted - Portal for farmers
														</Card.Title>
														<Card.Text>
															<p align="center">
																Developed a Portal for Farmers
																to sell their goods at a better
																rate.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														User-friendly and clean basic scripted
														website
														<br></br>Tech Stack - HTML, CSS,
														JavaScript
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://rooted-portal.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/SheHacks-Hack-O-holics/SheHacks"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={dsc} />
													<Card.Body>
														<Card.Title align="center">
															Google Developer Student Clubs
														</Card.Title>
														<Card.Text>
															<p align="center">
																Worked as a core team member of
																GDSC UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Organized Study Jams, Hackathons and
														Webinars.
														<br></br>Hosted events of Google Cloud
														and Machine Learning.
														<br></br>Guided students in Google
														Cloud and Android Development Study
														Jams
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://dscumit.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Website
											</Button>
										</a>
										<a
											href="https://www.instagram.com/dsc__umit/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={scr} />
													<Card.Body>
														<Card.Title align="center">
															Student Council
														</Card.Title>
														<Card.Text>
															<p align="center">
																Representative of Department of
																Computer Science and Technology,
																UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Managed and helped students in their
														curriculum and other difficulties.
														<br></br>Co-organized annual fest
														'Arcane Illusions'.
														<br></br>Coordinated between faculties
														and students about studies and other
														activities.
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://www.instagram.com/umit_sc/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
						</Row>
					</Zoom>
				</Container>
			</Fade>
			<br></br>
			<hr></hr>
			<br></br>



			<div>
			<ChakraProvider>
      <div>
        <h1>Hello CodeSandbox!</h1>
        <p>Start editing to see some magic happen : test</p>
      </div>
      <GitHubCalendar username="grubersjoe" />
    </ChakraProvider>
			</div>
		</div>
	);
};

export default Experience;
