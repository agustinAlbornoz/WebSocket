const messages = require("../Messages/messages");

class MessagesActions {
  static getAll(){
    return messages.listOfMessages();
  }
  static getOne(id){
    return messages.getMessage(id);
  }
  static add(message){
    return messages.addMessage(message);
  }
  static update(id, newContent){
    return messages.updateMessage(id, newContent);
  }
  static delete(id){
    return messages.deleteMessage(id);
  }
}

module.exports = { MessagesActions };