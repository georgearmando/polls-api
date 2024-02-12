# Polls API

Polls API is a Node.js application that allows users to create and manage polls. With a combination of modern technologies such as Prisma, Redis, PostgreSQL, WebSockets, and Fastify, this project provides a powerful and scalable solution for creating and distributing online polls.

## Main Features

- **Create Polls:** Easily create new polls, defining questions and options.
- **Participate in Polls:** Participants can vote on existing polls quickly and easily.
- **Poll Management:** Robust management features allow poll creators to edit, delete, and monitor the performance of their polls.
- **Real-Time Communication:** Using WebSockets, poll results are instantly updated for all participants.
- **Security:** Implementation of security measures to protect data integrity and user privacy.
- **Optimized Performance:** Utilization of the Fastify framework to ensure exceptionally fast performance, even under heavy traffic loads.

## Technologies Used

- Node.js
- Prisma
- Redis
- PostgreSQL
- WebSockets
- Fastify

## Installation

1. Clone the repository: `git clone https://github.com/your-username/enquetejs.git`
2. Install dependencies: `npm install`
3. Create the containers for postgres and redis: `docker compose up -d`.
4. Create tables in the database: `npx prisma migrate dev`
5. Run the application: `npm run dev`

## Contribution

Contributions are welcome! Feel free to submit pull requests, report issues, or propose new features to make EnqueteJS even better.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
