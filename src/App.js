import React, { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

//Emoji Database!
var emojiDictionary = {
  "😊": "smiling",
  "🙄": "disbelief",
  "😞": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😡": "annoyance",
  "🤣": "hilarious",
  "😪": "tired",
  "🤩": "fascinated",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "😉": "Winking Face",
  "😇": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes"
};

var knownEmoji = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("Translation will come here!");

  function emojiInputHandler(event) {
    var emoji = event.target.value;

    if (emoji in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[emoji]);
    } else {
      setEmojiMeaning("We don't have this emoji in our database!");
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    // It's our view which the user see
    <div className="App">
      <h1 className="heading">Emoji Interpreter</h1>
      <input placeholder="Emoji Here..." onChange={emojiInputHandler}></input>
      <h2> {emojiMeaning} </h2>

      <h2> Emoji's We Know</h2>
      <div>
        {knownEmoji.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem 0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

/**
 * VISER - View -> Interact -> State In Event Handler -> Render
 */
