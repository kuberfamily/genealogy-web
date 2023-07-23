import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  posts: g.relation(() => Post).list().optional(),
})

const Post = g.model('Post', {
  title: g.string().length({ min: 5 }),
  content: g.string().length({ min: 2, max: 200 }),
  image: g.url(),
  author: g.relation(() => User),
})

export default config({
  schema: g
})
