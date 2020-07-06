import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./Page";
import Headtag from "./Headtag";
import Navtag from "./Navtag";


class Form extends React.Component {

    render() {
        return (

            <div>
                <html lang="en">
                <Headtag />

                <body>

                <header>
                   <Navtag/>
                </header>

                <main role="main" class="container">
                    <h1 class="mt-5">Cookies Policy</h1>
                    <p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with
                        this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on
                        the <code>body &gt; .container</code>.</p>
                    <p>Back to <a href="../sticky-footer/">the default sticky footer</a> minus the navbar.</p>

                    <Page />
                </main>


                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossorigin="anonymous"></script>
                <script>window.jQuery || document.write('
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
                    ')
                </script>
                <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>
                <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>
                </body>
                </html>

            </div>
        );
    }
}

ReactDOM.render(<Form/>, document.getElementById("root"));

