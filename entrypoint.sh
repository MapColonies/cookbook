#!/bin/sh

echo cloning from repo $CLASSIFIED_REPO_URL

REPO_NAME=classified_repo
cd $REPO_NAME

git clone $CLASSIFIED_REPO_URL .
\cp -r /$REPO_NAME/docs/. /docs/
\cp -r /$REPO_NAME/docs/assets/images/. /docs/assets/images

ENV_TEMPLATE_VALUES=$(printenv | grep 'SERVICE_URL=\|API_KEY=\|EMOJI_CODE=' | cut -d'=' -f1)

for f in $(find /docs/ -type f \( -name "*.js" -o -name "*.html" -o -name "*.md" \)); 
    do
        for value in $ENV_TEMPLATE_VALUES;
            do 
                sed -i "s|<$value>|$(printenv $value)|" "$f";
        done
 done

rm -r /$REPO_NAME

exec "$@"
