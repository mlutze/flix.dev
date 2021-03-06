import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, Col, Container, Row} from "reactstrap";
import InstallGif from '../gif/install.gif'
import NextStepsGif from '../gif/next-steps.gif'
import ReactGA from 'react-ga';

class GettingStarted extends Component {

    componentDidMount() {
        document.title = "Flix | Getting Started";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <h1>Getting Started</h1>

                <p>
                    Flix runs on any platform that supports the <a href="https://adoptopenjdk.net/">Java Virtual
                    Machine</a>. Installation is as simple as <a href="https://github.com/flix/flix/releases">downloading
                    and running a jar file</a>.
                </p>

                <p>
                    You can also try Flix online at <a href="https://play.flix.dev/">play.flix.dev</a>.
                </p>

                <Row className="mb-lg-5">
                    <Col md="12">
                        <h2>Up and Running</h2>
                    </Col>

                    <Col md="6">
                        <ol>
                            <li className="mb-2">
                                Ensure that you have Java 12 or later installed.
                                You can check your Java version with
                                the command <code>java -version</code>.
                                You should see something like <code>openjdk version "12.0.0"</code>.
                            </li>
                            <li className="mb-2">
                                Download <ReactGA.OutboundLink eventLabel="https://github.com/flix/flix/releases"
                                                               to="https://github.com/flix/flix/releases"> flix.jar </ReactGA.OutboundLink>
                                from the GitHub releases page.
                            </li>
                            <li className="mb-2">Run the command <code>java -jar flix.jar --version</code> to verify
                                that you have the
                                expected version of Flix.
                            </li>
                            <li className="mb-2">
                                Run the command <code>java -jar flix.jar</code> to start Flix in interactive mode
                                with a read-eval-print loop.
                            </li>
                            <li className="mb-2">
                                Enter any expression to have it evaluated, e.g. <code>21 + 42</code>.
                            </li>
                        </ol>
                    </Col>

                    <Col md="6">
                        <Card className="p-2">
                            <CardImg top src={InstallGif}/>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-lg-5">
                    <Col md="12">
                        <h2>Next Steps: Using a File</h2>
                    </Col>

                    <Col md="6">
                        <Card className="p-2">
                            <CardImg top src={NextStepsGif}/>
                        </Card>
                    </Col>

                    <Col md="6">
                        <ol>
                            <li className="mb-2">
                                Create the file <code>test.flix</code> with the content:

                                <Card>
                                    <CardBody>
                                        <CardText>
                                            <code>
                                                def main(): Unit = ()
                                            </code>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </li>
                            <li className="mb-2">
                                Run the command <code>java -jar flix.jar test.flix --interactive</code> to start Flix in
                                interactive mode with the file loaded.
                            </li>
                            <li className="mb-2">
                                Type <code>main()</code> into the command prompt to run the main function.
                            </li>
                            <li className="mb-2">
                                Type <code>:w</code> to watch the file for changes.
                                You can now edit <code>test.flix</code> as much as you want.
                                Every time you save, Flix will automatically reload the file, and print any errors.
                            </li>
                        </ol>
                    </Col>
                </Row>

                <Row className="mb-lg-5">
                    <Col md="12">
                        <h2>Onwards: The Programming Flix Book</h2>

                        <p>
                            The <a href="https://flix.dev/programming-flix">Programming
                            Flix</a> book provides an in-depth introduction to programming in Flix.
                        </p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default GettingStarted;
