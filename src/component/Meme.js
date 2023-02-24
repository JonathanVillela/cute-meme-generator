import React from 'react'


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

let url

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")
  const [meme, SetMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })


  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  })

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    SetMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    SetMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }



  return (
    <div className="form d-flex flex-column align-items-center mt-5">
      <p>{url}</p>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}

          />
        </Col>
      </Row>
      <div className="d-grid gap-2 mt-3"></div>
      <Button
        variant="primary" size="lg"
        onClick={getMemeImage}
      >
        Generate new meme image 🤭
      </Button>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
