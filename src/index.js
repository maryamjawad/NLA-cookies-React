import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {

    render() {
        return (

            <div>
                <html lang="en">
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>

                    <title>Cookies POlicy for Northern Lights Aid</title>
                </head>

                <body>

                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a class="navbar-brand" href="#">Fixed navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">English<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Norsk</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Ελληνικά</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main role="main" class="container">
                    <h1 class="mt-5">Sticky footer with fixed navbar</h1>
                    <p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with
                        this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on
                        the <code>body &gt; .container</code>.</p>
                    <p>Back to <a href="../sticky-footer/">the default sticky footer</a> minus the navbar.</p>
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
