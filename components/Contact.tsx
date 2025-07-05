'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { contactFormSchema, ContactFormType } from '@/validations/contactSchema';

import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { LabeledInput } from './LabeledInput';

export const Contact: React.FC = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        trigger,
    } = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema),
    });

    const [visibleErrors, setVisibleErrors] = React.useState<Record<string, boolean>>({});

    const showErrorTemporarily = (field: keyof ContactFormType) => {
        setVisibleErrors((prev) => ({ ...prev, [field]: true }));
        setTimeout(() => {
            setVisibleErrors((prev) => ({ ...prev, [field]: false }));
        }, 2000);
    };

    const onSubmit = (data: ContactFormType) => {
        console.log(data);
        reset();
        router.push('/thank-you');
    };

    const handleValidation = async () => {
        const result = await trigger();
        if (!result) {
            Object.keys(errors).forEach((field) => {
                showErrorTemporarily(field as keyof ContactFormType);
            });
        }
    };

    return (
        <div id='contact' className='bg-yellow-50 dark:bg-blue-950 text-[#4a4a3e] dark:text-amber-50 p-6 flex justify-center items-center'>
            <div className='mt-10 text-center border-2 p-6 rounded-sm w-[58rem]'>
                <h1 className='text-2xl font-semibold mb-4'>Get In Touch</h1>
                <p className='font-thin'>
                    Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon,
                    usually within <span className='font-semibold dark:text-green-400 text-amber-800'>one business day.</span>
                    <br />
                    This form is safe, private, and completely free.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    onInvalid={handleValidation}
                    className='grid grid-cols-1 gap-4 mt-6'
                    noValidate
                >
                    <LabeledInput id='name' label='Name' type='text' placeholder='Name' {...register('name')} />
                    {visibleErrors.name && errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

                    <LabeledInput id='email' label='Email' type='email' placeholder='you@example.com' {...register('email')} />
                    {visibleErrors.email && errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

                    <LabeledInput id='phone' label='Phone' type='tel' placeholder='(555) 234–5678' {...register('phone')} />

                    <LabeledInput
                        id='preferredTime'
                        label='Preferred Contact Time'
                        type='text'
                        placeholder='e.g., Mornings, Afternoons, Evenings, Weekends'
                        hint="Let us know when you're typically available for a call or consultation"
                        {...register('preferredTime')}
                    />

                    <div className='flex flex-col'>
                        <Label htmlFor='preferredMethod' className='mb-1 text-sm font-medium text-left'>
                            Preferred Contact Method
                        </Label>
                        <Select onValueChange={(value) => setValue('preferredMethod', value as 'call' | 'email')}>
                            <SelectTrigger className='w-full border border-gray-400 rounded-md dark:bg-blue-900 dark:border-gray-700'>
                                <SelectValue placeholder='Select preferred method' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='call'>Direct Call</SelectItem>
                                <SelectItem value='email'>Email</SelectItem>
                            </SelectContent>
                        </Select>
                        {visibleErrors.preferredMethod && errors.preferredMethod && (
                            <span className='text-red-500 text-sm'>{errors.preferredMethod.message}</span>
                        )}
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
                            {...register('message')}
                        />
                        {visibleErrors.message && errors.message && (
                            <span className='text-red-500 text-sm'>{errors.message.message}</span>
                        )}
                    </div>

                    <div className='flex items-center space-x-2'>
                        <Checkbox
                            id="terms"
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setValue('terms', true, { shouldValidate: true });
                                } else {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    setValue('terms', undefined as any, { shouldValidate: true });
                                }
                            }}
                        />

                        <Label htmlFor='terms'>
                            By clicking submit you consent to receive calls and emails from Dr. Serena Blake.
                        </Label>
                    </div>
                    {visibleErrors.terms && errors.terms && <span className='text-red-500 text-sm'>{errors.terms.message}</span>}

                    <Button
                        type='submit'
                        onClick={handleValidation}
                        className='w-4/5 mx-auto bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md py-2 transition hover:cursor-pointer'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};
