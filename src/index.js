const fs = require('fs');

const run = async () => {

    const gitRef = process.env["INPUT_GIT-REF"];
    const tagName = process.env["INPUT_TAG-NAME"];
    const actionName = process.env["INPUT_ACTION-NAME"];
    const changes = process.env["INPUT_CHANGES"];

    console.log("does it work?")
    console.log(gitRef);
    console.log(tagName);
    console.log(actionName);
    console.log(changes);

    process.exit(0);
};

run();