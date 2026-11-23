import {Suspense} from 'react'
import {Form} from '$/components/Form/Form'
import {Header} from '$/components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Form />
        </Suspense>
      </main>
    </>
  )
}
