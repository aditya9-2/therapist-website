import * as React from 'react';
import { LabeledInput } from './LabeledInput';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

export const Contact: React.FC = () => {
    return (
        <div id='contact' className=' bg-yellow-50 dark:bg-blue-950 text-[#4a4a3e] dark:text-amber-50  p-6 flex justify-center items-center'>

            <div className='mt-10 text-center border-2 p-6 rounded-sm w-[58rem]'>

                <h1 className='text-2xl font-semibold mb-4'>Get In Touch</h1>
                <p className='font-thin'>Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon, usually within <span className='font-semibold dark:text-green-400 text-amber-800'>one business day. </span> {' '}
                    <br /> This form is safe, Private, and completely free</p>

                <form className='grid grid-cols-1 gap-4'>
                    <LabeledInput id='name' label='Name' type='text' placeholder='Name' required />
                    <LabeledInput id='email' label='Email' type='email' placeholder='you@example.com' required />
                    <LabeledInput id='phone' label='Phone' type='tel' placeholder='(555) 234–5678' />
                    <div className='flex flex-col'>
                        <LabeledInput
                            id='preferredTime'
                            label='Preferred Contact Time'
                            type='text'
                            placeholder='e.g., Mornings, Afternoons, Evenings, Weekends'
                            hint="Let us know when you're typically available for a call or consultation"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='preferredMethod' className='mb-1 text-sm font-medium text-left'>
                            Preferred Contact Method
                        </label>
                        <Select required>
                            <SelectTrigger
                                id='preferredMethod'
                                className='w-full border border-gray-400 rounded-md dark:bg-blue-900 dark:border-gray-700'
                            >
                                <SelectValue placeholder='Select preferred method' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='call'>Direct Call</SelectItem>
                                <SelectItem value='email'>Email</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='message' className='text-sm mb-1 font-medium text-left'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            placeholder='How can I help you?'
                            rows={4}
                            className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-blue-900 dark:border-gray-700'
                            required
                        ></textarea>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms"> By clicking submit you consent to receive calls and emails from Dr. Serena Blake.</Label>
                    </div>

                    <Button
                        type='submit'
                        className='w-4/5 mx-auto bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md py-2 transition'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}