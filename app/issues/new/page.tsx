'use client'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { Button, TextField } from '@radix-ui/themes'

export default function NewIssuePage() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[576px] flex-col gap-5">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>Add Issue</Button>
      </div>
    </div>
  )
}
