@component('mail::message')
# Real Estate Payment

Hi, {{$payment->first_name}} {{$payment->last_name}}.


@component('mail::panel')
Your payment was SUCCESSFUL. Please see details below:
@endcomponent

Camaya Online Payment Transaction ID: {{$payment->transaction_id}}

Amount: {{$payment->currency}} {{number_format($payment->payment_amount, 2, '.', ',')}}

Payment Type: {{$payment->payment_type}}

Payment Gateway: {{$payment->payment_gateway}}

Payment Gateway Reference No.: {{$payment->payment_gateway_reference_number}}

Payment Gateway Message:
You have successfully paid


Should you require further information, you may contact our Customer Relations Team through E-mail
at crm@camayacoast.com.

@component('mail::button', ['url' => env('REAL_ESTATE_PAYMENT_PORTAL_URL')])
Make another Payment
@endcomponent


Thanks,<br>
<img src="{{ env('APP_URL').'/images/camaya-logo.png' }}" style="display: block;" width='100' />
Online Payment Team
@endcomponent
