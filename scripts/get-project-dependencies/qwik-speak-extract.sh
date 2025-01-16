nx graph --focus=$1 --file=scripts/get-project-dependencies/output.json

scriptDir=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")

dependencyPaths=$(npx ts-node $scriptDir/get-project-dependencies.ts)

qwik-speak-extract --supportedLangs=en,sr --assetsPath=i18n --sourceFilesPaths=$dependencyPaths