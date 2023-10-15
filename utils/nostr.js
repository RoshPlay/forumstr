import {
  relayInit,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
} from "nostr-tools";

export const connectToRelay = async () => {
  const relay = relayInit("wss://relay.damus.io");
  await relay.connect();

  relay.on("connect", () => {
    console.log(`connected to ${relay.url}`);
  });
  relay.on("error", () => {
    console.log(`failed to connect to ${relay.url}`);
  });

  return relay;
};

export const publishEvent = async (event) => {
  const relay = await connectToRelay();
  try {
    await relay.publish(event);
  } catch (err) {
    console.log(`failed to publish to ${relay.url}: ${err}`);
    return false;
  } finally {
    console.log(`${relay.url} has accepted our event`);
    return true;
  }
};

export const closeConnectionToRelay = async (relay) => {
  await relay.close();
  console.log('close connection to relay');
};

// Forums
export let createForum = async ({ subject, description }) => {
  console.log("Creating forum");
  let event = {
    created_at: Math.floor(Date.now() / 1000),
    kind: 10,
    tags: [
      ["subject", subject],
      ["description", description],
    ],
    content: "",
  };

  const signedEvent = await window.nostr.signEvent(event);
  console.log("Publishing event");
  event = await publishEvent(signedEvent);
  console.log("Event published");

  return event.id;
};

export const getForumDetail = async (forumId) => {
  const relay = await connectToRelay();

  let event = await relay.get({
    ids: [forumId],
  });

  await closeConnectionToRelay(relay);

  let forumDetail = {
    subject: event.tags[0][1],
    description: event.tags[1][1],
  };

  return forumDetail;
};

// Threads
export let createThread = async ({
  forumId,
  subject,
  description,
  content,
}) => {
  let event = {
    created_at: Math.floor(Date.now() / 1000),
    kind: 11,
    tags: [
      ["e", forumId],
      ["subject", subject],
      ["description", description],
    ],
    content: content,
  };

  const signedEvent = await window.nostr.signEvent(event);
  event = await publishEvent(signedEvent);

  return event.id;
};

export const getThreadDetail = async (threadId) => {
  const relay = await connectToRelay();

  let event = await relay.get({
    ids: [threadId],
  });

  await closeConnectionToRelay(relay);

  let threadDetail = {
    subject: event.tags[1][1],
    description: event.tags[2][1],
    content: event.content,
    author: event.pubkey,
  };

  return threadDetail;
};

// Comments
export let createComment = async ({ threadId, content }) => {
  let event = {
    created_at: Math.floor(Date.now() / 1000),
    kind: 12,
    tags: [["e", threadId]],
    content: content,
  };

  const signedEvent = await window.nostr.signEvent(event);
  event = await publishEvent(signedEvent);

  return event.id;
};
