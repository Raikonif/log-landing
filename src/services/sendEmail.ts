import axios from 'axios';

interface EmailRequest {
  Subject: string;
  Message: string;
  EmailRequest: string;
  SystemType: string;
}

const sendEmailService = async (emailRequest: EmailRequest) => {
  try {
    console.log(emailRequest);
    const response = await axios.post(
      'http://164.92.122.95:4070/api/sendEmail',
      emailRequest,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    throw error;
  }
};

export default sendEmailService;