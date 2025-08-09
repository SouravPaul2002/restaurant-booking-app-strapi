module.exports = ({env})=>( {
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {
          // Completely disable file optimization step
          options: {
            optimize: false,
          },
        },
      },
    },
  },
    email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // TLS will be used instead
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_USERNAME'), // your Gmail address
        defaultReplyTo: env('SMTP_USERNAME'),
      },
    },
  },
});
