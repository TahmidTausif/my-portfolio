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
            <div className="  p-6 mt-10 max-w-6xl mx-auto rounded shadow-md">
                <h2 className="text-3xl font-light mb-4">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    {/* Name and Email fields */}
                    <div className="flex flex-col w-full md:flex-row gap-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="flex-1 w-full md:w-auto px-4 py-2 border border-gray-700 rounded"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="flex-1 w-full md:w-auto px-4 py-2 border border-gray-700 rounded"
                        />
                    </div>

                    {/* Message field */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-700 rounded"
                    />

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-transparent rounded-full border-2 border-gray-700 text-white px-6 py-2 hover:bg-gray-700"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Success Toast */}
                    {isSent && toast.success('Successfully mail sent')}
                </form>

            </div>
        </AnimatedWrapper>
    );
}
