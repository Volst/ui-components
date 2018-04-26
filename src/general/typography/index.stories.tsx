import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../../storybook/FullDecorator';
import Heading from './Heading';
import Subheading from './Subheading';
import SuperText from './SuperText';
import Center from './Center';
import Code from './Code';
import { Tone } from '../../PropTypes';
import { Text, InlineText } from './Text';

storiesOf('General / Typography', module)
  .addDecorator(FullDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <div>
          <Heading>A nice heading</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est
            ex, blandit at felis sit amet, egestas tincidunt metus. Phasellus
            aliquet blandit scelerisque. Nullam congue vehicula condimentum.
            Proin pulvinar pellentesque pharetra. Morbi imperdiet ante eget nibh
            venenatis, sed volutpat lectus facilisis. Nulla nec nulla vel orci
            volutpat consectetur. Praesent porta, quam in aliquam ornare, ex
            metus vehicula nisi, a posuere est sapien sit amet neque. Maecenas
            at malesuada lorem. Etiam placerat felis ac tortor laoreet, at
            molestie ipsum blandit.
          </Text>
          <Subheading>A subheading</Subheading>
          <Text>
            Nam consequat viverra molestie. Nulla in lorem nulla. Ut sagittis
            nunc sit amet magna eleifend posuere. Vestibulum non elit sed lacus
            tristique rhoncus. Donec consectetur tempus tellus, id aliquet
            tortor luctus sed. In cursus vitae urna quis viverra. Donec non
            egestas eros. Quisque eget arcu in risus venenatis iaculis id sit
            amet nibh. Vivamus mi nibh, lobortis eget maximus quis, molestie non
            lorem. In ac facilisis odio. Aenean tincidunt scelerisque leo in
            elementum. Curabitur consequat dui vel augue laoreet, id fermentum
            ipsum semper. Pellentesque ut turpis sed leo pharetra euismod in ut
            libero. Nunc malesuada vel mauris non dignissim. Duis scelerisque
            fringilla nulla, non auctor justo suscipit eu. Phasellus egestas
            risus ac blandit feugiat.
          </Text>
          <SuperText>A smaller heading</SuperText>
          <Text>
            Eu laoreet nibh lacinia himenaeos curae montes mollis primis sed.
          </Text>
          <Center>
            <Text>A centered paragraph text.</Text>
          </Center>
        </div>
      );
    })
  )
  .add(
    'with tone',
    withInfo()(() => {
      return (
        <div>
          <Heading>Paragraphs with tones</Heading>
          <Text tone={Tone.Primary}>Primary text</Text>
          <Text tone={Tone.Success}>Success text</Text>
          <Text tone={Tone.Danger}>Danger text</Text>
          <Text tone={Tone.Warning}>Warning text</Text>
          <Text tone={Tone.Dark}>Dark text</Text>
          <Text tone={Tone.Light}>Light text</Text>
          <Heading>Inline text with tones</Heading>
          <Text>
            This time we show the inline variant with its
            <InlineText tone={Tone.Primary}> primary</InlineText>,
            <InlineText tone={Tone.Success}> success</InlineText>,
            <InlineText tone={Tone.Danger}> danger</InlineText>,
            <InlineText tone={Tone.Warning}> warning</InlineText>,
            <InlineText tone={Tone.Dark}> dark</InlineText>,
            <InlineText tone={Tone.Light}> light</InlineText> tones.
          </Text>
        </div>
      );
    })
  )
  .add(
    'special styles',
    withInfo()(() => {
      return (
        <div>
          <Text bold>A paragraph written in bold text.</Text>
          <Text italic>A paragraph written in italic text.</Text>
          <Text small>A paragraph written in smaller text than normal.</Text>
          <Text compact>A compact paragraph written in the normal size.</Text>
          <Text compact small>
            A compact paragraph written in smaller text than normal.
          </Text>
          <Text>
            An inline code block: <Code>An inline code block.</Code>
          </Text>
          <Subheading underline>A subheading with an underline</Subheading>
        </div>
      );
    })
  );
