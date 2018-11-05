const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const apiRouter = require('./routers/apiRouter');
const session = require('express-session');
const UserModel = require('./Models/userModel.js');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply.keepwarmbaby@gmail.com',
        pass: 'dmphong123'
    }
});

var CronJob = require('cron').CronJob;
var job = new CronJob('00 00 06 * * 1-5', function () {
// var job = new CronJob('* * * * *', function () {

        /*
         * Runs every weekday (Monday through Friday)
         * at 06:00:00 AM. It does not run on Saturday
         * or Sunday.
         */
        UserModel.find({}, (err, userFound) => {
            if (err) console.log(err);
            else {
                // let data = JSON.parse(userFound.receiver || '[]');
                for (let j = 0; j < userFound.length; j++) {
                    for (let i = 0; i < userFound[j].receiver.length; i++) {
                        var mailOptions = {
                            from: 'noreply.keepwarmbaby@gmail.com',
                            to: userFound[j].receiver[i].mail,
                            subject: '[NO REPLY]-KEEP WARM BABY',
                            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<title>ValentinesDay</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<style type="text/css">
		a {
			outline: none;
			color: white;
			text-decoration: underline;
		}

		a:hover {
			text-decoration: none !important;
		}

		.h-u a {
			text-decoration: none;
		}

		.h-u a:hover {
			text-decoration: underline !important;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
		}

		a[href^="tel"]:hover {
			text-decoration: none !important;
		}

		p {
			Margin: 0 !important;
		}

		.active-i a:hover,
		.active-t:hover {
			opacity: 0.8;
		}

		.active-i a,
		.active-t {
			transition: all 0.3s ease;
		}

		a img {
			border: none;
		}

		th {
			padding: 0;
		}

		table td {
			mso-line-height-rule: exactly;
		}

		[owa] div button {
			display: block;
			font-size: 1px;
			line-height: 1px;
		}

		[owa] .body div {
			display: block !important;
			font-size: 1px;
			line-height: 1px;
		}

		.l-white a {
			color: #fff;
		}

		.btn-01 a {
			padding: 14px 30px;
			color: #fa5151;
			text-decoration: none;
			display: block;
		}

		.btn-02 a {
			padding: 12px 30px;
			color: #fa5151;
			text-decoration: none;
			display: block;
		}

		.btn-03 a {
			padding: 14px 30px;
			color: #fff3f3;
			text-decoration: none;
			display: block;
		}

		.btn-bg-01:hover {
			background-color: #e8e7e6 !important;
		}

		.btn-bg-02:hover {
			background-color: #f7f7f7 !important;
		}

		.btn-bg-01,
		.btn-bg-02 {
			transition: all 0.3s ease;
		}

		@media only screen and (max-width:375px) and (min-width:374px) {
			.gmail-fix {
				min-width: 374px !important;
			}
		}

		@media only screen and (max-width:414px) and (min-width:413px) {
			.gmail-fix {
				min-width: 413px !important;
			}
		}

		@media only screen and (max-width:500px) {

			/* default style */
			.flexible {
				width: 100% !important;
			}

			.img-flex img {
				width: 100% !important;
				height: auto !important;
			}

			.table-holder {
				display: table !important;
				width: 100% !important;
			}

			.thead {
				display: table-header-group !important;
				width: 100% !important;
			}

			.tfoot {
				display: table-footer-group !important;
				width: 100% !important;
			}

			.flex {
				display: block !important;
				width: 100% !important;
			}

			.hide {
				display: none !important;
				width: 0 !important;
				height: 0 !important;
				padding: 0 !important;
				font-size: 0 !important;
				line-height: 0 !important;
			}

			.p-0 {
				padding: 0 !important;
			}

			.p-20 {
				padding: 20px !important;
			}

			.p-25 {
				padding: 25px !important;
			}

			.p-30 {
				padding: 30px !important;
			}

			.plr-15 {
				padding-left: 15px !important;
				padding-right: 15px !important;
			}

			.plr-20 {
				padding-left: 20px !important;
				padding-right: 20px !important;
			}

			.pt-20 {
				padding-top: 20px !important;
			}

			.pt-25 {
				padding-top: 25px !important;
			}

			.pb-15 {
				padding-bottom: 15px !important;
			}

			.pb-20 {
				padding-bottom: 20px !important;
			}

			.pb-25 {
				padding-bottom: 25px !important;
			}

			.fs-24 {
				font-size: 24px !important;
			}

			.lh-28 {
				line-height: 28px !important;
			}

			/* custom style */
			.pt-10p {
				padding-top: 10%;
			}

			.plr-9p {
				padding-left: 9%;
				padding-right: 9%;
			}

			.pb-8p {
				padding-bottom: 8%;
			}

			.social-icons img {
				width: 85% !important;
			}
		}
	</style>
</head>

<body class="body" bgcolor="#ffffff" style="margin:0; padding:0; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
	<table class="gmail-fix" bgcolor="#ffffff" width="100%" style="min-width:320px;" cellspacing="0" cellpadding="0">
		<tr>
			<td style="display:none; font-size:0; line-height:0;">
				<!-- Preheader -->
			</td>
		</tr>
		<tr>
			<td>
				<table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
					<!-- header -->
					<tr>
						<td align="center" style="padding:8px 15px 9px; font:13px/20px Arial, Helvetica, sans-serif; color:#242424;">

						</td>
					</tr>
					<tr>
						<td class="img-flex" align="center">
							<a style="text-decoration:none;" href="https://keepwarmbaby.herokuapp.com">
								</a>
						</td>
					</tr>
					<!-- content -->
					<tr>
						<td>
							<repeater>
									<layout label="cenetered_text_with_button_with_image_bg">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr>
													<td class="bg" bgcolor="#fdeeee" background="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/45194089_2229386180672543_5541544007059898368_n.jpg?_nc_cat=102&_nc_ht=scontent.fhan5-2.fna&oh=ebf28d862f80c1c96a855dfacf8d4a81&oe=5C7FDCD8" style="background:#fdeeee url(https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/45194089_2229386180672543_5541544007059898368_n.jpg?_nc_cat=102&_nc_ht=scontent.fhan5-2.fna&oh=ebf28d862f80c1c96a855dfacf8d4a81&oe=5C7FDCD8) no-repeat 50% 0; background-size:cover;">
														<!--[if gte mso 9]>
															<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px; height:374px;">
																<v:fill type="tile" src="http://i.imgur.com/jbXWE04.jpg" color="#fdeeee" />
																<v:textbox inset="0,0,0,0">
																<![endif]-->
														<table width="100%" cellpadding="0" cellspacing="0">
															<tr>
																<td class="hide" width="145" height="374"></td>
																<td class="pt-10p plr-9p pb-8p">
																	<table width="100%" cellpadding="0" cellspacing="0">
																		<tr>
																			<td class="fs-24 lh-28" align="center" style="padding:0 0 12px; font:700 40px/50px Arial, Helvetica, sans-serif; color:whitesmoke;">
																				<multiline>
																					HANOI
																				</multiline>
																			</td>
																		</tr>
																		<tr>
																			<td align="center" style="padding:0 0 5px; font:80px/160px Arial, Helvetica, sans-serif; color:whitesmoke;">
																				<multiline>
																					16<sup>o</sup>C
																				</multiline>
																			</td>
																		</tr>
																		<tr>
																			<td class="p-0" style="padding:0 0 10px;">
																				<table align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
																					<tr>
																						<td class="btn-03 active-t" bgcolor="#f1524c" align="center" style="mso-padding-alt:14px 30px; font:700 14px/16px Arial, Helvetica, sans-serif; text-transform:uppercase; border-radius:22px;">
																							<multiline>
																								<a href="https://keepwarmbaby.herokuapp.com">
																									More Details
																								</a>
																							</multiline>
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</td>
																<td class="hide" width="145"></td>
															</tr>
														</table>
														<!--[if gte mso 9]>
																</v:textbox>
															</v:rect>
															<![endif]-->
													</td>
												</tr>
											</table>
										</layout>

										<layout label="cenetered_text_with_button_with_image_bg">
												<table width="100%" cellpadding="0" cellspacing="0">
													<tr>
														<td class="bg" bgcolor="#fdeeee" background="http://i.imgur.com/jbXWE04.jpg" style="background:#fdeeee url(http://i.imgur.com/jbXWE04.jpg) no-repeat 50% 0; background-size:cover;">
														<!--[if gte mso 9]>
															<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px; height:374px;">
																<v:fill type="tile" src="http://i.imgur.com/jbXWE04.jpg" color="#fdeeee" />
																<v:textbox inset="0,0,0,0">
																<![endif]-->
																<table width="100%" cellpadding="0" cellspacing="0">
																	<tr>
																		<td class="hide" width="145" height="374"></td>
																		<td class="pt-10p plr-9p pb-8p">
																			<table width="100%" cellpadding="0" cellspacing="0">
																				<tr>
																					<td class="fs-24 lh-28" align="center" style="padding:0 0 12px; font:700 26px/30px Arial, Helvetica, sans-serif; color:#242424;">
																						<multiline>
																							Love Note
																						</multiline>
																					</td>
																				</tr>
																				<tr>
																					<td align="center" style="padding:0 0 20px; font:15px/30px Arial, Helvetica, sans-serif; color:#311c1c;">
																						<multiline>
																						${userFound[j].receiver[i].mailContent}
																						</multiline>
																					</td>
																				</tr>
																				
																			</table>
																		</td>
																		<td class="hide" width="145"></td>
																	</tr>
																</table>
																		<!--[if gte mso 9]>
																</v:textbox>
															</v:rect>
															<![endif]-->
														</td>
													</tr>
												</table>
											</layout>
								<!-- section -->
								
								<layout label="centered_text_with_color_bg">
										<table width="100%" cellpadding="0" cellspacing="0">
											<tr>
												<td class="l-white p-25" bgcolor="#f1524c" style="padding:53px 150px 60px;">
													<table width="100%" cellpadding="0" cellspacing="0">
														<tr>
															<td align="center" style="padding:0 0 9px; font:700 26px/35px Arial, Helvetica, sans-serif; color:#fff;">
																<multiline>
																	What is this email?
																</multiline>
															</td>
														</tr>
														<tr>
															<td align="center" style="padding:0 0 20px; font:15px/30px Arial, Helvetica, sans-serif; color:#fff;">
																<multiline>
																	Someone has registed on our website to send you this email with love <3<br>
																	Visit KeepWarmBaby to send back your emotion!
																	
																</multiline>
															</td>
														</tr>
														<tr>
															<td>
																<table align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
																	<tr>
																		<td class="btn-01 active-t" bgcolor="#ffffff" align="center" style="mso-padding-alt:14px 30px; font:700 14px/16px Arial, Helvetica, sans-serif; text-transform:uppercase; border-radius:22px;">
																			<multiline>
																				<a href="https://google.com">
																					Visit
																				</a>
																			</multiline>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</layout>
								<!-- section -->


								<!-- section -->

								<!-- section -->

								<!-- section -->
								
							</repeater>
						</td>
					</tr>
					<!-- footer -->
					<tr>
						<td class="p-30 p-20" style="padding:50px 30px 30px;">
							<table width="100%" cellpadding="0" cellspacing="0">
								
									
								<tr>
									<td align="center" style="font:13px/22px Arial, Helvetica, sans-serif; color:#242424;">
										
										<singleline>KeepWarmBaby</singleline><br />
										<singleline>HEDSPI4K Team.</singleline>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>`
                        };

                        transporter.sendMail(mailOptions, function (err, info) {
                            if (err) console.log(err);
                            else console.log("success");
                        });
                    }
                }
            }
        });
    },
    true, /* Start the job right now */
    'Asia/BangKok' /* Time zone of this job. */
);

// mongoose.connect('mongodb://admin:password123@ds030607.mlab.com:30607/register-people', {useNewUrlParser: true}, (err) => {
//     if (err) console.log(err);
//     else console.log("DB connect Success !!!");
// });
mongoose.connect('mongodb://admin:password123@ds030607.mlab.com:30607/register-people', {useNewUrlParser: true}, (err) => {
    if (err) console.log(err);
    else console.log("DB connect Success !!!");
});

let app = express();

app.use(session({
    secret: 'roseislalala',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send("Keep warm baby <3");
});

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, (err) => {
    if (err) console.log(err);
    else console.log("Server is running at " + port + "");
});

