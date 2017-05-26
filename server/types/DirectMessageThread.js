const DirectMessageThread = /* GraphQL */ `
	type DirectMessagesConnection {
		pageInfo: PageInfo!
		edges: [DirectMessageEdge!]
	}

	type DirectMessageEdge {
		cursor: String!
		node: Message!
	}

	type ParticipantInfo {
		id: ID!
		name: String!
		username: String!
		profilePhoto: String!
		lastActive: Date
		lastSeen: Date
	}

	type DirectMessageThread {
		id: ID!
		messageConnection(first: Int = 10, after: String): DirectMessagesConnection!
		participants: [ParticipantInfo]
		snippet: String
	}

	extend type Query {
		directMessageThread(id: ID!): DirectMessageThread
	}

	enum MessageType {
		text
		media
	}

	input ContentInput {
		body: String!
	}

	input File {
		name: String!
		type: String!
		size: Int!
		path: String!
	}

	input DirectMessageContentInput {
		messageType: MessageType!
		threadType: String!
		content: ContentInput!
		file: File
	}

	input DirectMessageThreadInput {
		participants: [ID!]
		message: DirectMessageContentInput!
	}

	extend type Mutation {
		createDirectMessageThread(input: DirectMessageThreadInput!): DirectMessageThread
	}
`;

module.exports = DirectMessageThread;
