import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../../storybook/FullDecorator';
import Heading from './Heading';
import Subheading from './Subheading';

storiesOf('General / Typography', module)
    .addDecorator(FullDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <div>
                    <Heading>A nice heading</Heading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam est ex, blandit at felis sit amet, egestas tincidunt
                    metus. Phasellus aliquet blandit scelerisque. Nullam congue
                    vehicula condimentum. Proin pulvinar pellentesque pharetra.
                    Morbi imperdiet ante eget nibh venenatis, sed volutpat
                    lectus facilisis. Nulla nec nulla vel orci volutpat
                    consectetur. Praesent porta, quam in aliquam ornare, ex
                    metus vehicula nisi, a posuere est sapien sit amet neque.
                    Maecenas at malesuada lorem. Etiam placerat felis ac tortor
                    laoreet, at molestie ipsum blandit.
                    <Subheading>A subheading</Subheading>
                    Nam consequat viverra molestie. Nulla in lorem nulla. Ut
                    sagittis nunc sit amet magna eleifend posuere. Vestibulum
                    non elit sed lacus tristique rhoncus. Donec consectetur
                    tempus tellus, id aliquet tortor luctus sed. In cursus vitae
                    urna quis viverra. Donec non egestas eros. Quisque eget arcu
                    in risus venenatis iaculis id sit amet nibh. Vivamus mi
                    nibh, lobortis eget maximus quis, molestie non lorem. In ac
                    facilisis odio. Aenean tincidunt scelerisque leo in
                    elementum. Curabitur consequat dui vel augue laoreet, id
                    fermentum ipsum semper. Pellentesque ut turpis sed leo
                    pharetra euismod in ut libero. Nunc malesuada vel mauris non
                    dignissim. Duis scelerisque fringilla nulla, non auctor
                    justo suscipit eu. Phasellus egestas risus ac blandit
                    feugiat.
                </div>
            );
        })
    );
