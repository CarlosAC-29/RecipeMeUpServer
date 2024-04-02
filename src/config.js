const { config } = require('dotenv');
config();
console.log(process.env.HOLA);
//geminiConfig is the configuration object for the gemini-1.0-pro model
const geminiConfig = {
    MODEL_NAME : "gemini-1.0-pro",
    API_KEY : "AIzaSyA5LnlpAQHyDX5q3Ew5W_9valO8iVDQKBU"
}

//dialogflowConfig is the configuration object for the dialogflow CX
const dialogflowConfig = {
    credentials: {
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxAQw+WgegSQJq\nXIprO9fqvBXcl0Xuo+z/UPiBSEqE++gxF1UvX+8XJ7jJWuhhYRGUpNXJfyNhoNsG\n+U+LO3Yo8xf0q9uQdcj4+FbY6lFEjK5wwvjuyxecjbfDOJXGWt1HH2z0NvUv2RXQ\n+LA44MoRIRF5do9yGSi7PQvruwWTyEgZfGGJNUTiJriKXWkNqd/RUcAeuV1HOIVg\nSC56u34qmeBOWVmYoI2FL0wkx1m/lQ8hYYGyJBUnGVbBaBla6UKBeQXHsO7HqpOl\nMveMITkMfX95LgR8avwInrLcuEsAq0upjrwmfHH2uo4nO0wwqHTcUfzVr0yodlx+\nfjyeCue9AgMBAAECggEAKvNomvEhFE4Gre11psRIx/cCv2g/SJcy3NKxoxq+2yHo\n4Nzba+DBQ8NqwYnfycEKqM7SogE0TUklV8IVTMdJWOVwAsUhEYcITOS3V5u05Y5b\n5VE+G5Kaz+YK1rIuMSZO8sa1PHXR7xfVdUNo5o4bPP/DdT3ttSQqN+pahkWzqgEq\nWltZebpsDTtHFYs9uiCk0Owj5kQ3k9eVKme34YLL1I+Nr6oGAa9F1EqHD7rgx9z9\nB+ImJXqGeIctUoNxJFLVe7LOCCZjL/5sVcK2Q+shNSMi4L+1i3jWyiFYZ0w1HXcl\nTBUDknZ0Rj54nxXwxbtNooGQDmBpbuAH3MfXX760gQKBgQD8bUoa4Qf1bBInPr+P\nfCtUKqL7DErg6av5/Xke69WRabuxmQSnj642YhrMl10zELCJNmjL64XAePA+1djV\nJc9PeRAPqLX9/RF/gbfiH27XxXDT1n64We+RWLa4r5Z4BxbmwyDE35BqC21Bqs2a\nrjKJ1fV/TtU7zH7iTJmMOdVdPQKBgQD0al2quoZbtGig0UL7UePrNTZ1dLXo8Rlt\n9JnN1jHFYV316c3YUO5cpeht5wz/iY3xWP3qPWw4onxdP7yJBP8rYOjh5DVI/j73\nJcwxE75npmAhIuvUSXz70G923ykwyW4yHxZDFPg79bJgu1fytnRgMXQqi6WrPWTt\nMBM6pmlcgQKBgQC7u/hiNzx5DZAOuf80EpAS/8bI2WKTFZa+zQIYuiLTDAT416n7\niMNzVNFDmctJ4D67PckA6EBIXmmnAdpK49zj6VDFpJ79sAokf3An72K7fO8lzZ/f\nMZwXyBfVEVniGLuykiq74N2B0M/IB+T0Blw14Pe9X/78g2FWosuL27NQrQKBgBF3\n+LHXGvs67a9wxWTI+Y06BGZorQe1E6g0Lzny8SO2TczhpQCs6BxfDzmrpdYtsqNp\nRNyU/0Mc+d6AS61PWh1zk7Fxag2Jfl6TqQBo9NbboUs8/7XweqpUv2KzmHIQM3wJ\nlMG+oe9HJDSdry99studLTxNNs4CWVBKe1VZx3YBAoGBAJtKLNW94RKlCDOeZLNr\nIdcUGCOpjB9UVlMsQysySs+VmgwpSurYa8MBm4IPJOU/Nt0sUbS6TCQCb83kjR+y\nB7rZQYzUagMgMdGoepIS7djF4u6PqSJ+LXZQIIIRR4LYQe/c6cvZ9hTcg8NPBvCv\n3keV3yo+mXdSUIEVBP77UEAl\n-----END PRIVATE KEY-----\n",
        client_email: "recipemeupv2@recipemeup.iam.gserviceaccount.com"
    }
}

module.exports = {
    geminiConfig,
    dialogflowConfig
}