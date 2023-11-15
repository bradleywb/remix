import type { MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import Button from '~/components/button'

export const meta: MetaFunction = () => {
  return [
    { title: 'Nested Page' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Nested Page</h1>

      <Form action="actions" method="post" navigate={false}>
        <input name="name" />

        <Button formAction="actions/boop" type="submit">
          Boop
        </Button>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
