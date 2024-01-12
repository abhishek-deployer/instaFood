import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='text-white'>First Organic Food</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=1024x1024&w=is&k=20&c=YaXdh9gt99orf5e4CqVd0pR4ZV1oF2CjQqiFVT02e6o="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className='text-white'>Fresh vegetables</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/870915532/photo/man-holding-crate-ob-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=k2dXOI-wxUy7lX77Pm90vU6TJXmAAv5VtK60ZZHIyCA="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='text-white' >Eat organic food and stay healthy</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;