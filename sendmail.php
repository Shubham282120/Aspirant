<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader or manually include the files if not using Composer
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';
require 'mailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (
        isset($_POST['name']) && isset($_POST['email']) &&
        isset($_POST['subject']) && isset($_POST['message'])
    ) {
        $name    = htmlspecialchars(trim($_POST['name']));
        $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $subjectInput  = htmlspecialchars(trim($_POST['subject']));
        $message = nl2br(htmlspecialchars(trim($_POST['message'])));

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'info@aspirantsolutions.in';         // Your Gmail address
            $mail->Password   = 'pasword';       // App password, NOT Gmail password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('info@imagosfilms.in', 'Website Enquiry');
            $mail->addAddress('info@imagosfilms.in');
            // $mail->addAddress('imagosfilm@gmail.com');
            // $mail->addBCC('tech.mayurgalaiya@gmail.com');
            $mail->addReplyTo($email, $name); // So you can reply to the user's email
            // Content
            $mail->isHTML(true);
            $mail->Subject = "Website Enquiry - Aspirant Solutions";
            $mail->Body    = "
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; color: #333; }
                        h2 { color: #0055a5; }
                        table { border-collapse: collapse; width: 100%; }
                        td { padding: 8px 10px; border: 1px solid #eee; }
                        .label { background-color: #f5f5f5; font-weight: bold; width: 150px; }
                    </style>
                </head>
                <body>
                    <h2>New Website Enquiry</h2>
                    <table>
                        <tr>
                            <td class='label'>Name</td>
                            <td>$name</td>
                        </tr>
                        <tr>
                            <td class='label'>Email</td>
                            <td><a href='mailto:$email'>$email</a></td>
                        </tr>
                        <tr>
                            <td class='label'>Subject</td>
                            <td>$subjectInput</td>
                        </tr>
                        <tr>
                            <td class='label'>Message</td>
                            <td>$message</td>
                        </tr>
                    </table>
                    <br><small>This message was sent from the contact form on your website.</small>
                </body>
                </html>
            ";

            // Send the email
            $mail->send();
            echo "success";
        } catch (Exception $e) {
            // Debugging info can be useful for troubleshooting
            // echo "Mailer Error: " . $mail->ErrorInfo;
            echo "error";
        }
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>
