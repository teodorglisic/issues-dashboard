'use client'

import { Button, Table } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Issue } from '../generated/prisma'
import StatusField from '../components/StatusField'


const IssuesPage = () => {

  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/issues');
        setIssues(res.data)
      } catch (error) {
        console.log(error)
      }

    }

    fetchData();
  }, [])

  return (
    <>
      <main>
        <Button><Link href="/issues/new">New Issue</Link></Button>

        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {issues.map((issue:Issue) => {
              return <Table.Row key={issue.id}>
                <Table.RowHeaderCell><Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href={`/issues/${issue.id}`}>{issue.id}</Link></Table.RowHeaderCell>
                <Table.Cell>{issue.title}</Table.Cell>
                <Table.Cell>{issue.description}</Table.Cell>
                <Table.Cell><StatusField>{issue.status}</StatusField></Table.Cell>
              </Table.Row>

            })}

          </Table.Body>

        </Table.Root>
      </main>

    </>

  )
}

export default IssuesPage