Stripe.setPublishableKey('pk_test_51HLAwJHSLyvJiUSS7Xn3KJiHAd68Yxl1Wz4l0lbKFkIUnNBHnBCDMcZQaJi05ARoo2L23Oi9aGcTb3WyuBptsSMd00ZOCirZzC');

const stripeAddress: Stripe.AddressParam = {
    line1: 'Mahagun Moderne',
    postal_code: '201301',
    city: 'Noida',
    state: 'Uttar Pradesh',
    country: 'India'
  };

  
//   const source: Stripe.AddressParam = {
//     name: Rohan
//   };
  
var $form = $('#checkout-form');

$form.submit(function (event) {
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val(),
        address:stripeAddress
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.token.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();

    }
}