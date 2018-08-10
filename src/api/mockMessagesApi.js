import delay from './delay';

let messages = [
  {
    id: 'SyWf25OFf',
    sender: 'Maya T.',
    content: "I'm here to help you find the design that feels good to you and reflects a message you want. Date Posted: 03/02/18"
  }
];

class MessageApi {
  
  static getAllMessages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], messages));
      }, delay);
    });
  }

  static sendMessage(message) {
    message = Object.assign({}, message); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostLength = 1;
        if (message.content.length < minPostLength) {
          reject(`Private message must be at least ${minPostLength} characters.`);
        } else {
          messages.push(message);
        }
        resolve(message);
      }, delay);
    });
  }

}

export default MessageApi;