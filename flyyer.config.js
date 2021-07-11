// Created with create-flyyer-app@2.0.0

const {config} = require('@flyyer/types');
const {default: endent} = require('endent');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLYYER_KEY,
  deck: 'charming-man',

  // Optionals
  name: 'Charming Man',
  description: endent`
    This is the Flyyer we use in our landing page.
    We open-sourced it to allow developers use it as a starting point to develop their own templates.
  `,
  private: false, // Set to false to deploy publicly to https://flyyer.io/community
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // Declare supported sizes
});
