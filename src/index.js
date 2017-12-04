import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", progress: 0 };
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleGenerate(event) {
    event.preventDefault();
    this.setState({
      value: this.randomString(),
      progress: 0
    });
    window.setTimeout(this.doRandom.bind(this), 100);
  }

  doRandom() {
    if (this.state.progress > 15) {
      return;
    }
    let rand = this.randomString();
    const joffrey = "vraagHetJeffrey";

    let combination =
      joffrey.substring(0, this.state.progress) +
      rand.substring(this.state.progress, 15);

    let prog = this.state.progress;
    if (Math.random() > 0.6) {
      prog++;
    }

    this.setState({ value: combination, progress: prog });
    window.setTimeout(this.doRandom.bind(this), 50);
  }

  randomString() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
    return (
      <div style={styles}>
        <h1>Vraag het Jeffrey</h1>
        <h2>Ich brauche eine nieuwe wachtwoord pls {"\u2728"}</h2>

        <br />
        <input
          type="text"
          id="password"
          className="form-control"
          placeholder="Your new password will be here"
          value={this.state.value}
          style={styles}
        />
        <br />
        <a
          href="#"
          onClick={this.handleGenerate}
          className="btn btn-primary col-md-12"
          style={styles}
        >
          Generate
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
