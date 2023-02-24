import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../images/catmeme.png"
              width="40"
              height="40"
              className="d-inline-block align-center mr-2"
            />{' '}
            <span className="h3">Meme Generator</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}



// export default function Header() {
//   return (
//     <nav>
//       <img src="../images/catmeme.png" />
//       <h1>Meme Generator</h1>
//       <h2>React Course - Project Three</h2>
//     </nav>
//   )
// }