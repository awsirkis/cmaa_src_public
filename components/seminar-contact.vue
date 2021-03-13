<template>
            <div >
            <div class="row">
                <label class="col-lg-4 col-xs-12">
                    Your Name:
                    <input type="text" name="name" required>
                </label>
                <label class="col-lg-4 col-xs-12">
                    Email:
                    <input type="email" name="_replyto">
                </label>
                <label class="col-lg-2 col-xs-12">
                    Phone #:
                    <input type="phone" name="name">
                </label>
                <label class="col-lg-2 col-xs-12">
                    Shirt Sizes:
                    <input type="phone" name="name">
                </label>
            </div>
            <div class="row">
                <div class="row col-md-6 col-sm-12">
                    <label class="col-12">
                        CC No.:
                        <input pattern=".{12, 19}" type="number" name="cc_number" autocomplete="cc-number" required>
                    </label>
                </div>
                <div class="row col-md-6 col-sm-12">
                    <label class="col-6">
                        CVV:
                        <input type="number" name="cvv" autocomplete="cc-csc" required>
                    </label>
                    <label class="row col-6">
                        EXP Date:
                        <div class='row'>
                            <div class="col-6">
                                <input type="number" pattern='.{1, 12}' name="exp_month" autocomplete="cc-exp-month" required >
                            </div>
                            
                            <div class="col-6">
                                <input type="number" pattern=".{20,}" name="exp_year" autocomplete="cc-exp-year" required>
                            </div>
                        </div>
                    </label>
                </div>
                
            </div>
            <div class="row">
                <div class="row col-md-6 col-sm-12">
                    <label class="col-12">
                        Billing Address:
                        <input type="text" name="address" required>
                    </label>
                </div>
                <div class="row col-md-6 col-sm-12">
                    <label class="col-4">
                        City:
                        <input type="text" name="city" required>
                    </label>
                    <label class="col-4">
                        State:
                        <input type="text" name="state" pattern=".{2}" required>
                    </label>
                    <label class="col-4">
                        ZIP Code:
                        <input type="number" name="zip" patern=".{5}" required>
                    </label>
                </div>
            </div>
        </div>
</template>