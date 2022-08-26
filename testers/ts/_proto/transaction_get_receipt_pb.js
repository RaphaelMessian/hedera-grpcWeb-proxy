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

var transaction_receipt_pb = require('./transaction_receipt_pb.js');
var basic_types_pb = require('./basic_types_pb.js');
var query_header_pb = require('./query_header_pb.js');
var response_header_pb = require('./response_header_pb.js');
goog.exportSymbol('proto.proto.TransactionGetReceiptQuery', null, global);
goog.exportSymbol('proto.proto.TransactionGetReceiptResponse', null, global);

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
proto.proto.TransactionGetReceiptQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionGetReceiptQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.TransactionGetReceiptQuery.displayName = 'proto.proto.TransactionGetReceiptQuery';
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
proto.proto.TransactionGetReceiptQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetReceiptQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetReceiptQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && query_header_pb.QueryHeader.toObject(includeInstance, f),
    transactionid: (f = msg.getTransactionid()) && basic_types_pb.TransactionID.toObject(includeInstance, f),
    includeduplicates: jspb.Message.getFieldWithDefault(msg, 3, false),
    includeChildReceipts: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.proto.TransactionGetReceiptQuery}
 */
proto.proto.TransactionGetReceiptQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetReceiptQuery;
  return proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetReceiptQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetReceiptQuery}
 */
proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new query_header_pb.QueryHeader;
      reader.readMessage(value,query_header_pb.QueryHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new basic_types_pb.TransactionID;
      reader.readMessage(value,basic_types_pb.TransactionID.deserializeBinaryFromReader);
      msg.setTransactionid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeduplicates(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeChildReceipts(value);
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
proto.proto.TransactionGetReceiptQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetReceiptQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      query_header_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      basic_types_pb.TransactionID.serializeBinaryToWriter
    );
  }
  f = message.getIncludeduplicates();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeChildReceipts();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, query_header_pb.QueryHeader, 1));
};


/** @param {?proto.proto.QueryHeader|undefined} value */
proto.proto.TransactionGetReceiptQuery.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.TransactionGetReceiptQuery.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionID transactionID = 2;
 * @return {?proto.proto.TransactionID}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getTransactionid = function() {
  return /** @type{?proto.proto.TransactionID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.TransactionID, 2));
};


/** @param {?proto.proto.TransactionID|undefined} value */
proto.proto.TransactionGetReceiptQuery.prototype.setTransactionid = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.TransactionGetReceiptQuery.prototype.clearTransactionid = function() {
  this.setTransactionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.hasTransactionid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool includeDuplicates = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getIncludeduplicates = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.proto.TransactionGetReceiptQuery.prototype.setIncludeduplicates = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_child_receipts = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getIncludeChildReceipts = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.proto.TransactionGetReceiptQuery.prototype.setIncludeChildReceipts = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



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
proto.proto.TransactionGetReceiptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TransactionGetReceiptResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.TransactionGetReceiptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.TransactionGetReceiptResponse.displayName = 'proto.proto.TransactionGetReceiptResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TransactionGetReceiptResponse.repeatedFields_ = [4,5];



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
proto.proto.TransactionGetReceiptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetReceiptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetReceiptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && response_header_pb.ResponseHeader.toObject(includeInstance, f),
    receipt: (f = msg.getReceipt()) && transaction_receipt_pb.TransactionReceipt.toObject(includeInstance, f),
    duplicatetransactionreceiptsList: jspb.Message.toObjectList(msg.getDuplicatetransactionreceiptsList(),
    transaction_receipt_pb.TransactionReceipt.toObject, includeInstance),
    childTransactionReceiptsList: jspb.Message.toObjectList(msg.getChildTransactionReceiptsList(),
    transaction_receipt_pb.TransactionReceipt.toObject, includeInstance)
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
 * @return {!proto.proto.TransactionGetReceiptResponse}
 */
proto.proto.TransactionGetReceiptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetReceiptResponse;
  return proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetReceiptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetReceiptResponse}
 */
proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new response_header_pb.ResponseHeader;
      reader.readMessage(value,response_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new transaction_receipt_pb.TransactionReceipt;
      reader.readMessage(value,transaction_receipt_pb.TransactionReceipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 4:
      var value = new transaction_receipt_pb.TransactionReceipt;
      reader.readMessage(value,transaction_receipt_pb.TransactionReceipt.deserializeBinaryFromReader);
      msg.addDuplicatetransactionreceipts(value);
      break;
    case 5:
      var value = new transaction_receipt_pb.TransactionReceipt;
      reader.readMessage(value,transaction_receipt_pb.TransactionReceipt.deserializeBinaryFromReader);
      msg.addChildTransactionReceipts(value);
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
proto.proto.TransactionGetReceiptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetReceiptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      response_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      transaction_receipt_pb.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getDuplicatetransactionreceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      transaction_receipt_pb.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getChildTransactionReceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      transaction_receipt_pb.TransactionReceipt.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, response_header_pb.ResponseHeader, 1));
};


/** @param {?proto.proto.ResponseHeader|undefined} value */
proto.proto.TransactionGetReceiptResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.TransactionGetReceiptResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.TransactionGetReceiptResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionReceipt receipt = 2;
 * @return {?proto.proto.TransactionReceipt}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getReceipt = function() {
  return /** @type{?proto.proto.TransactionReceipt} */ (
    jspb.Message.getWrapperField(this, transaction_receipt_pb.TransactionReceipt, 2));
};


/** @param {?proto.proto.TransactionReceipt|undefined} value */
proto.proto.TransactionGetReceiptResponse.prototype.setReceipt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.TransactionGetReceiptResponse.prototype.clearReceipt = function() {
  this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.TransactionGetReceiptResponse.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TransactionReceipt duplicateTransactionReceipts = 4;
 * @return {!Array.<!proto.proto.TransactionReceipt>}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getDuplicatetransactionreceiptsList = function() {
  return /** @type{!Array.<!proto.proto.TransactionReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_receipt_pb.TransactionReceipt, 4));
};


/** @param {!Array.<!proto.proto.TransactionReceipt>} value */
proto.proto.TransactionGetReceiptResponse.prototype.setDuplicatetransactionreceiptsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.TransactionReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TransactionReceipt}
 */
proto.proto.TransactionGetReceiptResponse.prototype.addDuplicatetransactionreceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.TransactionReceipt, opt_index);
};


proto.proto.TransactionGetReceiptResponse.prototype.clearDuplicatetransactionreceiptsList = function() {
  this.setDuplicatetransactionreceiptsList([]);
};


/**
 * repeated TransactionReceipt child_transaction_receipts = 5;
 * @return {!Array.<!proto.proto.TransactionReceipt>}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getChildTransactionReceiptsList = function() {
  return /** @type{!Array.<!proto.proto.TransactionReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_receipt_pb.TransactionReceipt, 5));
};


/** @param {!Array.<!proto.proto.TransactionReceipt>} value */
proto.proto.TransactionGetReceiptResponse.prototype.setChildTransactionReceiptsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.TransactionReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TransactionReceipt}
 */
proto.proto.TransactionGetReceiptResponse.prototype.addChildTransactionReceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.TransactionReceipt, opt_index);
};


proto.proto.TransactionGetReceiptResponse.prototype.clearChildTransactionReceiptsList = function() {
  this.setChildTransactionReceiptsList([]);
};


goog.object.extend(exports, proto.proto);
