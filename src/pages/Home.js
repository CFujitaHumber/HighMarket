import {
  Button,
  ButtonGroup,
  Card,
  CardText,
  CardTitle,
} from "react-bootstrap";
import Sunshine from "../img/sky-414199_1280.jpg";
import cloud1 from "../img/cloud1.png";
import cloud2 from "../img/cloud3.png";
import cloud3 from "../img/cloud4.png";
import cloud4 from "../img/cloud5.png";

class Cloud {
  //wieght of y position when new y position is calcuated
  static #yWeight = 0.65;

  speed = Math.ceil(3 * Math.random()) + 1; // Pixels per animation frame (min 2, max 5)
  waitTime = 1000 + 4000 * Math.random(); // 1-5 seconds to wait before a new pass

  // A variable to hold the animation interval so we can clear it
  animationInterval;

  constructor(element) {
    // store element
    element.style.left = -element.width;
    this.movingImage = element;
  }

  // Create the animation function
  #moveImage() {
    // Move the image to the right by `speed` pixels
    this.xPos += this.speed;
    this.movingImage.style.left = this.xPos + "px";

    // If the image has moved beyond the right edge of the window:
    if (this.xPos > window.innerWidth) {
      this.reset();
      // Wait for `waitTime` then start a new animation pass
      setTimeout(() => {
        this.start(); // roughly 60fps
      }, this.waitTime);
    }
  }

  reset() {
    // Reset xPos so it starts off-screen again
    this.xPos = -this.movingImage.width;

    // Stop the current animation
    clearInterval(this.animationInterval);

    // set new Y position with calcuated weight
    this.movingImage.style.top =
      window.innerHeight * Math.random() * Cloud.#yWeight + "px";
  }

  //function to start animation
  start() {
    // Reset xPos so it starts off-screen again
    this.xPos = -this.movingImage.width;

    //move cloud out of view
    this.movingImage.style.left = this.xPos + "px";

    // set new Y position with calcuated weight
    this.movingImage.style.top =
      window.innerHeight * Math.random() * Cloud.#yWeight + "px";

    setTimeout(() => {
      // Start the animation
      this.animationInterval = setInterval(this.#moveImage.bind(this), 16); // 16ms ~ 60fps
    }, 12345 * Math.random()); // wait of 4-9seconds
  }
}

// Get a reference to the image
const movingImage = document.getElementsByClassName("movingImage");

//iterate over the amount of clouds and make them all animate
for (let index = 0; index < movingImage.length; index++) {
  //fetch cloud element and turn into cloud object
  let newCloud = new Cloud(movingImage.item(index));
  //start animation
  newCloud.start();
  console.log(index);
}

export default function Home() {
  return (
    <>
      <img class="movingImage" src={cloud1} alt="Moving Cloud" />
      <main class="p-5">
        <Card className="border-0 shadow-lg">
          <Card.Img src={Sunshine} alt="Sky with clouds" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center card-img-overlay text-center">
            <Card.Text className="h6">The High Market Co</Card.Text>
            <CardTitle className="display-1">Cloud Purchasing</CardTitle>
            <Card.Text className="h5">
              Some random text about buying our clouds Lorem ipsum dolor sit
              amet consectetur adipisicing elit. A at nam minus excepturi vitae
              perferendis voluptatem laboriosam consequatur fuga ipsum saepe,
              dolores harum vel tempore! Asperiores error at vitae ullam..
            </Card.Text>
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </div>
            <CardText>
              <small>
                Image by{" "}
                <a href="https://pixabay.com/users/giografiche-377204/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=414199">
                  giografiche
                </a>
                from{" "}
                <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=414199">
                  Pixabay
                </a>
              </small>
            </CardText>
          </Card.ImgOverlay>
        </Card>
      </main>

      <img class="movingImage" src={cloud3} alt="Moving Cloud" />
      <img class="movingImage" src={cloud4} alt="Moving Cloud" />
      <img class="movingImage" src={cloud2} alt="Moving Cloud" />
    </>
  );
}
