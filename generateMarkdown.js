function renderLicenseBadge(license) {
  return "[![License](https://img.shields.io/badge/License-" + license.replace("-", "_") + "-blue.svg)](https://opensource.org/licenses/" + license + ")\n";
}

function renderLicenseLink(license) {
  return "https://opensource.org/licenses/" + license;
}

function renderLicenseSection(license) {
  return "## License\n" + renderLicenseLink(license);
}

function generateMarkdown(data) {
  return `
  # ${data.docTitle}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#testing)
  - [License](#license)
  - [Contribution](#contribution)
  - [Questions](#questions)

  ## Installation
  ${data.inst}

  ## Usage
  ${data.usage}

  ## Testing
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Questions
  If you have any issues or questions, contact me at ${data.email}

  You can find more of my work on my Github profile here: [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = {
  generateMarkdown
};
