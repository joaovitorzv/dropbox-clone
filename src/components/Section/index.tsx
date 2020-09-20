import React from 'react';

import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = (props) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={props.variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <div className="session">
            <button onClick={() => handleToggle()}>Sign in</button>
            <button>Sign up</button>
          </div>

        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Content>
    </Container>
  );
}

export default Section;