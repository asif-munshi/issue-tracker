'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes'

export default function NewIssuePage() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[576px] flex-col gap-5">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Add Issue</Button>
      </div>
    </div>
  )
}
