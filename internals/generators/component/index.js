/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantStyleJs",
      default: true,
      message: "Do you need style.js?"
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const styleTemplate = "./component/style.js.hbs";
    const actions = [
      {
        type: "add",
        path: "../../components/{{properCase name}}/index.js",
        templateFile: "./component/index.js.hbs",
        abortOnFail: true
      }
    ];

    // If the user wants style.js
    if (data.wantStyleJs) {
      actions.push({
        type: "add",
        path: "../../components/{{properCase name}}/style.js",
        templateFile: styleTemplate,
        abortOnFail: true
      });
    }

    actions.push({
      type: "prettify",
      path: "/components/"
    });

    return actions;
  }
};
