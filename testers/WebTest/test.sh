#!/bin/bash

# first parameter is the url of the proxy "https://grpc-web.testnet.myhbarwallet.com:443"
# second parameter is the consensus node the proxy serves "0.0.3"
# this parameter is either empty for all tests or a specific test (createAccount, getBalance)
# eg ./test.sh "http://35.239.54.135:8080" "0.0.3" createAccount
# or ./test.sh "https://grpc-web.testnet.myhbarwallet.com:443" "0.0.3"

export PROXY_URL=$1
export NODE_ACCOUNT_ID=$2
export OPERATOR_ID="0.0.11093"
export PRIVATE_KEY="302e020100300506032b657004220420f28afe2490e6622feb57a59a5e78a84db8f32bf54250a29e0fffd013c87a423c"
export WEBAPP_URL="http://localhost:19006/"

#export PWDEBUG=1

npx playwright test $3

if [ $? -eq 0 ]
then
  echo "success"
else
  echo "error"
fi

