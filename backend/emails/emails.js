import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, verificationToken) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harshil23kachhadiya@gmail.com",
      pass: "svls mqpu tfaj lpao",
    },
  });

  let mailOptions = {
    from: "harshil23kachhadiya@gmail.com",
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
    category: "Email Verification",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendWelcomeEmail = async (email, name) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harshil23kachhadiya@gmail.com",
      pass: "edwn pfla nutv uxop",
    },
  });

  let mailOptions = {
    from: "harshil23kachhadiya@gmail.com",
    to: email,
    subject: "Verify your email",
    html: WELCOME_EMAIL_TEMPLATE.replace(
      "{NAME}",
      name
    ),
    category: "Email Verification",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harshil23kachhadiya@gmail.com",
      pass: "edwn pfla nutv uxop",
    },
  });

  let mailOptions = {
    from: "harshil23kachhadiya@gmail.com",
    to: email,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),

    category: "confirmation mail",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendResetSuccessEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harshil23kachhadiya@gmail.com",
      pass: "edwn pfla nutv uxop",
    },
  });

  let mailOptions = {
    from: "harshil23kachhadiya@gmail.com",
    to: email,

    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "Password Reset",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
