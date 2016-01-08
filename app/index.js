/**
 * Created by yan on 16-1-8.
 */

import React from 'react';
import {render} from 'react-dom';
import CopyButton from './modules/CopyButton.jsx';

const textToBeCopied = "jellyfish";

render(<div>
  <h3>Example:</h3>
  <h5>1. Click COPY Button</h5>
  <CopyButton data-clipboard-text={textToBeCopied}>Click to copy</CopyButton>
  <h5>2. Paste below to check against {textToBeCopied}</h5>
  <textarea/>
</div>, document.getElementById('root'));