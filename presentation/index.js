// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
							STAR WARS
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Quotes generator
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              User Stories
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white" lineHeight={2}>
              <ListItem>As a User, I want to generate a random quote</ListItem>
              <ListItem>As a User, I want to see the character name of the quote</ListItem>
              <ListItem>As a User, I want to generate a random quote from an available character</ListItem>
            </List>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              REACT
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Fork the project https://github.com/92bondstreet/starwars via github</ListItem>
              <ListItem>Clone the project git clone https://github.com/YOUR_USERNAME/starwars</ListItem>
              <ListItem>Code features in a web page with React</ListItem>
              <ListItem>Don't forget to commit and push before 4/7 PM</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Focus on React library
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
