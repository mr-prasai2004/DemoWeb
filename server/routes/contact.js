import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Create email content
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.CONTACT_EMAIL,
            subject: `🚀 New Inquiry from ${name} | WESELLIT`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">WESELLIT</h1>
                      <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">New Contact Form Submission</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #f1f5f9; margin: 0 0 24px; font-size: 20px; border-bottom: 2px solid #334155; padding-bottom: 12px;">📬 Message Details</h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #334155;">
                            <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</span>
                            <p style="color: #f1f5f9; margin: 4px 0 0; font-size: 16px; font-weight: 500;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #334155;">
                            <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</span>
                            <p style="margin: 4px 0 0;"><a href="mailto:${email}" style="color: #818cf8; font-size: 16px; text-decoration: none;">${email}</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #334155;">
                            <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</span>
                            <p style="color: #f1f5f9; margin: 4px 0 0; font-size: 16px;">${phone || 'Not provided'}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 0 0;">
                            <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                            <div style="background: #0f172a; border-radius: 12px; padding: 20px; margin-top: 8px; border-left: 4px solid #6366f1;">
                              <p style="color: #e2e8f0; margin: 0; font-size: 15px; line-height: 1.7;">${message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Reply Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">📧 Reply to ${name}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #0f172a; padding: 24px 40px; text-align: center; border-top: 1px solid #334155;">
                      <p style="color: #64748b; margin: 0; font-size: 12px;">
                        This email was automatically sent from your website contact form.<br>
                        © ${new Date().getFullYear()} WESELLIT • Kathmandu, Nepal
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
        };

        // Send email
        const transporter = createTransporter();
        await transporter.sendMail(mailOptions);

        // Send auto-reply to user
        const autoReplyOptions = {
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Thank you for contacting WESELLIT',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you within 24-48 hours.</p>
          <p>In the meantime, feel free to explore our services at <a href="https://wesellit.com">wesellit.com</a></p>
          <br>
          <p>Best regards,</p>
          <p><strong>WESELLIT Team</strong></p>
          <p style="color: #64748B;">
            Kathmandu, Nepal<br>
            +977 9742305599<br>
            aayuyhsprasai@gmail.com
          </p>
        </div>
      `
        };

        await transporter.sendMail(autoReplyOptions);

        res.json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);

        // In development, return success even if email fails
        if (process.env.NODE_ENV === 'development') {
            return res.json({
                success: true,
                message: 'Message received! (Email sending skipped in dev mode)'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

export default router;
