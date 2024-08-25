'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

export default function JobDetailForm() {
  return (
    <div className='flex-col w-full'>
    <div className='flex max-sm:flex-col gap-2 pb-2'>
        <Card>
          <CardHeader>
            <CardTitle>
              See near your location
            </CardTitle>
            <CardDescription>Northern Street, Chicago, United States</CardDescription>
          </CardHeader>
          <CardContent>
              
            <Image src={'/img/basemap.png'}
            alt='map'
            width={300}
            height={200}
            />
          </CardContent>
        </Card>
        <Card >
          <CardContent className='h-full pt-2 w-full '>
            <div className='w-full flex justify-center'>
            <Image src={'/img/profile.png'}
            alt='map'
            width={150}
            height={150}
            />
            </div>
            <div className='py-2 flex text-xs w-full justify-center'>Upload your photo</div>
            <Button className=' w-full' size={'sm'} type='button' variant={'outline'}>Select from Computer</Button>
          </CardContent>
        </Card>
      </div>
      </div>
  )
}
