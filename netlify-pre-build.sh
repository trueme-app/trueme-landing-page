#!/usr/bin/env bash

AWSCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"accessKeyId\":\"${TRUEME_AWS_ACCESS_KEY_ID}\",\
\"secretAccessKey\":\"${TRUEME_AWS_SECRET_ACCESS_KEY}\",\
\"region\":\"${TRUEME_AWS_REGION}\"\
}"

AMPLIFY="{\
\"envName\":\"${TRUEME_AWS_ENV}\"\
}"

PROVIDERS="{\
\"awscloudformation\":${AWSCONFIG}\
}"

mkdir ~/.aws
cat > ~/.aws/credentials << EOL
[netlify]
region=$TRUEME_AWS_REGION
aws_secret_access_key=$TRUEME_AWS_SECRET_ACCESS_KEY
aws_access_key_id=$TRUEME_AWS_ACCESS_KEY_ID
EOL

cat > ~/.aws/config << EOL
[netlify]
region=$TRUEME_AWS_REGION
EOL

npm i -g @aws-amplify/cli@4.24.0

cd ./node_modules/@trueme/aws-amplify
yarn build
amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes
