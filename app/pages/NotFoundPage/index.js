import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Container, H1 } from './styles';

export default function NotFound() {
  return (
    <Container>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </Container>
  );
}
