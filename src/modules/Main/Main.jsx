import React from "react";
import Code from "../../components/Code";

function Main() {
  let codeCommand = `module.exports = {
    name: 'help',
    description: 'Shows all commands available',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('sendHelpMessage');
    }
}`;
  let codeHandler = `sendHelpMessage = () => {
    return Utils.showListOfCommandsMessage();
}`;
  return (
    <div>
      <div className="flex-inline gap-100 responsive">
        <div className="flex-basis-50">
          <h2>Beautiful code</h2>
          <p>
            Command <strong>Help.js</strong>
          </p>
          <Code>{codeCommand}</Code>
          <p>
            Code in <strong>CommandHandler.js</strong>
          </p>
          <Code>{codeHandler}</Code>
        </div>
        <div className="flex-basis-50">
          <h2>Beautiful CLI</h2>
          <p>Easy to install !</p>
          <Code language="bash">{`$ npm i edbcli -g`}</Code>
          <p>Easy to use !</p>
          <Code language="bash">{`$ bease new`}</Code>
        </div>
      </div>
    </div>
  );
}

export default Main;
