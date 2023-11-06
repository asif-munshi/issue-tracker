'use client'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import axios from 'axios'
import { Button, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface IssueForm {
  title: string
  description: string
}

export default function NewIssuePage() {
  const router = useRouter()
  const { control, register, handleSubmit } = useForm<IssueForm>()
  return (
    <>
      <form
        className="flex w-full justify-center"
        onSubmit={handleSubmit(async (data) => {
          await axios.post('/api/issues', data)
          router.push('/issues')
        })}
      >
        <div className="flex w-[576px] flex-col gap-5">
          <TextField.Root>
            <TextField.Input placeholder="Title" {...register('title')} />
          </TextField.Root>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />
          <Button>Add Issue</Button>
        </div>
      </form>
    </>
  )
}
