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

echo AWSCONFIG
cd node_modules/@trueme/aws-amplify
./node_modules/.bin/amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes
