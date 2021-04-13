import React, { Component } from 'react'
import 'aws-sdk';
class BucketPhotos extends Component {
    render() {
        this.getBucketPhotos('vmpics-images');
        return (
            <div></div>
        );
    }

    getBucketPhotos(bucketName) {
        var AWS = require('aws-sdk/global');
        var s3 = new AWS.S3({ apiVersion: '2006-03-01' });
        AWS.config.loadFromPath('./awsconfig.json');
        var params = {
            Bucket: bucketName
        };
        s3.listObjectsV2(params, (err, data) => {
            if (err)
                throw err;
            console.log(data.Contents);
        });

    }
}
export default BucketPhotos;