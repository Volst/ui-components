import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextArea from './TextArea';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Entry / TextArea', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <div>
          <TextArea onChange={action('change')} name="myname" />
        </div>
      );
    })
  )
  .add(
    'with error',
    withInfo()(() => {
      return <TextArea onChange={action('change')} name="myname" hasError />;
    })
  )
  .add(
    'auto-size',
    withInfo()(() => {
      return (
        <TextArea
          onChange={action('change')}
          name="myname"
          autoSize
          value="Sapien placerat dictum et cum natoque libero nibh urna, tristique eleifend consequat iaculis scelerisque rutrum in, dis montes class dignissim viverra nostra a. Augue vitae sociosqu egestas enim interdum feugiat molestie, lorem faucibus dictumst platea penatibus nam, curae integer auctor neque velit sollicitudin. Sem phasellus purus cras non ridiculus risus dui convallis lobortis, dictum venenatis aliquet tortor accumsan quam potenti aenean. Sit nunc congue facilisis mollis ultricies cursus ad ridiculus penatibus, sagittis nec enim nisi lorem natoque eu molestie eros, cras ultrices libero integer amet tristique condimentum metus."
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return <TextArea onChange={action('change')} name="myname" disabled />;
    })
  );
