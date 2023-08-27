import React from 'react';
import axios from 'axios';

const SendEmailComponent = () => {
    const sendEmail = async (to, subject, text) => {
        const apiUrl = 'https://mail-sms-service.vercel.app/mail/send-email';
        const emailData = {
            to,
            subject,
            text
        };

        try {
            const response = await axios.post(apiUrl, emailData);
            if (response.status === 200) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // Sử dụng hàm sendEmail trong component
    const handleSendEmail = () => {
        const to = 'nguyenphuthinh102500@gmail.com';
        const subject = 'Tài khoản';
        const text = 'Nội dung email của bạn'; // Thay thế nội dung email thực tế
        sendEmail(to, subject, text);
    }

    return (
        <div>
            <button onClick={handleSendEmail}>Gửi Email</button>
        </div>
    );
}

export default SendEmailComponent;