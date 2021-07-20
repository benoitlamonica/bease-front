import React, { useEffect } from "react";
import Prism from "prismjs";
import Wrapper from "../Wrapper";

function Main() {
  let code = 'var code = "hello"';
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Wrapper>
      <div>
        <p>
          <a href="https://semver.org">
            <img
              src="https://img.shields.io/badge/version-0.1.0-green.svg"
              alt="version"
            />
          </a>
        </p>
        <h2 id="create-your-own-discord-bot-with-ease-">
          Create your own Discord bot with ease !
        </h2>
        <p>
          Everything is already set up ! You just have to link your discord bot
          and then do some logic of your own ... 😋
        </p>
        <h2 id="getting-started">Getting Started</h2>
        <p>How to use this &quot;framework&quot; ?</p>
        <div className="flex-inline gap-20 responsive">
          <div className="beautiful-div">
            <h3 id="create-your-bot-application">
              Create your bot application
            </h3>
            <p>
              First of all you need to create a bot on Discord develloper portal{" "}
              <a href="https://discord.com/developers/">here</a>. Log in and
              click on <code className="code-basics">Applications</code> =&gt;{" "}
              <code className="code-basics">New Applicaton</code>
            </p>
            <p>
              Click on your application, then{" "}
              <code className="code-basics">Bot</code>. When your in{" "}
              <code className="code-basics">Bot</code> click on{" "}
              <code className="code-basics">Add Bot</code>.
            </p>
          </div>
          <div className="beautiful-div">
            <h3 id="add-the-bot-to-your-discord-server">
              Add the bot to your Discord Server
            </h3>
            <p>
              Now we need to add the discord bot to your server. Don&#39;t worry
              it&#39;s very simple ! 👌 Still in your discord dev interface
              click on <code className="code-basics">OAuth2</code>, then in
              OAuth2 URL Generator section check <strong>bot</strong>.
            </p>
            <p>
              Now we&#39;re configuring the bot permissions. In Bot permissions
              check <strong>Send messages</strong> and{" "}
              <strong>Read message history</strong>. For now it will be enought
              for a basic bot usage.
            </p>
            <p>
              After checked all needed permissions you should see a link in
              Scopes, copy this link in your favorite browser, it will add your
              bot in your favorite discord server. Be aware that you need to be
              administrator of the server ! 😄
            </p>
            <p>
              For the records, you will find your bot token in the bot section
              of your app 🙂
            </p>
          </div>

          <div className="beautiful-div">
            <h3 id="installation-in-10-sec">Installation in 10 sec</h3>
            <p>
              Ok, now Bease installation ! Of course Bease comes with a
              beautiful cli, first of all you need to install it globally :{" "}
              <code className="code-basics">npm i edbcli -g</code>. Then you
              need to create your bot environement !{" "}
              <code className="code-basics">bease new</code>, And that&#39;s all
              ! Just follow the steps indicated by the cli and you&#39;re good
              to go !
            </p>
          </div>
          <div className="beautiful-div">
            <h3 id="basic-use">Basic use</h3>
            <h4 id="step-1">Step 1</h4>
            <p>
              You need to install dependency, so type in your bot directory{" "}
              <code className="code-basics">yarn</code> or{" "}
              <code className="code-basics">npm i</code> to be up to date
            </p>
            <h4 id="step-2">Step 2</h4>
            <p>
              To launch the bot type in your bot directory{" "}
              <code className="code-basics">yarn start</code> or{" "}
              <code className="code-basics">npm run start</code>, everytime you
              make some changes you will need to launch it again ! And now type
              !bot help (or any prefix you put in .env) to see it in action !
            </p>
          </div>
          <div className="beautiful-div">
            <h3 id="create-your-own-command-">Create your own command !</h3>
            <p>
              To create your own command type in your bot directory{" "}
              <code className="code-basics">
                bease add:command &lt;command-name&gt;
              </code>
              . It will appear in{" "}
              <code className="code-basics">./commands/content</code>. Then your
              need to do the logic yourself in the Command Handler{" "}
              <code className="code-basics">./modules/CommandHandler.js</code>,
              you will find your own method created by the CLI ! 🙂
            </p>
            <p>More will comme soon ! Thanks !</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
