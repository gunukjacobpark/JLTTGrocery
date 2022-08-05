
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logo from './JLTT GROCERY.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import './App.css';
import { useState } from 'react';
import { GroceryCard } from './GroceryCard';

const categories = [
  {title: 'Fruits', href: '/categories/fruits'},
  {title: 'Vegetables', href: '/categories/veggies'},
  {title: 'Meats', href: '/categories/meats'},
  {title: 'Dairy', href: '/categories/dairy'},
  {title: 'Literally Just Oreos', href: '/categories/oreos'},
]

let showCategory = 'all'
function App() {
  const x = categories.find(c => window.location.href.endsWith(c.href))
  if(x){
    console.log(x)
    showCategory = x.title
  }
  const show = (category) => {
    return !!(showCategory.toLowerCase() === 'all' || showCategory.toLowerCase() === category.toLowerCase())
  }

  return (
    <>
    <Navbar sticky="top" bg="primary" variant="dark">
        <Row className='ps-3 pe-3 justify-content-center'>
        <Col xs={1}>
        <Navbar.Brand href="/home">
        <Image roundedCircle src={logo} height={50} width={50} className='me-1'/>
        </Navbar.Brand>
        </Col>
        <Col xs={6}>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <NavDropdown title="Categories">
            {categories.map(c => <NavDropdown.Item href={c.href}>{c.title}</NavDropdown.Item>)}
          </NavDropdown>
        </Nav>
        </Col>
        <Col xs={4}>
        <Form className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
            <Button variant="info">Search</Button>
          </Form>
              </Col>
              <Col xs={1}>
          <Button variant="secondary">Login</Button>
              </Col>
        </Row>
    </Navbar>
    {show('fruits') &&
    <>
    <p><h3><a href="http://localhost:3000/categories/fruits">Fruits</a></h3></p>
    <Row className='flex-nowrap overflow-auto me-0'>
    <Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" width={315} height={250}/>
      <Card.Body>
        <Card.Title>Fruit Example</Card.Title>
        <Card.Text>$1.89</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <GroceryCard title='Apple' price='2.89' pictureUrl='https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png' />
    <GroceryCard title='Pineapple' price='3.89' pictureUrl='https://images.heb.com/is/image/HEBGrocery/001945935' />
    <GroceryCard title='Banana' price='4.89' pictureUrl='https://images.heb.com/is/image/HEBGrocery/000377497' />
    <GroceryCard title='Orange' price='5.89' pictureUrl='https://st.depositphotos.com/1000141/1963/i/450/depositphotos_19638723-stock-photo-fresh-orange-fruit-with-leaf.jpg' />
    <GroceryCard title='Lime' price='6.89' pictureUrl='https://www.homestratosphere.com/wp-content/uploads/2019/01/1-18-1.jpg' />
    </Row>
    </>
    }
    {show('Vegetables') &&
    <>
    <p><h3><a href="http://localhost:3000/categories/veggies">Vegetables</a></h3></p>
    <Row className='flex-nowrap overflow-auto me-0'>


    <Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80" width={315} height={250} />
      <Card.Body>
        <Card.Title>Vegetable Example</Card.Title>
        <Card.Text>$1.89</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <GroceryCard title='Carrot' price='2.89' pictureUrl='https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg' />
    <GroceryCard title='Eggplant' price='3.89' pictureUrl='https://vitamedica.com/wellness-blog/wp-content/uploads/2010/09/Eggplant.jpg' />
    <GroceryCard title='Radish' price='4.89' pictureUrl='https://everythingradish.com/wp-content/uploads/2020/12/white-radish-1.png' />
    <GroceryCard title='Potato' price='5.89' pictureUrl='https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
    <GroceryCard title='Brussel Sprouts' price='6.89' pictureUrl='https://www.meijer.com/content/dam/meijer/product/0003/33/8370/15/0003338370154_1_A1C1_1200.png' />
    </Row>
    </>
    }
    {show('meats') &&
    <>
    <p><h3><a href="http://localhost:3000/categories/meats">Meats</a></h3></p>
    <Row className='flex-nowrap overflow-auto me-0'>
    <Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/assortment-of-meat-and-seafood-picture-id1212824120?k=20&m=1212824120&s=612x612&w=0&h=yHkNBM-cUaMXEdVQj1GzZ_AAZ9tsV06dMuYIzcRzqbM=" width={315} height={250}/>
      <Card.Body>
        <Card.Title>Meat Example</Card.Title>
        <Card.Text>$1.89</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <GroceryCard title='New York Strip' price='2.89' pictureUrl='https://www.mishimareserve.com/sites/default/files/images/products/nystripultra_2.jpg' />
    <GroceryCard title='Chicken Breast' price='3.89' pictureUrl='https://diabetesstrong.com/wp-content/uploads/2015/06/how-to-cook-perfect-chicken-step-1.jpg' />
    <GroceryCard title='Chicken Thigh' price='4.89' pictureUrl='https://thecookful.com/wp-content/uploads/2018/09/chicken-thighs-instant-pot-feature-1392x780.jpg' />
    <GroceryCard title='Porterhouse' price='5.89' pictureUrl='https://assets.kansascitysteaks.com/dyn-images/pdp_hero/Raw_Porterhouse_Edit-5fc76aafa65d5a7235c2789e85c147cc.jpg' />
    <GroceryCard title='Ground Beef' price='6.89' pictureUrl='https://meat.tamu.edu/files/2020/06/Ground-Beef-@-Rosenthal-2.jpg' />
    </Row>
    </>
    }
    {show('dairy') &&
    <>
    <p><h3><a href="http://localhost:3000/categories/dairy">Dairy</a></h3></p>
    <Row className='flex-nowrap overflow-auto me-0'>
    <Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
      <Card.Img variant="top" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" width={315} height={250}/>
      <Card.Body>
        <Card.Title>Dairy Example</Card.Title>
        <Card.Text>$1.89</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <GroceryCard title='Skim Milk' price='2.89' pictureUrl='https://cdn11.bigcommerce.com/s-q1qpuo8ch5/images/stencil/2048x2048/products/981/507/skimmilkhalf__61068.1554299719.jpg?c=2' />
    <GroceryCard title='2% Milk' price='3.89' pictureUrl='https://i5.walmartimages.com/asr/b8cd5dd9-eb4c-44f8-84c5-6c3fa0ade504_2.b93305e90bf7f66b9ab5f36f25652660.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' />
    <GroceryCard title='Whole Milk' price='4.89' pictureUrl='https://cdn11.bigcommerce.com/s-q1qpuo8ch5/images/stencil/2048x2048/products/979/500/wholemilkhalfg__30570.1554287734.jpg?c=2' />
    <GroceryCard title='Provolone Cheese' price='5.89' pictureUrl='https://goldenagecheese.com/wp-content/uploads/2014/03/prov.jpg' />
    <GroceryCard title='Swiss Cheese' price='6.89' pictureUrl='https://dfwblobstorage.blob.core.windows.net/ewcmediacontainer/eatwisconsincheese/media/content/cheesemasters-2019/swiss-cheese-header_2.jpg' />
    </Row>
    </>
    }
    {show('Literally Just Oreos') &&
    <>
    <p><h3><a href="http://localhost:3000/categories/oreos">Just Oreos</a></h3></p>
    <Row className='flex-nowrap overflow-auto me-0'>
    <Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=" width={315} height={250}/>
      <Card.Body>
        <Card.Title>OREO Example</Card.Title>
        <Card.Text>$690</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <GroceryCard title='OREOS' price='690' pictureUrl='https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=' />
    <GroceryCard title='OREOS' price='690' pictureUrl='https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=' />
    <GroceryCard title='OREOS' price='690' pictureUrl='https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=' />
    <GroceryCard title='OREOS' price='690' pictureUrl='https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=' />
    <GroceryCard title='OREOS' price='690' pictureUrl='https://media.istockphoto.com/photos/two-sandwich-cookies-picture-id899732720?k=20&m=899732720&s=612x612&w=0&h=M5Udt71vei330L-W1b2U4Grh-1hfbzurcL2HoxIdwbs=' />
    </Row>
    </>
    }
    </>
  );
}

export default App;