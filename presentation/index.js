// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";
import CodeSlide from 'spectacle-code-slide';


const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/deck.example")}
            ranges={[
              { loc: [0, 19], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [4, 7] },
              { loc: [8, 10] },
              // ...
            ]}/>
        <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary"><code>Advanced Demo</code></Heading>
            <Text lineHeight={1.5}>Uses react-typist and Try option-m or click buttons</Text>
            <Terminal title="1. elijahm@elijahm: ~(zsh)" output={ [
              <Typist cursor={ cursor }>npm test</Typist>,
              <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
              <Typist cursor={ cursor }>rm -rf node_modules && npm install && say "done"</Typist>,
              <div style={{ display: "flex", alignItems: "center" }}>
                <Loading type="bars" color="#fff" height="30" width="30" />
                <span style={{ marginLeft: "1rem" }}>Installing dependencies...</span>
              </div>,
              <div style={{ color: "#33B969"}}>⚡️ Dependencies installed!</div>
              ] }
            />
          </Slide>
          <Slide transition={[ "spin", "slide" ]} bgColor="primary">
            <Heading size={ 2 } caps fit textColor="tertiary">Terminal</Heading>
            <Terminal title="1. elijahm@elijahm: ~(zsh)" output={[
              "npm test",
              <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
              <div>
                <div>=============================== Coverage summary ===============================</div>
                <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
                <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
                <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
                <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
                <div>================================================================================</div>
              </div>]}
            />
          </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
