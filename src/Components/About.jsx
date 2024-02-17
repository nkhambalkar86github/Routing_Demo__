import { Alert, Col, Container, Row } from "react-bootstrap";

export function About(){
    return(
        <Container>
            <Alert variant="primary">
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem commodi tenetur nisi soluta iste laborum totam impedit nam iure inventore aliquam beatae dolore natus facere, aut excepturi repellat, illo corrupti. Maiores iure qui temporibus, totam alias facilis atque placeat unde eveniet dicta ratione provident quaerat dolores aut veritatis ea suscipit!</p>

                </Col>
                <Col lg={4}>
                    <h3>Vision</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias natus, cumque tempora dolor sit atque iusto fugiat placeat officia ex inventore ipsum omnis itaque esse rem at veritatis aspernatur!</p>
                </Col>
                <Col lg={4}>
                    <h3>Our History</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur quis dolore, iure minus quidem, enim accusantium tenetur vero necessitatibus, omnis dicta. Necessitatibus quidem temporibus voluptate ad tempore natus modi.</p>
                </Col>
            </Row>
        </Container>
        // <div>
        //     <h1>About us</h1>
        //     <h3>Mission</h3>
        //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia expedita tempore sed quidem dicta illum iste possimus eaque repudiandae obcaecati blanditiis minima, temporibus exercitationem aliquam ea hic, accusantium minus sunt molestias! Aperiam assumenda unde magni illum rerum dolorem et voluptatem, architecto corporis! Enim modi pariatur laudantium blanditiis aut facere incidunt.</p>
        //      <h3>Vision</h3>
        //      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus ipsa harum exercitationem, repellat ut sint id similique ea! Earum ut natus voluptates unde quo neque incidunt, consequuntur aliquam illum?</p>
        //      <h3>Our History</h3>
        //      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut iusto consequuntur, natus vitae itaque corrupti ipsa quas suscipit, incidunt optio deleniti voluptates pariatur eum et accusamus reiciendis quasi. Deserunt odio laborum recusandae saepe culpa ab quis ratione! Quo iure amet impedit tempora, doloribus minus optio eius atque esse sit sequi. Dolore numquam fugiat nihil vel voluptatum, earum nemo odit.</p>
        // </div>
    )
}