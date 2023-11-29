<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head> 

<body>

    <style>
        @media only screen and (max-width: 600px) {
            .inner-body {
            width: 100% !important;
        }

        .footer {
            width: 100% !important;
            }
        }

        @media only screen and (max-width: 500px) {
            .button {
            width: 100% !important;
            }
        }
    </style>

    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td align="center">
                <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">

                    <tr>
                        <td class="header">
                            <img src="{{ env('APP_URL').'/images/camaya-logo.png' }}" style="vertical-align: middle;" width='100' />
                        </td>
                    </tr>


                    <!-- Email Body -->
                    <tr>
                        <td class="body" width="100%" cellpadding="0" cellspacing="0">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                            <!-- Body content -->
                                <tr>
                                    <td class="content-cell">
                                        <h4 style="text-align: center;">VOUCHER PURCHASED : PENDING PAYMENT</h4>

                                        <hr/>

                                        <p> 
                                            @if (isset($customer))
                                                Hi <strong>{{$customer['first_name']}}</strong>,
                                            @else 
                                                Hi!
                                            @endif
                                        </p>

                                        <p>Thank you for purchasing Camaya Voucher/s for Save Now, Travel Later.</p>

                                        <p><strong>Transaction Reference No: {{$transaction_reference_number}}</strong></p>

                                        <p>
                                            <strong>Customer Details:</strong><br>
                                                        
                                            @if (isset($customer))
                                                Name: {{$customer['first_name']}} {{$customer['last_name']}}<br>
                                                Contact Number: {{$customer['contact_number']}}<br>
                                                Email Address: {{$customer['email']}}
                                            @else 
                                                -
                                            @endif
                                        </p>

                                        {{-- Hide bank details request as of April 5, 2023 --}}
                                        {{-- <p>Below is our bank account details to settle your invoice via bank deposit / online bank transfer:</p>

                                        <p>
                                            Bank: Metrobank<br/>
                                            Account number: 442-7-442-01632-8<br/>
                                            Account name: Earth and Shore Tourism Landholdings Corp.<br/>
                                            Bank branch: Rockwell Makati
                                        </p>

                                        <p>Kindly settle the amount within 48 hours (2 days) prior to date of voucher purchase and send us a copy of the deposit slip at <a href="mailto:reservations@camayacoast.com">reservations@camayacoast.com</a> with the following details:</p>

                                        <p>
                                            @if (isset($customer))
                                                Customer name: {{$customer['first_name']}} {{$customer['last_name']}}<br>
                                            @else
                                                Customer name: <br>
                                            @endif
                                            Transaction reference no: {{$transaction_reference_number}}<br>
                                            Amount deposited:<br/>
                                            Date of deposit:<br/>
                                            Branch:<br/>
                                            Voucher/s:<br/>
                                        </p> --}}

                                        {{-- <p>Please allow 24 &ndash; 36 hours for bank deposit verification.</p> --}}

                                        <div style="clear:both;"></div>
                                        <p style="margin-top: 8px;">
                                            For any concerns or clarifications, please contact our reservations team.<br/><br/>
        
                                            <strong>Commercial Reservation:</strong><br/>
                                            <!-- 0917 711 2638<br/>
                                            0917 543 0560<br/><br/> -->
                                            reservations@camayacoast.com<br/>

                                            <strong>Property Owner/HOA Booking Reservations:</strong><br/>
                                            {{-- 0917-520-6192<br/> --}}
                                            hoabooking@camayacoast.com<br/><br/>

                                            Or email us at <a href="mailto:reservations@camayacoast.com">reservations@camayacoast.com</a><br/><br/>
                                        </p>

                                        <p>Regards,<br/>
                                        Camaya Coast team</p>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td class="content-cell" align="center">
                                        &copy; Camaya Coast. All rights reserved.
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
</html>
