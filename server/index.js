import twilio from 'twilio';

const accountSid = "ACa0a92d0b2dfd8f635ed2a87abecc035d"; // Your Account SID from www.twilio.com/console
const authToken = "b06843a2a11caaa8d6f0be0352b3decb"; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Node",
    to: "+919709015162", // Text this number
    from: "+16205221093", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));