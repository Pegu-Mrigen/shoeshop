<html>
    <head>
        <body>
            
            <?php
$apiKey = "rzp_test_cl2yTMMQVauhws"




?>

<form>
    <script src="https://checkout.razorpay.com/v1/checkout.js" data-key="<?php echo $apiKey; ?>" // Enter the Test API Key ID
    generated from Dashboard → Settings → API Keys data-amount="100" // Amount is in currency subunits. Hence,
            29935 refers to 29935 paise or ₹299.35. data-currency="INR" // You can accept international payments by
            changing the currency code. Contact our Support Team to enable International for your account
            data-id="<?php echo 'OID'.rand(10,1000).'END';  ?>" // Replace with the order_id generated by you in the backend.
            data-buttontext="Pay with Razorpay" data-name="Acme Corp"
            data-description="A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami"
            data-image="https://example.com/your_logo.jpg" data-prefill.name="Gaurav Kumar"
            data-prefill.email="gaurav.kumar@example.com" data-theme.color="#F37254"></script>
            <input type="hidden" custom="Hidden Element" name="hidden">
        </form>
        <div>
            
            Please proceed to checkout!
            
            
        </div>
        
        
        
    </body>
    </head>
        </html>
        