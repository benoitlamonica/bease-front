import React from "react";
import { NewAppImg, OauthImg } from "../../assets/img/getstarted_tuto";
import Code from "../../components/Code";

function GettingStarted() {
  return (
    <div>
      <h2>Getting Started</h2>
      <p>How to use this &quot;framework&quot; ?</p>
      <div className="flex-inline gap-30 responsive">
        <div className="beautiful-div flex-basis-50">
          <h3 id="create-your-bot-application">Create your bot application</h3>
          <p>
            First of all you need to create a bot on Discord develloper portal{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/developers/"
            >
              here
            </a>
            . Log in and click on{" "}
            <code className="code-basics">Applications</code> then{" "}
            <code className="code-basics">New Applicaton</code>
          </p>
          <p>
            Click on your application, then{" "}
            <code className="code-basics">Bot</code>. When your in{" "}
            <code className="code-basics">Bot</code> click on{" "}
            <code className="code-basics">Add Bot</code>.
          </p>
        </div>
        <div className={`tuto-img-80 flex-basis-50`}>
          <img src={NewAppImg} alt="New app in discord" />
        </div>

        <div className="beautiful-div flex-basis-50">
          <h3 id="add-the-bot-to-your-discord-server">
            Add the bot to your Discord Server
          </h3>
          <p>
            Now we need to add the discord bot to your server. Don&#39;t worry
            it&#39;s very simple ! 👌 Still in your discord dev interface click
            on <code className="code-basics">OAuth2</code>, then in OAuth2 URL
            Generator section check <code className="code-basics">Bot</code>.
          </p>
          <p>
            Now we&#39;re configuring the bot permissions. In Bot permissions
            check <code className="code-basics">Send messages</code> and{" "}
            <code className="code-basics">Read message history</code>. For now
            it will be enought for a basic bot usage.
          </p>
          <p>
            After checked all needed permissions you should see a link in
            Scopes, copy this link in your favorite browser, it will add your
            bot in your favorite discord server. Be aware that you need to be
            administrator of the server ! 😄
          </p>
          <p>
            <strong>
              For the records, you will find your bot token in the bot section
              of your app
            </strong>{" "}
            🙂
          </p>
        </div>
        <div className={`tuto-img-80 flex-basis-50`}>
          <img src={OauthImg} alt="New app in discord" />
        </div>
        <div className="beautiful-div flex-basis-50">
          <h3 id="installation-in-10-sec">Installation in 10 sec</h3>
          <p>
            Ok, now Bease installation ! Of course Bease comes with a beautiful
            cli, first of all you need to install it globally :{" "}
            <Code language="bash">$ npm i edbcli -g</Code>
            Then you need to create your bot environement !{" "}
            <Code language="bash">$ bease new</Code>
            And that&#39;s all ! Just follow the steps indicated by the{" "}
            <strong>CLI</strong> and you&#39;re good to go !
          </p>
        </div>
        <div className="beautiful-div flex-basis-50">
          <h3 id="basic-use">Basic use</h3>

          <p>
            You need to install dependency, so type in your{" "}
            <strong>bot directory</strong> <Code language="bash">$ yarn</Code>{" "}
            or <Code language="bash">$ npm i</Code> to be up to date
          </p>

          <p>
            To launch the bot type in your <strong>bot directory</strong>{" "}
            <Code language="bash">$ yarn start</Code> or{" "}
            <Code language="bash">$ npm run start</Code>
            Everytime you make some changes you will need to launch it again !
            And now type <code className="code-basics">!bot help</code> (or any
            prefix you put in .env) to see it in action !
          </p>
        </div>
        <div className="beautiful-div">
          <h3 id="create-your-own-command-">Create your own command !</h3>
          <p>
            To create your own command type in your{" "}
            <strong>bot directory</strong>{" "}
            <Code language="bash">
              $ bease add:command &lt;command-name&gt;
            </Code>
            It will appear in{" "}
            <code className="code-basics">./commands/content</code>. Then your
            need to do the logic yourself in the Command Handler{" "}
            <code className="code-basics">./modules/CommandHandler.js</code>,
            you will find your own method created by the <strong>CLI</strong> !
            🙂
          </p>
          <p>More will comme soon ! Thanks !</p>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
