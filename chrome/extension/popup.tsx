import React from 'react';
import { render } from 'react-dom';
import { FF_MAIN_ID } from '../../app/common/constants';

const RenderFrame = () => (
  <iframe
    style={{
      width: '100%',
      height: '100%',
    }}
    frameBorder={0}
    allowTransparency={true}
    allow="microphone; camera;"
    src={chrome.extension.getURL(`popup.html?protocol=${location.protocol}`)}
  />
);

window.addEventListener('load', () => {
  const root = document.createElement('ff-chrome-app-popup');
  root.setAttribute('id', FF_MAIN_ID);
  document.body.appendChild(root);
  render(<RenderFrame />, root);
});
