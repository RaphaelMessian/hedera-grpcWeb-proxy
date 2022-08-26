/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var basic_types_pb = require('./basic_types_pb.js');
goog.exportSymbol('proto.proto.CryptoDeleteTransactionBody', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CryptoDeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoDeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.CryptoDeleteTransactionBody.displayName = 'proto.proto.CryptoDeleteTransactionBody';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoDeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoDeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferaccountid: (f = msg.getTransferaccountid()) && basic_types_pb.AccountID.toObject(includeInstance, f),
    deleteaccountid: (f = msg.getDeleteaccountid()) && basic_types_pb.AccountID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CryptoDeleteTransactionBody}
 */
proto.proto.CryptoDeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoDeleteTransactionBody;
  return proto.proto.CryptoDeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoDeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoDeleteTransactionBody}
 */
proto.proto.CryptoDeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new basic_types_pb.AccountID;
      reader.readMessage(value,basic_types_pb.AccountID.deserializeBinaryFromReader);
      msg.setTransferaccountid(value);
      break;
    case 2:
      var value = new basic_types_pb.AccountID;
      reader.readMessage(value,basic_types_pb.AccountID.deserializeBinaryFromReader);
      msg.setDeleteaccountid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoDeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoDeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferaccountid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      basic_types_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getDeleteaccountid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      basic_types_pb.AccountID.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountID transferAccountID = 1;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.getTransferaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.AccountID, 1));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.CryptoDeleteTransactionBody.prototype.setTransferaccountid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.CryptoDeleteTransactionBody.prototype.clearTransferaccountid = function() {
  this.setTransferaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.hasTransferaccountid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountID deleteAccountID = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.getDeleteaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.AccountID, 2));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.CryptoDeleteTransactionBody.prototype.setDeleteaccountid = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.CryptoDeleteTransactionBody.prototype.clearDeleteaccountid = function() {
  this.setDeleteaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoDeleteTransactionBody.prototype.hasDeleteaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
