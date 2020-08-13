# Initialise amplify package
cd node_modules/@trueme/aws-amplify
yarn build
amplify init
amplify env checkout prod
cd ../../../
