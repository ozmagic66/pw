var push = require('web-push')

let vapidKeys = {
    publicKey: 'BEXQkIxJtzdSJztYKS8dR9nbClsJUQNTZP6-DDPzuSeXIhWjzCPY-fIHVJD6SpqoI9ULixqKlC_-n1ogWp3dzRY',
    privateKey: 'vyP3ot4n6ZGXSiX7247IkImU1kF6z2GaIwYpjjZWG2o'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eAR9mc_NiVM:APA91bHsbIMVyk2qiKBZ2JPzL6U2iP6FwmSYwecZdSx75VdLGTYRkPAXghER2lbCgkm9F9hC6edZ6uUMAGizhkY6iqYUwCs34Bm63xb2WaCbwU3oTBD1MJGVt-mK-wbm6EISG3hetSsF",
    "expirationTime": null,
    "keys": {
        "p256dh": "BPpn61hZCubSxaFVVWugekj_YkUd1oTxtdg3mzxnXhsJFx1OqeQYZzQ7uuhC183zxLjfqT-u_qYeI15Cy7Y3Fvg",
        "auth": "OSgeY4BUG5-noBICQIN9MQ"
    }
}

push.sendNotification(sub, 'Test message')