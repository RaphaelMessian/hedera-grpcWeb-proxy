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

var duration_pb = require('./duration_pb.js');
var timestamp_pb = require('./timestamp_pb.js');
var basic_types_pb = require('./basic_types_pb.js');
var freeze_type_pb = require('./freeze_type_pb.js');
goog.exportSymbol('proto.proto.FreezeTransactionBody', null, global);

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
proto.proto.FreezeTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FreezeTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.FreezeTransactionBody.displayName = 'proto.proto.FreezeTransactionBody';
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
proto.proto.FreezeTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FreezeTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FreezeTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FreezeTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    starthour: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startmin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endhour: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endmin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updateFile: (f = msg.getUpdateFile()) && basic_types_pb.FileID.toObject(includeInstance, f),
    fileHash: msg.getFileHash_asB64(),
    startTime: (f = msg.getStartTime()) && timestamp_pb.Timestamp.toObject(includeInstance, f),
    freezeType: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.proto.FreezeTransactionBody}
 */
proto.proto.FreezeTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FreezeTransactionBody;
  return proto.proto.FreezeTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FreezeTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FreezeTransactionBody}
 */
proto.proto.FreezeTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarthour(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartmin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndhour(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndmin(value);
      break;
    case 5:
      var value = new basic_types_pb.FileID;
      reader.readMessage(value,basic_types_pb.FileID.deserializeBinaryFromReader);
      msg.setUpdateFile(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileHash(value);
      break;
    case 7:
      var value = new timestamp_pb.Timestamp;
      reader.readMessage(value,timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 8:
      var value = /** @type {!proto.proto.FreezeType} */ (reader.readEnum());
      msg.setFreezeType(value);
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
proto.proto.FreezeTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FreezeTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FreezeTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FreezeTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarthour();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartmin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndhour();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEndmin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUpdateFile();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      basic_types_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getFileHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFreezeType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int32 startHour = 1;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getStarthour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.FreezeTransactionBody.prototype.setStarthour = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 startMin = 2;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getStartmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.FreezeTransactionBody.prototype.setStartmin = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 endHour = 3;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getEndhour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.FreezeTransactionBody.prototype.setEndhour = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 endMin = 4;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getEndmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.FreezeTransactionBody.prototype.setEndmin = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional FileID update_file = 5;
 * @return {?proto.proto.FileID}
 */
proto.proto.FreezeTransactionBody.prototype.getUpdateFile = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.FileID, 5));
};


/** @param {?proto.proto.FileID|undefined} value */
proto.proto.FreezeTransactionBody.prototype.setUpdateFile = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.proto.FreezeTransactionBody.prototype.clearUpdateFile = function() {
  this.setUpdateFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.FreezeTransactionBody.prototype.hasUpdateFile = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes file_hash = 6;
 * @return {!(string|Uint8Array)}
 */
proto.proto.FreezeTransactionBody.prototype.getFileHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes file_hash = 6;
 * This is a type-conversion wrapper around `getFileHash()`
 * @return {string}
 */
proto.proto.FreezeTransactionBody.prototype.getFileHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileHash()));
};


/**
 * optional bytes file_hash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileHash()`
 * @return {!Uint8Array}
 */
proto.proto.FreezeTransactionBody.prototype.getFileHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.FreezeTransactionBody.prototype.setFileHash = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional Timestamp start_time = 7;
 * @return {?proto.proto.Timestamp}
 */
proto.proto.FreezeTransactionBody.prototype.getStartTime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, timestamp_pb.Timestamp, 7));
};


/** @param {?proto.proto.Timestamp|undefined} value */
proto.proto.FreezeTransactionBody.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.proto.FreezeTransactionBody.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.FreezeTransactionBody.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FreezeType freeze_type = 8;
 * @return {!proto.proto.FreezeType}
 */
proto.proto.FreezeTransactionBody.prototype.getFreezeType = function() {
  return /** @type {!proto.proto.FreezeType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.proto.FreezeType} value */
proto.proto.FreezeTransactionBody.prototype.setFreezeType = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


goog.object.extend(exports, proto.proto);
