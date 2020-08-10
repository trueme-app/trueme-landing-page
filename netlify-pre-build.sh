#!/usr/bin/env bash

AWSCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"netlify\",\
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

amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes
cp ./aws-exports.js ./node_modules/@trueme/aws-amplify

echo $PWD
