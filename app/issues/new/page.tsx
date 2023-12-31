'use client'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import axios from 'axios'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { date, z } from 'zod'
import { createIssueSchema } from '@/lib/validationSchemas'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Spinner from '@/components/Loader/Spinner'

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
  const [isSubmitting, setSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true)
      await axios.post('/api/issues', data)
      router.push('/issues')
    } catch (error) {
      setSubmitting(false)
      setError('An unexpected error occured.')
    }
  })

  return (
    <div className="flex w-full justify-center">
      <div className="w-[576px]">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className="flex w-full justify-center" onSubmit={onSubmit}>
          <div className="flex w-full flex-col gap-5">
            <TextField.Root>
              <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder="Description" {...field} />
              )}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button className="hover:cursor-pointer" disabled={isSubmitting}>
              Add Issue {isSubmitting && <Spinner />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
