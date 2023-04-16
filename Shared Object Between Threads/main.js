const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { TextEncoder, TextDecoder } = require('util');

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function serializeString(str) {
  return encoder.encode(str).buffer;
}

function deserializeString(buffer) {
  return decoder.decode(buffer);
}

function serializeObject(obj) {
  const jsonString = JSON.stringify(obj);
  return serializeString(jsonString);
}

function deserializeObject(buffer) {
  const jsonString = deserializeString(buffer);
  return JSON.parse(jsonString);
}

if (isMainThread) {
  const initialObject = { foo: 'bar' };
  const serializedObject = serializeObject(initialObject);
  const sharedArrayBuffer = new SharedArrayBuffer(serializedObject.byteLength);
  new Uint8Array(sharedArrayBuffer).set(new Uint8Array(serializedObject));

  const worker = new Worker(__filename, { workerData: sharedArrayBuffer });

  worker.on('message', () => {
    const updatedObject = deserializeObject(sharedArrayBuffer);
    console.log(updatedObject); // Logs: { bar: 'foo' }
  });
} else {
  const sharedArray = new Uint8Array(workerData);
  const initialObject = deserializeObject(sharedArray.buffer);

  // Modify the object
  const updatedObject = { [initialObject.foo]: 'foo' };
  const updatedSerializedObject = serializeObject(updatedObject);

  // Update the original SharedArrayBuffer
  sharedArray.set(new Uint8Array(updatedSerializedObject));
  parentPort.postMessage('SharedArrayBuffer updated');
}
