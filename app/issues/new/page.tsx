'use client'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import axios from 'axios'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import { createIssueSchema } from '@/lib/validationSchemas'

type IssueForm = z.infer<typeof createIssueSchema>

export default function NewIssuePage() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  })
  const [error, setError] = useState('')

  return (
    <div className="flex w-full justify-center">
      <div className="w-[576px]">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form
          className="flex w-full justify-center"
          onSubmit={handleSubmit(async (data) => {
            try {
              await axios.post('/api/issues', data)
              router.push('/issues')
            } catch (error) {
              setError('An unexpected error occured.')
            }
          })}
        >
          <div className="flex w-full flex-col gap-5">
            <TextField.Root>
              <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>
            {errors.title && (
              <Text color="red" as="p">
                {errors.title.message}
              </Text>
            )}
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder="Description" {...field} />
              )}
            />
            {errors.description && (
              <Text color="red" as="p">
                {errors.description.message}
              </Text>
            )}
            <Button className="hover:cursor-pointer">Add Issue</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
