import App from "next/app";
import "./../../components/styles/main.scss";
import "./../../components/styles/hero.scss";
import "./../../components/styles/navbar.scss";
import "./../../components/styles/works.scss";
import "./../../components/styles/footer.scss";
import "./../../components/styles/about.scss";
import "aos/dist/aos.css";





class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="App">
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
