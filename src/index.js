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
                    <p>Last updated: June 16, 2020</p>
                    <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Cookies Policy Generator.</p>
                    <p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
                    <p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
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

