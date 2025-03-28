---
title: 'S3Client.getObject(bucketName, objectKey)'
description: 'S3Client.getObject downloads an object from a bucket'
excerpt: 'S3Client.getObject downloads an object from a bucket'
---

`S3Client.getObject` downloads an object from a bucket.

| Parameter  | Type   | Description                                  |
| :--------- | :----- | :------------------------------------------- |
| bucketName | string | Name of the bucket to fetch the object from. |
| objectKey  | string | Name of the object to download.              |

### Returns

| Type                                                | Description                                                                                           |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| [Object](/javascript-api/jslib/aws/s3client/object) | An [Object](/javascript-api/jslib/aws/s3client/object) describing and holding the downloaded content. |

### Example

<CodeGroup labels={[]}>

```javascript
import exec from 'k6/execution';

import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.6.0/s3.js';

const awsConfig = new AWSConfig({
  region: __ENV.AWS_REGION,
  accessKeyId: __ENV.AWS_ACCESS_KEY_ID,
  secretAccessKey: __ENV.AWS_SECRET_ACCESS_KEY,
});

const s3 = new S3Client(awsConfig);
const testBucketName = 'test-jslib-aws';
const testFileKey = 'bonjour.txt';

export default function () {
  const objects = s3.listObjects(testBucketName);

  // If our test object does not exist, abort the execution.
  if (objects.filter((o) => o.key === testFileKey).length == 0) {
    exec.test.abort();
  }

  // Let's download our test object and print its content
  const object = s3.getObject(testBucketName, testFileKey);
  console.log(JSON.stringify(object));
}
```

_A k6 script that will download an object from a bucket_

</CodeGroup>