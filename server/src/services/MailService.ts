import nodemailer from 'nodemailer'

class MailService {
	transporter: nodemailer.Transporter

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS
			}
		})
	}

	async sendActivationMail(email: string, activationLink: string) {
		const mailHTML = `<div>
<h1>Здравствуйте!</h1>
<p>Чтобы активировать аккаунт Infected Trees нужно перейти по ссылке <a href="${activationLink}">${activationLink}</a>.</p>
<p>Если Вы не регистрировали аккаунт, проигнорируйте это письмо.</p>
<div/>`
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: email,
			subject: 'Активация аккаунта',
			text: '',
			html: mailHTML
		})
	}
}

export default new MailService()
