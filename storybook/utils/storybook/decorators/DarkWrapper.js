// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DarkWrapper = storyFn => {
  // Do not display the wrapper when testing.
  if (process.env.NODE_ENV === 'test') {
    return storyFn();
  }

  return `
    <div class="inner story-wrapper page invert">
      ${storyFn()}
    </div>
  `;
};

export default DarkWrapper;
