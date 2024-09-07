import React, { useState, useEffect, useRef, useContext } from 'react';
import ParticlesComponent from '../../particles';
import emailjs from '@emailjs/browser';
import { ContactContext } from '../../../contexts/ProjectsProvider';

function Contact() {
    const [loading, setLoading] = useState(false);
    const contactRef = useContext(ContactContext);
    const formRef = useRef(null);
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: ''
    }); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(e) {
        let params = {
            from_name: form.name,
            to_name: 'Oscar Heath',
            from_email: form.email,
            to_email: 'oscar.w.heath@gmail.com',
            message: form.message
        }
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_09yia0a', 'template_yphjhpc', formRef.current, 'PBYR0HfaLXCImlaec')
        .then((result) => {
            setLoading(false);
            alert('Message sent successfully!');
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('An error occurred, please try again later.');
        });
    }


    return (
        <>
        <div className='flex justify-center items-center w-full bg-[#010015] h-[1200px] p-[300px]'>
            <div ref={contactRef} className='contact w-fit h-fit bg-tertiary p-6 rounded-xl fade-in'>
                <div className='text-[30px] text-white font-bold'>
                    Thanks for visiting my website!
                </div>
                <div className='text-[20px] text-white'>
                    Feel free to get in touch.
                </div>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <input type="text" placeholder="Your name"
                    name="from_name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full h-10 bg-purple-950 text-white p-2 outline-none my-2 rounded-lg"/>
                    <input type="text" placeholder="Your email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-10 bg-purple-950 text-white p-2 outline-none my-2 rounded-lg"/>
                    <textarea 
                        value={form.message}
                        onChange={handleChange}
                        rows="7"
                        name="message"
                        placeholder="Your message" 
                    className="w-full bg-purple-950 text-white p-2 outline-none my-2 rounded-lg"/>
                    <button type="submit" className="bg-purple-950 text-white p-2 rounded-xl shadow-md shadow-primary px-8">{loading ? 'Sending...' : 'Send'}</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact;