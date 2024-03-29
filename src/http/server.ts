import cookie from "@fastify/cookie"
import websocket from "@fastify/websocket"
import fastify from "fastify"
import { createPoll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"
import { voteOnPoll } from "./routes/vote-on-poll"
import { pollResults } from "./routes/ws/poll-result"

const app = fastify()

app.register(cookie, {
  secret: "polls-app-secret",
  hook: "onRequest",			/* Hook to be called before the route handler. */
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running")
})