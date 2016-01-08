/**
 * Created by yan on 16-1-8.
 */
import React from 'react';
import ZeroClipboard from 'zeroclipboard';

ZeroClipboard.config({
  swfPath: require('zeroclipboard/dist/ZeroClipboard.swf')
});

const bindZeroClipboardClient = (elem)=> {
  var client = new ZeroClipboard(elem);
  client.on("ready", function (readyEvent) {
    client.on("aftercopy", function (event) {
      alert("Copied text to clipboard: " + event.data["text/plain"]);
    });
  });
}

const CopyButton = (props)=> {
  return <button ref={bindZeroClipboardClient} data-clipboard-text={props.data}>COPY</button>
}

export default CopyButton;