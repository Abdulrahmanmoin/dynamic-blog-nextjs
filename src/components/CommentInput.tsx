'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import CommentSection from './CommentSection'


export default function CommentInput() {

    const [comment, setComment] = useState('')
    const [inputText, setInputText] = useState('')

    const a = () => {
        setComment(inputText)
        setInputText("")
    }

    return (
        <div>
            <div className="grid w-full max-w-sm items-start gap-1.5 py-20">
                <Label htmlFor="comment" className='text-base'>Comment About Blog</Label>
                <div className="flex w-full max-w-sm items-start space-x-2">
                    <Input
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        type="text" id='comment' placeholder="Comment" className='w-screen' />
                    <Button 
                    onClick={a}
                    type="button">Comment</Button>
                </div>
            </div>
            <CommentSection commentText={comment} />

        </div>
    )
}
