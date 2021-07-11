import React from 'react';
import {Variable as V, Validator, Static} from '@flyyer/variables';
import {FlyyerAgentName, TemplateProps} from '@flyyer/types';
import {proxy} from '@flyyer/proxy';
import clsx from 'clsx';

import '../styles/tailwind.css';

import kiwi from '../static/kiwi.svg';
import background from '../static/background.jpeg';

import {Layer} from '../components/layers';

/**
 * Export to enable variables UI on Flyyer.io
 */
export const schema = V.Object({
  title: V.String({default: 'Create more engagement'}),
  image: V.Image({
    title: 'Background image',
    default: background,
    examples: [background]
  }),
  logo: V.Image({
    default: kiwi,
    examples: [kiwi]
  })
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, agent} = props;

  const {
    data: {title, image, logo}
  } = validator.parse(variables);

  if (
    agent.name === FlyyerAgentName.WHATSAPP ||
    (width <= 400 && height <= 400)
  ) {
    return (
      <Layer className="bg-gray-800 p-4">
        <img src={proxy(logo)} className="w-full h-full" />
      </Layer>
    );
  }

  return (
    <>
      <Layer className="bg-gray-800">
        <img
          className="w-full h-full object-cover object-bottom"
          src={proxy(image)}
        />
      </Layer>
      <Layer className="bg-gradient-to-r from-gray-900 opacity-70 right-1/3" />
      <Layer className="flex flex-col justify-center items-start px-4 py-4 story:py-storysafe">
        <header className="text-white w-2/3 space-y-1">
          <img src={proxy(logo)} className="h-6 sq:h-8 w-auto" />
          <h1
            className={clsx(
              'tracking-tight font-semibold',
              'text-2xl leading-tight',
              'sq:text-3xl sq:leading-tight'
            )}
          >
            {title}
          </h1>
        </header>
      </Layer>
    </>
  );
}