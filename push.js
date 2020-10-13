var push = require('web-push')

let vapidKeys = {
    publicKey: 'BEXQkIxJtzdSJztYKS8dR9nbClsJUQNTZP6-DDPzuSeXIhWjzCPY-fIHVJD6SpqoI9ULixqKlC_-n1ogWp3dzRY',
    privateKey: 'vyP3ot4n6ZGXSiX7247IkImU1kF6z2GaIwYpjjZWG2o'
  }

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'Test message')