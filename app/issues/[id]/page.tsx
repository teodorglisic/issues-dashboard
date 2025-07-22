'use client'

import { Issue } from '@/app/generated/prisma';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const IssueById = () => {

  const [issue, setIssue] = useState<Issue | null>(null)

  const params = useParams<{id:string}>();
  useEffect(() => {
    const fetchIssue = async () => {
      const res = await axios.get(`/api/issues/${params.id}`)
      setIssue(res.data);
    }
    fetchIssue()
  }, [params.id])
  return (
    <div>{issue?.title}</div>
    
  )
}

export default IssueById