import { g, auth, config } from '@grafbase/sdk'

const user = g.model('user', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  posts: g.relation(() => post).list().optional(),
})

const post = g.model('post', {
  title: g.string().length({ min: 5 }),
  content: g.string().length({ min: 2, max: 200 }),
  image: g.url(),
  author: g.relation(() => user),
})

export default config({
  schema: g
})
