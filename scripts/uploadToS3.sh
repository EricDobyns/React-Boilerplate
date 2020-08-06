# upload.sh

S3_BUCKET=insert_bucket_name  # Note: Make sure to set this variable to the specific S3 bucket of your choice

aws s3 cp ./out/ s3://$S3_BUCKET \
  --cache-control max-age=0,no-cache \
  --acl public-read \
  --recursive

(cd ./out/ &&
  find . -type f -name '*.html' | while read HTMLFILE; do
    HTMLFILESHORT=${HTMLFILE:2}
    HTMLFILE_WITHOUT_INDEX=${HTMLFILESHORT::${#HTMLFILESHORT}-5}

    # Remove .html from files
    aws s3 cp s3://$S3_BUCKET/${HTMLFILESHORT} s3://$S3_BUCKET/$HTMLFILE_WITHOUT_INDEX \
        --cache-control max-age=0,no-cache \
        --acl public-read

    if [ $? -ne 0 ]; then
      echo "***** Failed renaming build to $S3_BUCKET (html)"
      exit 1
    fi
  done
)