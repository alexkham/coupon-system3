
import Carousel from 'react-bootstrap/Carousel'
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <h1>Home</h1>
            

<Carousel  variant="dark" >
  <Carousel.Item>
      <div max-height='70%'>
    <img
      className="d-block w-100"
      src="pexels-david-gan-7209222.jpg"
      alt="First slide"
      max-height='70%'
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pexels-david-gan-7209222.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pexels-david-gan-7209222.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


			
        </div>
    );
}

export default Main;