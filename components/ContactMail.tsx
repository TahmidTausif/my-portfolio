'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import AnimatedWrapper from './AnimatedWrapper';

export default function ContactEmail() {
    const form = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_1iwggue',
                'template_golzcqh',
                form.current!,
                'xvhAvs_aomBRj9QQ1'
            )
            .then(
                () => {
                    setIsSent(true);
                    setLoading(false);
                    form.current?.reset();
                },
                (error) => {
                    console.error('FAILED...', error);
                    setLoading(false);
                }
            );
    };

    return (
        <AnimatedWrapper>
            <div className="max-w-xl  p-6 mt-10  rounded shadow-md">
                <h2 className="text-3xl font-light mb-4">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 border border-gray-700 rounded"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 border border-gray-700 rounded"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-700 rounded"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-900"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {isSent && toast.success('Successfully mail sent')}
                </form>
            </div>
        </AnimatedWrapper>
    );
}
