const globs = require('./output.json');

const result = Object.values(globs.graph.nodes).map((node: any) => {
  return `../../${node.data.root}/src`;
});

process.stdout.write(result.toString());
