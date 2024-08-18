import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config(); // Configure dotenv to load environment variables from a .env file


// Function to send a password reset email
export const mail = (senderEmail, verificationString) => {

    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Generate the password reset link
    const resetLink = `https://oneclick-urlshortener.netlify.app/${verificationString}`;

    // Email details
    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: "Reset Your Password",
        html: `
        <h3> Dear user, </h3>
        
        <p>Sorry to hear you’re having trouble logging into your account. We got a message that you forgot your password. If this was you, you can get right back into your account or reset your password now. </p>

        <p>This reset link will be active only for 10 min so change your password now!</p>

        <p> Click the following Link to reset your password \n ${resetLink} </p>

        <p>If you didn’t request a login link or a password reset, you can ignore this message. </P>

        <p>Thank You</P>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}

export const verifyMail = (senderEmail, verificationString) => {

    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Generate the password reset link
    const resetLink = `https://oneclick-urlshortener.netlify.app/${verificationString}`;

    // Email details
    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: "Account activation",
        html: `
        <h3> Dear user, </h3>
        
        <p>Welcome to OneClick</p>

        <p>we are happy to be a part of your journey</p>

        <p>Click the following button to activate your account:</p>

        <a href="${resetLink}" style="
           display: inline-block;
           padding: 10px 20px;
           font-size: 16px;
           color: #ffffff;
           background-color: #007bff;
           text-align: center;
           text-decoration: none;
           border-radius: 5px;
           font-family: Arial, sans-serif;
           font-weight: bold;
           border: 1px solid #007bff;
           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
           transition: background-color 0.3s ease;
        ">
           Activate Your Account
        </a>

        <p>Thank You</P>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}