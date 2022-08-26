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
goog.exportSymbol('proto.proto.ScheduleDeleteTransactionBody', null, global);

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
proto.proto.ScheduleDeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ScheduleDeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ScheduleDeleteTransactionBody.displayName = 'proto.proto.ScheduleDeleteTransactionBody';
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
proto.proto.ScheduleDeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ScheduleDeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ScheduleDeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ScheduleDeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduleid: (f = msg.getScheduleid()) && basic_types_pb.ScheduleID.toObject(includeInstance, f)
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
 * @return {!proto.proto.ScheduleDeleteTransactionBody}
 */
proto.proto.ScheduleDeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ScheduleDeleteTransactionBody;
  return proto.proto.ScheduleDeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ScheduleDeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ScheduleDeleteTransactionBody}
 */
proto.proto.ScheduleDeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new basic_types_pb.ScheduleID;
      reader.readMessage(value,basic_types_pb.ScheduleID.deserializeBinaryFromReader);
      msg.setScheduleid(value);
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
proto.proto.ScheduleDeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ScheduleDeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ScheduleDeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ScheduleDeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      basic_types_pb.ScheduleID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScheduleID scheduleID = 1;
 * @return {?proto.proto.ScheduleID}
 */
proto.proto.ScheduleDeleteTransactionBody.prototype.getScheduleid = function() {
  return /** @type{?proto.proto.ScheduleID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.ScheduleID, 1));
};


/** @param {?proto.proto.ScheduleID|undefined} value */
proto.proto.ScheduleDeleteTransactionBody.prototype.setScheduleid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ScheduleDeleteTransactionBody.prototype.clearScheduleid = function() {
  this.setScheduleid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ScheduleDeleteTransactionBody.prototype.hasScheduleid = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.proto);
