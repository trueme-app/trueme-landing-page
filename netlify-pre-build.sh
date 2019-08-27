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

cat > ./.aws << EOL
[netlify]
region = $TRUEME_AWS_REGION
aws_secret_access_key = $TRUEME_AWS_SECRET_ACCESS_KEY
aws_access_key_id = $TRUEME_AWS_ACCESS_KEY_ID
EOL

AWS_SHARED_CREDENTIALS_FILE=./.aws ./node_modules/@trueme/aws-amplify/node_modules/.bin/amplify init --amplify ${AMPLIFY} --providers ${PROVIDERS} --yes
