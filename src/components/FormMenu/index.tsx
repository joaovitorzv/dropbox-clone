import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const FormMenu: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={() => handleToggle()}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Sign up</span>
        <span className="subtitle">or <a href="/">sign in to your account</a></span>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Continue</button>

        <span className="terms">
          This page is protected by reCAPTCHA, and subject to the Google <a href="/">Privacy Policy</a> and <a href="/">Terms of service</a>.
        </span>
      </Form>
    </Container>
  );
}

export default FormMenu;