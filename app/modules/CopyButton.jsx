/**
 * Created by yan on 16-1-8.
 */
import React from 'react';
import ZeroClipboard from 'zeroclipboard';

ZeroClipboard.config({
  swfPath: require('zeroclipboard/dist/ZeroClipboard.swf')
});

const CopyButton = (props)=> {
  return <button {...props} ref={elem=>new ZeroClipboard(elem)}>
    {props.children}
  </button>
}

export default CopyButton;