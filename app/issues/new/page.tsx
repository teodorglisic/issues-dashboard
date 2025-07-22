'use client'

import { Button, Callout, TextField, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import z from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
    const router = useRouter()
    const {register, control, handleSubmit, formState: {errors}}= useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState('')

    async function submission(data:IssueForm) {
        try {
            await axios.post('/api/issues', data);
            router.push('/issues')
        } catch (error){
            setError('An unexpected error occurred, please try again.')
        }
        
    }

  return (
    <div className='space-y-5 max-w-xl'>

        {error && <Callout.Root color='red' role='alert'>
            <Callout.Icon> <InfoCircledIcon /> </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit((data) => submission(data))}>
        <TextField.Root placeholder='Title' {...register('title')}></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller name='description' control={control} render={({field}) => <SimpleMdeReact {...field}/>}/>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit New Issue</Button>

    </form>
    </div>
  )
}

export default NewIssuePage