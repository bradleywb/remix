import type { MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import Button from '~/components/button'

export { default as action } from '~/pages/home/actions'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>

      <Form method="post" navigate={false}>
        <input name="name" />

        <Button name="method" value="boop" type="submit">
          Boop
        </Button>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
