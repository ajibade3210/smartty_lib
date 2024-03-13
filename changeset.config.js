// changeset.config.js

module.exports = {
  // Your changeset configuration here
  releases: [
    { tag: "feat", version: "minor" },
    { tag: "fix", version: "patch" },
    // Add more release rules as needed
  ],
  packageRules: [
    // Define package rules here
    // For example:
    { packageMatch: "*", release: "major", access: "public" },
    { packageMatch: "*", release: "minor", access: "public" },
    { packageMatch: "*", release: "patch", access: "public" },
    // Add more package rules for other release types as needed
  ],
};
