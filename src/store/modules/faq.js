export default {
  namespaced: true,
  state() {
    return {
      faq: [
        {
          category: 'shopping',
          header: 'How to Conatact a Shop',
          title: 'Shopping & Gifting',
          subtitle: 'How to Conatact a Shop',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    `Contacting a seller through <strong>Messages</strong> is the best way to get information about an item or resolve any issues you have with your order. Each seller on Win-Win manages their own orders, and makes decisions about cancellations, refunds, and returns. Learn more about getting help with your order.`,
                  ],
                },
                {
                  subtitle: 'How to contact a shop before buying',
                  paragraphs: [`To contact the seller:`],
                  numList: [
                    'On a listing page, select <strong>Message Seller</strong> under the listing title.',
                    'Sign in to your Win-Win account if you aren’t already, or create an account.',
                    'Type your question into the textbox.',
                    ' After you <strong>Send</strong> your message, the seller will be notified and can respond.',
                  ],
                },
                {
                  paragraphs: [
                    `To ask a question about an item in the Win-Win app:`,
                  ],
                  numList: [
                    'Tap <strong>Contact</strong> on a shop homepage.',
                    'Sign in to your Win-Win account if you aren’t already, or create an account.',
                    'Type your question into the textbox.',
                    'After you <strong>Send</strong> your message, the seller will be notified and can respond.',
                  ],
                },
                {
                  subtitle: 'How to contact a shop about an order',
                  numList: [
                    'Sign in to Win-Win and go to <strong>Your account</strong>. On the Win-Win app, sign in and go to <strong>You</strong>.',
                    'Go to Purchases and reviews.',
                    'Select <strong>Help with order</strong> next to the order. On the Win-Win app, tap the order, then select Help with order.',
                    'Select <strong>Message Seller</strong>.',
                    'In the text box that appears, let the seller know that you’d like to return or exchange an item.',
                  ],
                },
                {
                  subtitle: 'The seller wasn’t able to help me',
                  paragraphs: [
                    'If the seller is unable to help you, your next step is to request  help from Win-Win by opening a case. As part of Win-Win’s Purchase Protection program for qualifying orders, you’ll receive a full refund for any item that doesn’t arrive, arrives after the estimated delivery date window, arrives damaged, or doesn’t match the description in the listing.',
                    'To get help from Win-Win, Choose your order, then select <strong>Open a case</strong> at the bottom of the page. Learn more about cases on Win-Win.',
                  ],
                },
                {
                  subtitle: 'I checked out as a guest',
                  paragraphs: [
                    'If you checked out as a guest, you can link your order to a new or existing Win-Win account to get help.',
                    'Learn how to link your guest order to an Win-Win account.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'Status of My Order',
          title: 'After You Purchase',
          subtitle: 'What’s the Status of My Order?',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'You can check the shipping status of your order on Win-Win or the Win-Win app. If the seller added a tracking number, you can use that to get detailed information about the package’s movement through the shipping carrier.',
                  ],
                },
                {
                  subtitle: 'How to find your order’s shipping status',
                  paragraphs: [
                    '<strong>To find your order’s shipping status:</strong>',
                  ],
                  numList: [
                    'Sign in to Win-Win and go to <strong>Your account</strong>, or sign in to the Win-Win app and go to <strong>You</strong>.',
                    'Go to <strong>Purchases and reviews</strong>.',
                    'Find your order. On the Win-Win app, tap your order.',
                  ],
                },
                {
                  paragraphs: [
                    'You’ll see the shipping status to the right of your order. You’ll also see an estimated delivery date which should give you an idea of when you can expect the order to arrive, and a tracking number if it’s available for your order.',
                  ],
                },
                {
                  subtitle: 'What do the shipping statuses mean?',
                  paragraphs: [
                    'The shipping statuses on your <strong>Purchases</strong> page let you know where in the shipping process your order is. If the status is <strong>Not Shipped</strong>, the seller hasn’t completed the order yet or didn’t update the order on Win-Win.',
                    'Once the seller has completed the order and is ready to ship, you can expect an email shipping notification from Win-Win. On your <strong>Purchase</strong> page, your order can have one of the following statuses:',
                    '<strong>The different shipping statuses:</strong>',
                  ],
                  list: [
                    '<strong>Shipped</strong> means that the seller has completed the order on Win-Win and is on its way.',
                    '<strong>Pre-transit:</strong> The seller added a tracking number and it is pending scanning at the shipping facility.',
                    '<strong>In Transit:</strong> The seller has shipped your order and is on its way to you.',
                    '<strong>Delivered:</strong> The package has arrived, and you can now leave a review for your order.',
                  ],
                },
                {
                  paragraphs: [
                    'If the estimated delivery date has passed and your order still shows as <strong>Not shipped</strong>, it’s possible that the seller forgot to mark the order as complete on Win-Win or hasn’t shipped it yet. If you need clarification, go to your <strong>Purchases</strong> page and select <strong>Help with order</strong>.',
                  ],
                },
                {
                  subtitle: 'How to track a package',
                  paragraphs: [
                    'If the seller used a shipping carrier that is directly supported by Win-Win and has added a tracking number, you’ll see a <strong>Track Package</strong> button next to the order on your <strong>Purchases</strong> page. Select <strong>Track Package</strong> to see detailed information about your package’s status.',
                    'You can also see shipping information in the shipping notification emails for your order. Select <strong>Track Package</strong> in the email notification to view the status of your delivery.',
                    'If your seller used a shipping carrier not supported by Win-Win, but has provided a tracking number for the order, you can find it by selecting <strong>View Receipt</strong> next to the order on your <strong>Purchases</strong> page.',
                    'Some international or cross-border shipments won’t show tracking once the order leaves the departing country. The tracking status should update when the package arrives in the destination country.',
                    '<strong>My order doesn’t have a tracking number</strong>',
                    'Not all shipping methods include tracking information. If a tracking number for your item was not provided, contact the seller for help.',
                  ],
                },
                {
                  subtitle:
                    'How to get your shipping status or track your order without a Win-Win account',
                  paragraphs: [
                    'If you purchased an item using guest checkout, you’ll receive a confirmation email once your order has shipped. If your seller has included a tracking number, you can select <strong>Track your package</strong> at the top of the email.',
                    'If you checked out as a guest, you can still reach out to the seller by replying to the receipt that was emailed to you after purchase.',
                  ],
                },
                {
                  subtitle: 'What to do if your order doesn’t arrive',
                  paragraphs: [
                    'If your order doesn’t arrive and your order qualifies, you’ll receive a full refund as part of Win-Win’s Purchase Protection program.',
                    'Learn how to start the process.',
                    'We recommend that you try to locate the package before you start the refund process:',
                  ],
                  list: [
                    'See if someone else in your household or office accepted the package.',
                    'If the item you purchased isn’t time-sensitive, try waiting a day. Sometimes the carrier needs some extra time to deliver the package.',
                    'Contact your local post office or shipping center to see if the package is there.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'How to Get Help with An Order',
          title: 'Order Issues & Returns',
          subtitle: 'How to Get Help with An Order',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'If you need help with an order, the seller you purchased your order from is the best person to help you. Sellers can help if you need to:',
                  ],
                  list: [
                    'Check your order status',
                    'Update your shipping address',
                    'Make a change to your order',
                    'Request a refund, return, or exchange',
                    'Request a cancellation',
                  ],
                },
                {
                  paragraphs: ['<strong>To get help with your order:</strong>'],
                  numList: [
                    'Sign in to Win-Win and go to <strong>Your account</strong>. On the Win-Win app, sign in and tap <strong>You</strong>.',
                    'Select Purchases and reviews.',
                    'Next to the order you need help with, select <strong>Help with Order</strong>.',
                    'Select an option under <strong>What do you want to reach out about?</strong> to tell the seller what you need help with.',
                    'Add a message. You can also include an image.',
                    'Select <strong>Send to seller</strong>. You can see how quickly this seller usually answers the above <strong>Send to seller</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'The seller can usually answer any questions you have about your order. If the seller is unable to help you, you’ll need to open a case with Win-Win in order to get further assistance. With Win-Win’s Purchase Protection program for qualifying orders, you’ll receive a full refund for your item if it doesn’t arrive, arrives damaged, or isn’t as described. Learn more about how to open a case with Win-Win.',
                  ],
                },
                {
                  subtitle: 'I checked out as a guest',
                  paragraphs: [
                    'If you checked out as a guest, you’ll need to link your order to an Win-Win account in order to open a case with Win-Win. Find out how you can link your guest order to an Win-Win account.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'How to Find the Best Items for You on Win-Win',
          title: 'Searching for Items',
          subtitle: 'How to Find the Best Items for You on Win-Win',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    "There are lots of items and shops to choose from on Win-Win, and we want to make sure you find exactly what you're looking for. Here are some tips for finding that perfect item.",
                  ],
                },
                {
                  subtitle: 'What to look for when searching',
                  paragraphs: [
                    'To help you find the best items for you on Win-Win, you’ll see different badges on items in Win-Win search:',
                    ' <strong><sup class="sup-bg has-background-warning">Bestseller</sup> Bestseller</strong>',
                    'An item with a bestseller badge has had high sales volume in the past 6 months, and is popular with other shoppers.',
                    `<strong><sup class="sup-bg has-background-warning">Win-Win's Pick</sup> Win-Win's Pick</strong>`,
                    'Items with an Win-Win’s Pick badge are chosen by Win-Win style experts to highlight items from shops that have shown quality, reliability and style.',
                    `<strong><sup class="sup-bg has-background-success">FREE shipping</sup> Free shipping</strong>`,
                    'The free shipping badge means that this item ships for free to your stated location.',
                  ],
                },
                {
                  subtitle: 'What to check before buying',
                  paragraphs: [
                    'After you pick out some items in search, here are more signals you can use to tell if this item will work for you:',
                    '<svg class="svg-inline--fa fa-star star-seller-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="" fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg> <sup class="sup-color star-seller">Star Seller</sup><strong> Star Seller</strong>',
                    'Win-Win sets a high customer service standard for all sellers. When you see a Star Seller badge, it means the seller sets a shining example for providing a great customer experience, with a history of 5-star reviews, on-time shipping, and quick replies. ',
                    '<strong>Shop reviews</strong>',
                    'You can see reviews on a shop homepage or on the listing page when viewing an item. Shop reviews are  feedback from buyers who have purchased from this shop previously. Some buyers  include photos in their reviews, which along with the listing photos will give you a sense of what the item will look like. The star rating you see for a seller is the average of the reviews they’ve received from buyers in the past 12 months.',
                    '<strong>Policies</strong>',
                    'All Win-Win shops have their own policies where sellers outline if and how they accept returns or cancellations. Check if a seller offers returns or cancellations before purchasing.',
                    `<span><svg class="svg-inline--fa fa-truck has-text-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path class="" fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></span> <strong>When your order should arrive</strong>`,
                    'Under the <strong>Add to cart</strong> button, you can see the day this item should arrive if you order now.',
                    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gifts" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-gifts has-text-info"><path class="" fill="currentColor" d="M200.6 32C205 19.5 198.5 5.8 186 1.4S159.8 3.5 155.4 16L144.7 46.2l-9.9-29.8C130.6 3.8 117-3 104.4 1.2S85 19 89.2 31.6l8.3 25-27.4-20c-10.7-7.8-25.7-5.4-33.5 5.3s-5.4 25.7 5.3 33.5L70.2 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H200.6c-5.4-9.4-8.6-20.3-8.6-32V256c0-29.9 20.5-55 48.2-62c1.8-31 17.1-58.2 40.1-76.1C271.7 104.7 256.9 96 240 96H217.8l28.3-20.6c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3L192.5 55.1 200.6 32zM363.5 185.5L393.1 224H344c-13.3 0-24-10.7-24-24c0-13.1 10.8-24 24.2-24c7.6 0 14.7 3.5 19.3 9.5zM272 200c0 8.4 1.4 16.5 4.1 24H272c-26.5 0-48 21.5-48 48v80H416V256h32v96H640V272c0-26.5-21.5-48-48-48h-4.1c2.7-7.5 4.1-15.6 4.1-24c0-39.9-32.5-72-72.2-72c-22.4 0-43.6 10.4-57.3 28.2L432 195.8l-30.5-39.6c-13.7-17.8-35-28.2-57.3-28.2c-39.7 0-72.2 32.1-72.2 72zM224 464c0 26.5 21.5 48 48 48H416V384H224v80zm224 48H592c26.5 0 48-21.5 48-48V384H448V512zm96-312c0 13.3-10.7 24-24 24H470.9l29.6-38.5c4.6-5.9 11.7-9.5 19.3-9.5c13.4 0 24.2 10.9 24.2 24z"></path></svg> <strong>Gift wrapping </strong>',
                    'Under the <strong>Add to cart</strong> button, you may see <strong>Gift wrapping available</strong>. If you’re sending a gift to someone, you can ask the seller to wrap the item before shipping it.',
                    '<svg class="svg-inline--fa fa-hourglass-half has-text-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hourglass-half" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path class="" fill="currentColor" d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"></path></svg><strong> Selling fast</strong>',
                    'This item is low in stock, or other shoppers have it in their carts.',
                    '<strong>Message the seller</strong>',
                    'You can message the seller with any questions you have about an item to help with your decision. You can see how quickly sellers usually reply under the <strong>Message</strong> button on the listing page.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'How to Search for Items and Shops on Win-Win',
          title: 'How to Find the Best Items for You on Win-Win',
          subtitle: 'How to Search for Items and Shops on Win-Win',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'You can use the search bar at the top of Win-Win to look for items or shops.',
                  ],
                },
                {
                  subtitle: 'How to search for items',
                  paragraphs: [
                    'Enter descriptive terms in the search bar to start your search. For example: “rustic blue coffee mug,” or “custom charm necklace.”',
                    'Search results are ordered by how relevant the items are to what you search for. You can change the order of your search results with the <strong>Sort by</strong> option above the search results.',
                    'Here are a few tips to help you search for items on Win-Win:',
                  ],

                  list: [
                    'Use multiple, descriptive terms in a search to narrow down the results. For example: "green knit scarf" will return fewer, more specific results than just "scarf." ',
                    'Use a minus sign (-) in front of a word to exclude that term from your search. For example: "dress -red" will exclude any dresses tagged with "red."',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>How to filter results</strong>',
                    'On the left side of every search results page, you’ll see a list of filters to narrow down your results by:',
                  ],
                  list: [
                    'Special offers, like sales',
                    'Category, like Home & Living or Art & Collectibles',
                    'Shipping, like free shipping',
                    'Shop location',
                    'Item type, either Handmade or Vintage items',
                    'Price',
                    'Color',
                    'Ordering options',
                    '"Ship to" country',
                  ],
                },
                {
                  subtitle: 'How to search for shops',
                  paragraphs: [
                    'After you search for something, click <strong>Custom</strong> under <strong>Shop location</strong>. Type in your city, town, state, or country and select your location from the dropdown. Your search results will refresh and only show you items from shops in the location you chose.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'How to Purchase an Item On Win-Win',
          title: 'Shopping & Gifting',
          subtitle: 'How to Purchase an Item On Win-Win',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    `When you buy on Win-Win, you're purchasing from individual shops. If you have any questions about an item or order, reach out to the seller.`,
                    'Shopping internationally? Learn how currency conversion works on Win-Win.',
                    `You can shop confidently with Win-Win's Purchase Protection program. For qualifying orders, get a full refund if your purchase doesn’t arrive, arrives damaged, or doesn’t match the item description or photos.`,
                  ],
                  dropdown: [
                    {
                      isOpen: false,
                      dropdownName: 'To purchase an item on Win-Win:',
                      dropdownList: [
                        'Select the item and <strong>Add to cart</strong>.',
                        'Take any of these optional steps',
                        'Add a note to the seller.',
                        'If the item is a gift, check the box next to <strong>This order is a gift</strong>.',
                        'If you have one, apply shop coupon codes. Coupon codes are unique to specific Win-Win shops. ',
                        'Choose your preferred payment method under <strong>How you’ll pay</strong>.',
                        'Select <strong>Proceed to checkout</strong>.',
                        'If you’re signed in to your Win-Win account, confirm your shipping address and payment details.',
                        ' If you’re checking out as a guest, click <strong>Continue as a guest</strong>. Fill in your shipping and payment details. There are benefits to creating an Win-Win account before buying, but there are some purchases that you can make using guest checkout.',
                        'Review your order to check that your information and order are correct.',
                        'Select <strong>Place your order</strong>.',
                      ],
                    },
                  ],
                },
                {
                  paragraphs: [
                    '<strong>For buyers in the EEA</strong>',
                    `If you're in the EEA, which comprises the EU, Norway, Iceland, and Liechtenstein, you may be asked to authenticate your payment after you click <strong>Place your order</strong>.`,
                    `To authenticate a payment, you'll need to respond to a prompt from your card issuer and provide additional information. Depending on your card issuer, this additional information may include a correct response to a question, a password, or a passcode.`,
                    '<strong>For buyers in India</strong>',
                    'If your shipping address is located in India, you’re prompted to enter your phone number during checkout. Your order confirmation message is then sent to you via WhatApp as well as email. If you don’t have WhatsApp on your phone, you’ll receive the confirmation via SMS. To opt out of future order confirmation texts, select the unsubscribe link in the message',
                    '<strong>For buyers of digital items in the EU</strong>',
                    'When you download a digital item on Win-Win, you give up your right to a cancellation under EU consumer laws. You’ll need to check a box to confirm that you acknowledge this before you can complete your purchase.',
                  ],
                },
                {
                  subtitle: 'Congratulations!',
                  paragraphs: [
                    'Win-Win will send you an email for each shop that you’ve purchased from. If you have any questions about your order, be sure to reach out to your seller directly.',
                    'You can view your order information by going to You > Purchases and reviews.',
                    '<strong>Download a digital item you purchased</strong>',
                    `If you purchased a digital file that's available for instant download, you can access the file from your Purchases and reviews page. You’ll also receive a separate email with a download link.`,
                    `If you purchased as a guest, you'll find the link to download your items in the receipt that was emailed to you after purchase.The link will direct you to the order’s Downloads page. Learn more about downloading digital purchases.`,
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'How to Buy an Win-Win Gift Card',
          title: 'Shopping & Gifting',
          subtitle: 'How to Buy an Win-Win Gift Card',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Give someone the gift of something special with an Win-Win gift card. An Win-Win gift card works like cash on Win-Win.',
                  ],
                },
                {
                  paragraphs: ['To buy an Win-Win gift card:'],
                  numList: [
                    'Sign in to Win-Win',
                    ' Go to <strong>Gift cards</strong> at the bottom of any page. ',
                    `Fill out the information requested, including your name, the recipient's name, and the amount you want to gift. Gift cards are available for $25, $50, $100, and $250 USD.`,
                    '<span>Choose a delivery method:</span> <ul><li> <strong>Emailed to recipient:</strong> The recipient receives the gift card in their email inbox. Custom designs are only available for this option. The recipient receives the card as soon as you check out.</li> <li><strong>Printable (emailed to you): </strong> You receive the gift card in your email inbox. You can print the gift card and give it to the recipient whenever you want!</li></ul>',
                    'Add the email address you want to send the card to.',
                    'Select <strong>Add to cart</strong>.',
                    'When you’re ready to checkout, go to Proceed to checkout and complete your purchase.',
                  ],
                },
                {
                  paragraphs: [
                    'You can’t purchase an Win-Win Gift Card and check out from another shop in the same transaction. If you have other items in your cart, you can purchase them in a separate transaction.',
                    'You must have an Win-Win account to purchase an Win-Win Gift Card. Learn how to create an Win-Win account.',
                    'When you purchase a gift card, follow these guidelines:',
                  ],
                  list: [
                    'The "To" or "From" field must be no more than 25 characters in length',
                    'The message to the recipient must be no more than 5 lines in length',
                    'There can’t be any special characters or emojis in the text',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>For buyers in the EEA</strong>',
                    `If you're in the EEA, which comprises the EU, Norway, Iceland, and Liechtenstein, you may be asked to authenticate your payment after you select <strong>Place your order</strong>.`,
                    `To authenticate a payment, you'll need to respond to a prompt from your card issuer and provide additional information. Depending on your card issuer, this additional information may include a correct response to a question, a password, or a passcode.`,
                  ],
                },
                {
                  subtitle:
                    'My recipient hasn’t received their gift card. What do I do?',
                  paragraphs: [
                    'If your recipient hasn’t received their gift card, you can find the gift card code in your account.',
                    'To find the gift card code:',
                  ],
                  numList: [
                    'Sign in to Win-Win',
                    'Go to <strong>Your account</strong>.',
                    'Go to <strong>Purchases and reviews</strong>.',
                    ' Next to the gift card, select <strong>Print</strong>. The code will be on the printout of the gift card and will look like this: XXXX-XXXX-XXXX-XXXX ',
                  ],
                },
                {
                  paragraphs: [
                    'If you purchased an e-gift card and want to re-send the gift card to your recipient, go to <strong>Contact support</strong> at the bottom of this page and include your order number.',
                  ],
                },
                {
                  subtitle:
                    'I sent the gift card to the wrong email address, what can I do?',
                  paragraphs: [
                    'We’re unable to change the recipient email address for a gift card, but you can access a print version of the gift card from your Win-Win account.',
                    'To find the gift card:',
                  ],
                  numList: [
                    'Sign in to Win-Win',
                    'Go to <strong>Your account</strong>.',
                    'Go to <strong>Purchases and reviews</strong>.',
                    ' Next to the gift card, select <strong>Print</strong>. You can print the gift card, or save the print version and email it to the recipient. ',
                  ],
                },
                {
                  paragraphs: [
                    'If you’d prefer to cancel the gift card, go to <strong>Contact support</strong> at the bottom of this page and include your order number.',
                  ],
                },
                {
                  subtitle: 'How do I print my gift card?',
                  paragraphs: [
                    'If you purchased a print gift card, select <strong>Print Your Gift Card</strong> on your order confirmation email. This will take you to a page that you can print from your Internet browser. ',
                    'You can also print your gift card by visiting the Purchases and reviews page of your Win-Win account. Find your gift card order and use the link to print.',
                    'You can also print your gift card from Win-Win:',
                  ],
                  numList: [
                    ' Sign in to Win-Win',
                    'Go to <strong>Your account</strong>.',
                    'Go to <strong>Purchases and reviews</strong>.',
                    'Next to the gift card, select <strong>Print</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'If your gift card isn’t loading properly, make sure you have Adobe Acrobat installed and try these troubleshooting steps.',
                  ],
                },
                {
                  subtitle: 'How do I cancel a gift card?',
                  paragraphs: [
                    'An Win-Win gift card can only be canceled and refunded if the balance hasn’t been used on a purchase. To request a gift card cancellation, go to <strong>Contact support</strong> at the bottom of this page and include your order number in your request.',
                  ],
                },
                {
                  subtitle: 'How do I buy multiple gift cards?',
                  paragraphs: [
                    'After you add a gift card to your cart, select <strong>Add another gift card</strong>. You can repeat this as many times as you need.',
                    'If you want to purchase more than $50,000 in gift cards, go to <strong>Contact support</strong> at the bottom of this page and we’ll be happy to help. For bulk orders over $50,000, we can provide gift cards in these formats:',
                  ],
                  list: [
                    'A set of redeem codes',
                    'A PDF file of printable paper cards',
                    'We can email the gift cards to a single specific email address',
                  ],
                },
                {
                  paragraphs: [
                    `We don't offer physical plastic cards at this time.`,
                    '<strong>Notes about gift cards</strong>',
                  ],
                  list: [
                    'Win-Win Gift Cards are currently available in United States dollars (USD), British pounds (GBP), Canadian dollars (CAD), Australian dollars (AUD), and Euros (EUR).',
                    'Win-Win Gift Cards issued in GBP, AUD, and EUR expire 48 months from the date the Win-Win Gift Card is purchased. The expiration date for each Win-Win Gift Card is included in the email sent to the recipient.',
                    'You can’t use a prepaid credit card or PayPal to purchase an Win-Win Gift Card.',
                    'By purchasing, redeeming, or accepting an Win-Win Gift Card, you’re agreeing to Win-Win’s gift card policy and Terms of Use.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'Tips for Buying Safely on Win-Win',
          title: 'Buying Safely',
          subtitle: 'Tips for Buying Safely on Win-Win',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Here are some best practices to help ensure safe purchases on Win-Win.',
                  ],
                },
                {
                  subtitle: 'Credit card safety',
                  list: [
                    'Never give your full credit card number, tax identification number, or password in an email, Win-Win Message, or over the phone. ',
                    'If you are making a transaction in person, do not speak your credit card information aloud. Be sure to sign for the transaction and request a receipt.',
                    'Check your credit card statement regularly to track your spending and card activity.',
                    'Keep track of your credit card: who is authorized to use it, and who has access to it.',
                  ],
                },
                {
                  subtitle: 'Internet/Computer safety',
                  list: [
                    'Change your passwords on a regular basis. The more complex a password is, the better you’re protected.',
                    'If you share your computer or device, sign out of any website accounts before letting others use it.',
                  ],
                },
                {
                  subtitle: 'On Win-Win',
                  list: [
                    'Check a seller’s reviews and shop policies before purchase, and send an Win-Win Message to a seller before buying if you have questions or concerns.',
                    'If you see an unrecognized charge from Win-Win on your bank or credit card statement, review these considerations. If you are still unable to confirm the charge, contact our specialists, and they will help you investigate it.',
                    'Learn how Win-Win’s Purchase Protection program can help you get a full refund on your item. If you contacted the seller more than 48 hours ago, choose Open a case so Win-Win can help you. For qualifying orders, you’ll receive a refund for any item that doesn’t arrive, arrives damaged, or doesn’t match the item description or photos.',
                    'Keep your transaction on Win-Win. We can’t verify or assist with payments made outside of Win-Win Payments or PayPal.',
                    'If you receive a suspicious email claiming to be from Win-Win, forward it to us at spoof@Win-Win.com.',
                    'If you supply materials for a custom order from a shop, you do so at your own risk.',
                    'In some circumstances, Win-Win may use a third-party encryption service, SendSafely, to securely request additional information to confirm a transaction, such as a copy of government-issued photo ID.',
                  ],
                },
                {
                  subtitle: 'Contacting Win-Win Support',
                  list: [
                    'Make sure you only reach out to Win-Win Support through the Contact support button in the Help Center. Don’t call phone numbers you may see circulating on the internet, as they may not be legitimate.',
                    'Win-Win Support won’t make unrequested phone calls without prior notification. If you receive an unexpected phone call from someone claiming to be Win-Win Support, hang up and reach out to Win-Win through the Contact support button if you need help.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'shopping',
          header: 'Update My Shipping Address',
          title: 'After You Purchase',
          subtitle: 'How Do I Update My Shipping Address?',
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'If you need to update the shipping address on your order, the seller you purchased your order from is the best person to help you. Each seller on Win-Win manages their own orders, and makes decisions about cancellations, refunds, and returns. Learn more about getting help with your order.',
                  ],
                },
                {
                  subtitle:
                    'How to change your shipping address after you placed an order',
                  paragraphs: [
                    'If you placed an order with an incorrect shipping address, first check that your order hasn’t shipped yet.',
                    'Choose your order and you’ll see whether your order is <strong>Shipped</strong> or <strong>Not Shipped</strong>:',
                  ],
                  dropdown: [
                    {
                      isOpen: false,
                      dropdownName: `My order is not Shipped yet`,
                      dropdownParagraphs: [
                        'If your item is <strong>Not Shipped</strong>, you can contact the shop to update your address on the order or cancel your order. You can then reorder the items with the correct shipping address.',
                      ],
                    },

                    {
                      isOpen: false,
                      dropdownName: `My order was already Shipped`,
                      dropdownParagraphs: [
                        'If your item is <strong>Shipped</strong>, check the seller’s policies to see if they are able to offer a replacement or refund. Each seller has their own policies that are on their shop homepage. Contact the shop to request a replacement or refund.',
                        'If any issues come up after your order has been shipped, you will want to work with your seller and the shipping service directly.',
                      ],
                    },
                  ],
                },
                {
                  subtitle:
                    'How to change your shipping address during checkout',
                  paragraphs: [
                    `If you haven't placed your order yet, you can change your shipping address when you check out:`,
                  ],
                  numList: [
                    'Add an item(s) to your cart.',
                    'Go to your <strong>Cart</strong>Cart.',
                    'Choose how you’ll pay.',
                    'Go to <strong>Proceed to checkout</strong>.',
                    'Sign in to your Win-Win account if you haven’t already, or select <strong>Continue as a guest</strong>.',
                    ' Under <strong>Shipping address</strong>, check that the address you want your order shipped to is correct. If it isn’t correct, select <strong>Change</strong>.',
                    ' Select a shipping address or choose <strong>Add an address</strong> to enter a new address. Select <strong>Ship here</strong> once you have the right address.',
                    'Select <strong>Place your order</strong>.',
                  ],
                },
                {
                  subtitle:
                    'How to change the shipping address to a different country',
                  paragraphs: [
                    'If you need the shipping address on your order changed to a one in a different country, you’ll have to cancel your order and place it again with your new address. Learn how to request cancellation from the seller.',
                  ],
                },
                {
                  subtitle: 'The seller wasn’t able to help me',
                  paragraphs: [
                    'If the seller is unable to help you, your next step is to open a case about your order. Choose your order, then select <strong>Open a case</strong> at the bottom of the page. Learn more about cases on Win-Win.',
                  ],
                },
                {
                  subtitle: 'I checked out as a guest',
                  paragraphs: [
                    'If you checked out as a guest, you can claim your order to get help.',
                  ],
                  dropdown: [
                    {
                      isOpen: false,
                      dropdownName:
                        'To claim an order you purchased as a guest',
                      dropdownList: [
                        'Open your email inbox.',
                        'Locate the email receipt you received when you placed your order. This email is sent from transaction@Win-Win.com.',
                        'Select <strong>View your order</strong>.',
                        'Follow the steps to sign in or create an Win-Win account. The account you link your guest order to must have the same email address that you used for your guest order. Your order is automatically connected to your Win-Win account.',
                        'Once you’ve claimed your order, you can choose that order and contact the seller for help. ',
                      ],
                    },
                  ],
                },
                {
                  paragraphs: [
                    '<strong>I’m having trouble claiming my order</strong>',
                    `If you're having trouble claiming an order, it's possible you placed your order using an email address that you can no longer access. Learn what to do to resolve this issue.`,
                  ],
                },
                {
                  subtitle: 'I still need help',
                  paragraphs: [
                    `If you messaged the seller, and opened a case, and you didn’t receive the help you need, select <strong>Contact support</strong> at the bottom of this page and we'd be happy to help.`,
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'New for Sellers',
          title: 'Shop Management Tools',
          subtitle: `What's New for Sellers?`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Stay up to date with the latest changes for Win-Win sellers. Here you’ll find updates on new features, Win-Win policy, and site changes that can impact how you manage your shop.',
                    'This article is meant to give sellers an overview of important changes at a glance, and some updates may not be listed here. Win-Win News, the Win-Win Forums and Site Updates in the Seller Handbook also have a variety of information on what’s new at Win-Win.',
                  ],
                },
                {
                  subtitle: 'September 2023',
                  paragraphs: ['<strong>Win-Win Payments in Thailand</strong>'],
                  list: [
                    'Sellers in Thailand can now sign up for Win-Win Payments using a Payoneer Payment Account. Learn more.',
                  ],
                },
                {
                  paragraphs: ['<strong>Win-Win Share & Save </strong>'],
                  list: [
                    'Sellers now have the option to enroll in the Share & Save Program. With Share & Save, you can save on Win-Win fees when you drive your own traffic to your shop and listings.',
                  ],
                },
                {
                  paragraphs: ['<strong>Actual processing times</strong>'],
                  list: [
                    'If you have a history of completing your orders faster than your stated processing times, you can now automatically update your shipping profiles to show buyers your actual processing time.',
                  ],
                },

                {
                  subtitle: 'August 2023',
                  paragraphs: ['<strong>Make an offer feature</strong>'],
                  list: [
                    'Sellers who have their currency set to USD can allow buyers to make price offers on some or all of their listings. Learn more.',
                  ],
                },
                {
                  paragraphs: ['<strong>Payment account reserves</strong>'],
                  list: [
                    `We've updated Payment account reserves to address a few seller pain points. Learn more.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Confirming seller info</strong>'],
                  list: [
                    `Due to new laws and regulations, some sellers are receiving an email alert about an upcoming requirement to review and confirm seller info. If this applies to you, we'll contact you again by email and in your Shop Manager Dashboard to ask you to confirm your seller info within a given deadline.`,
                  ],
                },

                {
                  subtitle: 'July 2023',
                  paragraphs: ['<strong>Royal Mail QR Codes</strong>'],
                  list: [
                    'Sellers based in the UK will begin to see the option to generate a digital QR code for domestic Royal Mail orders. This code can be taken to a Royal Mail post office to have the shipping label printed there, rather than needing to do it from your home.',
                  ],
                },
                {
                  paragraphs: ['<strong>USPS Ground Advantage</strong>'],
                  list: [
                    `USPS is combining their First Class Package and Parcel Select Ground services into a new service called Ground Advantage. Learn more.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Evri transport labels</strong>'],
                  list: [
                    `UK sellers now have the option of purchasing either Royal Mail or Evri Shipping labels directly from their Win-Win shop. Learn more.`,
                  ],
                },

                {
                  subtitle: 'June 2023',
                  paragraphs: ['<strong>Order Processing Schedule:</strong>'],
                  list: [
                    'Sellers will begin to see the option to include Saturday and Sunday in their order processing times. This means that if you prepare or ship packages on the weekend, buyers will get a more accurate estimate of when their package will arrive. Learn more.',
                  ],
                },
                {
                  paragraphs: ['<strong>Google Analytics:</strong>'],
                  list: [
                    `Google has retired their former Universal Analytics service and replaced it with Google Analytics 4. To continue using Google Analytics for your Win-Win shop or Pattern site, make sure you create an updated Google ID tag using the instructions in our help article.`,
                  ],
                },

                {
                  subtitle: 'May 2023',
                  paragraphs: ['<strong>Win-Win Design Awards:</strong>'],
                  list: [
                    'The 2023 Win-Win Design Awards have kicked off! Learn more.',
                  ],
                },

                {
                  subtitle: 'June 2023',
                  paragraphs: ['<strong>Order Processing Schedule:</strong>'],
                  list: [
                    'Sellers will begin to see the option to include Saturday and Sunday in their order processing times. This means that if you prepare or ship packages on the weekend, buyers will get a more accurate estimate of when their package will arrive. Learn more.',
                  ],
                },
                {
                  paragraphs: ['<strong>Google Analytics:</strong>'],
                  list: [
                    `Google has retired their former Universal Analytics service and replaced it with Google Analytics 4. To continue using Google Analytics for your Win-Win shop or Pattern site, make sure you create an updated Google ID tag using the instructions in our help article.`,
                  ],
                },

                {
                  subtitle: 'March 2023',
                  paragraphs: ['<strong>Shop management:</strong>'],
                  list: [
                    'Sellers will begin to see a new listing creation flow in their Shop Manager. This new listing flow will roll out to groups of sellers in phases, and is planned to be available to all US and international sellers by mid-April. You can switch between the old and new listing experiences at any time. Learn more.',
                  ],
                },
                {
                  paragraphs: ['<strong>India Sellers:</strong>'],
                  list: [
                    `Sellers in India must now use shipping labels purchased through Win-Win to complete all eligible domestic orders, with some exceptions. Learn more.`,
                  ],
                },

                {
                  subtitle: 'January 2023',
                  paragraphs: ['<strong>The Win-Win Seller App:</strong>'],
                  list: [
                    'Version 1.35 of the Win-Win Seller App is now available. This update brings several changes to the in-app navigation and the ability to see and respond to buyer reviews from the More section of the app.',
                  ],
                },
                {
                  paragraphs: ['<strong>Account suspension:</strong>'],
                  list: [
                    `If your account privileges were permanently suspended due to a policy violation and you’d like to continue selling on Win-Win, you can file an appeal with Win-Win in the Appeals Center. Learn more.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Shipping:</strong>'],
                  list: [
                    `Priority Mail products purchased through Win-Win can now qualify for cubic pricing. Cubic pricing is based on a package's size and distance traveled rather than its weight. This can be beneficial for sellers who ship heavy, small items.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Win-Win Policy Update:</strong>'],
                  list: [
                    `As of January 24th, sellers outside of the EU must include a return policy when creating or editing an item listing, even if your policy is that you don't accept returns or exchanges for that listing. Whether you choose to accept returns or exchanges on your listings is still completely optional.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Mexico sellers:</strong>'],
                  list: [
                    `As of January 1, to comply with local laws. Win-Win withholds a withholds a percentage of sales for Mexico sellers to remit to the Servicio de Administración Tributaria (SAT). If you're based in Mexico, to ensure Win-Win withholds and remits the minimum necessary amount, add your RFC ID in your Legal and tax information.`,
                  ],
                },

                {
                  subtitle: 'December 2022',
                  paragraphs: ['<strong>The Win-Win Seller App:</strong>'],
                  list: [
                    'Multiple photos can now be added to listings through the Win-Win Seller app.',
                  ],
                },

                {
                  subtitle: 'November 2022',
                  paragraphs: ['<strong>Shop Management:</strong>'],
                  list: [
                    '<strong>Introduction of weekly auto replies:</strong> Sellers now have the ability to set up a recurring weekly auto reply schedule. Messages a seller receives outside of their availability will have an auto reply sent in response',
                  ],
                },
                {
                  paragraphs: ['<strong>Shipping:</strong>'],
                  list: [
                    `<strong>One World Express shipping labels:</strong> Sellers in India can now onboard with One World Express Shipping as a more affordable international shipping option.`,
                  ],
                },

                {
                  subtitle: 'October 2022',
                  paragraphs: ['<strong>Shop Management:</strong>'],
                  list: [
                    '<strong>Introduction of listing-level return policies:</strong> Sellers can now set return policies across their individual listings rather than one shop-wide return policy.',
                  ],
                },
                {
                  paragraphs: ['<strong>Payments:</strong>'],
                  list: [
                    `<strong>Update to Bank Verification for US Sellers:</strong> Sellers with bank accounts located in the US are now required to verify their bank account with Plaid while opening a shop or any time you update your bank details.`,
                  ],
                },
                {
                  paragraphs: ['<strong>Site Layout Changes:</strong>'],
                  list: [
                    `The <strong>Address tab</strong> in Shop Manager has been moved from the <strong>Payments Settings</strong> page and is now located in the <strong>Legal and tax info</strong> page.`,
                  ],
                },
                {
                  paragraphs: [
                    '<strong>The Win-Win Seller App:</strong>',
                    'The following actions can now be performed through the Win-Win Seller App:',
                  ],
                  list: [
                    `Sellers can now apply item attributes to their listings through the app.`,
                    'Listing videos can now be edited directly from the app.',
                    'Custom orders can be created through the app.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'How to Set Up and Manage an Win-Win Ads Campaign',
          title: 'Win-Win Ads & Offsite Ads',
          subtitle: `How to Set Up and Manage an Win-Win Ads Campaign`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'You can use Win-Win Ads to advertise your products, in Win-Win search results and other pages on Win-Win. Set your budget and choose which listings to advertise, and we’ll do the rest. Win-Win Ads optimizes your budget to advertise your listings in the places on Win-Win where they perform best.',
                  ],
                },

                {
                  subtitle: 'How do I set up Win-Win Ads?',
                  paragraphs: ['To set up Win-Win Ads:'],
                  numList: [
                    'On Win-Win.com, select <strong>Shop Manager</strong>.',
                    'Choose <strong>Marketing</strong>.',
                    'Choose <strong>Win-Win Ads</strong>',
                    `Set your daily budget. This should be the maximum amount you're willing to spend to advertise your items per day. The default minimum daily budget is $1.00. Remember that you can change your budget at any time.`,
                    'Select <strong>Start advertising</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>Where will my ads be shown?</strong>',
                    'When you are advertising your listings through Win-Win Ads, we may show your items throughout Win-Win. This includes Win-Win Search, Category Pages, Market Pages on both Win-Win.com and the Win-Win app.',
                    'When you advertise with Win-Win Ads, your listings stand out in Win-Win search. This makes it easier to reach buyers with a higher intent to purchase. With Win-Win’s data insights and expertise, we optimize your advertising and expand the reach of your ads on Win-Win.',
                  ],
                },

                {
                  subtitle:
                    'How do I set which countries buyers see my ads in?',
                  paragraphs: [
                    'Your ads will only be shown to buyers in countries that you ship to.',
                    'If you use shipping profiles, here’s how to select the countries you ship to:',
                  ],
                  numList: [
                    'On Win-Win.com, select <strong>Shop Manager</strong>.',
                    'Choose <strong>Settings</strong>.',
                    'Choose <strong>Shipping settings</strong>.',
                    'Select <strong>Shipping profiles</strong>.',
                    'Choose <strong>Edit</strong> for the profile you want to update.',
                    'Add or remove locations.',
                    'Select <strong>Save Profile</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'If you don’t use shipping profiles, learn how to set shipping countries on your listings.',
                  ],
                },

                {
                  subtitle:
                    'How do I choose which of my listings to advertise?',
                  paragraphs: [
                    'By default, all your current listings are advertised when you start an Win-Win Ads campaign. You can choose to edit or update which listings you want to advertise.',
                    'To start or stop advertising a listing:',
                  ],
                  numList: [
                    'From <strong>Win-Win Ads</strong>, choose Manage advertised listings.',
                    'Find the listing you want to start or stop advertising. You can search through your listings, or filter them by section or advertising status',
                    'Select the button under <strong>Ad on/off</strong> to include or remove a listing from your Win-Win Ads campaign.',
                    'To add multiple listings from your campaign at once, check the box next to the listings you want to advertise. Uncheck this box to remove a listing from your campaign.',
                    'Choose <strong>Update</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'You can change which listings you advertise at any time. Be sure that the listings you advertise follow Win-Win’s Advertising & Marketing Policy.',
                  ],
                },

                {
                  subtitle: 'How do I change my daily advertising budget?',
                  paragraphs: [
                    'You can set your daily budget, which is the maximum amount of what you’ll spend per day on advertising. Your ads budget is only used for ads on Win-Win.',
                    'To change your daily budget:',
                  ],
                  numList: [
                    'From <strong>Win-Win Ads</strong>, select <strong>Manage your budget</strong>',
                    'Enter your new daily budget.',
                    'Choose <strong>Update</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>What determines the limit for my maximum daily budget?</strong>',
                    `There is a limit to how high you can set your daily budget. To determine the limit for your maximum daily budget, we take into account how much you spend on average, as well as your current payment status and payment history. We'll increase your maximum daily budget over time if you're consistently spending your full daily budget.`,
                    `All sellers start with a maximum daily budget of $25.00, and we recalculate this budget on a weekly basis for sellers enrolled in Win-Win Payments and on a monthly basis for sellers not enrolled in Win-Win Payments.`,
                    `If you have advertised in the past, when you restart your campaign, you’ll have the same maximum budget that was in place when you last advertised.`,
                    `If you notice a drop in your maximum daily budget, it may be because you have an amount due. Paying your amount due will likely raise your maximum budget back up`,
                    `<strong>What if I want to set a daily budget that is higher than what I’m currently allowed, especially for the holidays?</strong>`,
                    `When you first start advertising, you’ll start with a maximum daily budget of $25. This is because we need some time to understand your Win-Win Ads spend to determine your maximum daily budget.`,
                    `If you want to spend above this amount, it’s best to start advertising with your full budget early. This can help raise your maximum daily budget by your desired peak advertising periods.`,
                  ],
                },

                {
                  subtitle: 'How am I charged for Win-Win Ads?',
                  paragraphs: [
                    `With Win-Win Ads, you only pay when someone clicks on one of your ads. The amount you pay for depends on how many people click on your ads, and how valuable the place where your ad is shown is. Your cost per click can vary for each listing and each time it appears in search results. Learn more about cost per click.`,
                    `Your costs per click are summed for each day and added to your Payment account the next day. You’ll never spend over your daily budget. Once you’ve been charged for enough clicks to use up your entire daily budget, we will stop showing your ads on Win-Win.`,
                    `<strong>How to view your Win-Win Ads charges</strong>`,
                    `Your charges for Win-Win Ads are displayed under <strong>Budget spent</strong> on your Win-Win Ads page. Your Payment account is also updated daily with ads charges so you can see how much you're spending on advertising.`,
                    `To view ads charges on your Payment account:`,
                  ],
                  numList: [
                    'On Win-Win.com, select <strong>Shop Manager</strong>.',
                    'Choose <strong>Finances</strong>.',
                    'Choose <strong>Payment account</strong>.',
                    'You may see your most recent charges under <strong>Recent activities</strong>.',
                    'To see older ads charges, select <strong>Monthly statements</strong> at the bottom of the page. You can see the statement for the current month. To view additional statements, select <strong>See all monthly statements</strong>.',
                  ],
                },

                {
                  subtitle: 'How do I use my Win-Win Ads Performance graph?',
                  paragraphs: [
                    'Your Win-Win Ads Performance graph shows in-depth details for your Win-Win Ads performance over time, and is visible by default. To collapse or expand the graph, select the <strong>Hide/Show Graph</strong> button. ',
                    'To adjust the period of time the graph displays, select the dropdown menu next to Your stats for, and choose a preset time frame or a custom range of dates to review. We recommend selecting a time frame of at least 30 days for the most accurate insights into performance trends over time.',
                    'For more information on how to review and optimize your campaign, check out How to Review the Performance of Your Win-Win Ads.',
                  ],
                },

                {
                  subtitle: 'How do I turn off Win-Win Ads?',
                  paragraphs: [
                    'You can stop advertising specific listings, or turn off Win-Win Ads completely.',
                    'To turn off your Win-Win Ads campaign:',
                  ],
                  numList: [
                    'On Win-Win.com, go to your <strong>Shop Manager</strong>.',
                    'Select <strong>Marketing</strong>.',
                    'Choose <strong>Win-Win Ads</strong>.',
                    'Beneath <strong>Show more orders</strong>, choose the Pause your ads button.',
                    'Select <strong>Turn off ads</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'If you want to learn how to turn off Offsite Ads, see our help center article.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'How to Use the New Listing Experience',
          title: 'Creating a Listing',
          subtitle: `How to Use the New Listing Experience`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'The new listing experience is an updated, streamlined listing experience for sellers. Toggle between sections from the navigation bar at the top of the page to quickly access the listing information you want to add or edit.',
                    'To list an item in your Win-Win shop:',
                  ],
                  numList: [
                    'On Win-Win.com, go to your <strong>Shop Manager</strong>.',
                    'Select <strong>Listings</strong>.',
                    'Select <strong>Add a listing</strong>.',
                    'Fill in the relevant information in the listing creation form.',
                    'When you’re finished, select <strong>Publish</strong>. The listing is now live in your shop.',
                  ],
                },
                {
                  paragraphs: [
                    'If you’d rather save the listing for later, select <strong>Save as Draft</strong> instead. You must fill in information in the Title, Quantity, Price, Category, and Shipping sections before you can save a draft.',
                  ],
                },

                {
                  subtitle: 'Features of the new listing experience',
                  paragraphs: [
                    'The new listing experience is separated into the following sections:',
                    '<strong>About</strong>',
                    'This will be what shoppers see when browsing for items on Win-Win, so be sure to follow best practices for getting your items found in search. From here you can add:',
                  ],
                  list: [
                    '<strong>Title:</strong> A listing’s title can be up to 140 characters long. Try to include keywords that buyers would use when searching for an item like this.',
                    '<strong>Photos and video:</strong> Up to 10 photos and 1 video can be attached to each listing. By selecting <strong>Edit</strong>, you can adjust the image thumbnail, crop the photo to the aspect ratio of your choosing, or delete the photo. Select <strong>Apply</strong> when finished.',
                  ],
                },
                {
                  paragraphs: [
                    'Learn about best practices for images in your Win-Win shop.',
                  ],
                  list: [
                    `<strong>Digital files:</strong> Add up to five files for buyers to download when purchasing a digital item from your shop. This section only appears if <strong>Digital files</strong> is selected when choosing the type of item you're listing in the <strong>Core details</strong> section below.`,
                    `<strong>Description:</strong> Describe the details of your item so buyers know what they’re getting.`,
                  ],
                },
                {
                  paragraphs: [
                    'Learn about best practices for listing descriptions.',
                  ],
                  list: [
                    '<strong>Personalization:</strong> If you want to offer the ability to customize your item, select the <strong>Add Personalization</strong> button. Then, add in any personalization instructions you want buyers to see, set a limit on the number of characters a buyer can request when customizing the item, and select if you want to make personalization optional or mandatory for this item.',
                  ],
                },
                {
                  paragraphs: ['<strong>Price & Inventory</strong>'],
                  list: [
                    '<strong>Price:</strong> Set the amount buyers will pay for your item here. The price will appear in your preferred currency. ',
                    '<strong>Quantity:</strong> Add the amount of the item you have for sale. Learn more about how item quantity works with listing fees.',
                    '<strong>SKU:</strong> Create a custom SKU (Stock Keeping Unit) number for the item to help keep track of your inventory. ',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>Variations: </strong>',
                    'If you offer different options for the item like size or color, you can add variations to your listing. You’ll only be able to add variations to an item once you’ve selected a category for the item in the <strong>Details</strong> section first. Variations are unavailable for digital listings.',
                  ],
                  dropdown: [
                    {
                      isOpen: false,
                      dropdownName: 'To add variations',
                      dropdownList: [
                        'Select <strong>Add variations</strong>.',
                        'Choose the type of variation you want to add. These options will vary depending on the category you’ve selected for the item, or you can select <strong>Create your own</strong> to add a custom variation.',
                        'If you’re creating a custom variation, type in a name for it.',
                        'If you want to include or remove photos for the variation, toggle <strong>Link photos to this variation</strong> on or off.',
                        'Select the variation you want to offer from the list of available options. Select the trash can icon next to an option you’ve added to remove it from the list.',
                        'Select <strong>Done</strong>.',
                        'If the prices, quantities, or SKUs vary for your different variations, select the toggle next to the appropriate options.',
                        'Select <strong>Apply</strong>.',
                      ],
                    },
                  ],
                },
                {
                  paragraphs: [
                    'Back in the listing flow, you can add in the different SKUs, prices, and quantities for your variations, and toggle whether the variation will be visible to buyers visiting your shop. Sort these by selecting the name of the column header at the top. Selecting it again reverses the order they are sorted in.',
                    'To edit or delete your variations:',
                  ],
                  numList: [
                    'Select <strong>Manage Variations</strong>.',
                    'Select the pencil icon next to the variation you want to edit. To delete a variation, select the trash can icon instead.',
                    'When you’ve finished editing your variation, select <strong>Done</strong>.',
                    'Select <strong>Apply</strong> to save your edits.',
                  ],
                },
                {
                  paragraphs: [
                    'To edit the prices or quantities of your variations in bulk:',
                  ],
                  numList: [
                    'Check the box next to each variation you want to edit.',
                    'Select <strong>Update price</strong> or <strong>Update quantity</strong>',
                    'Enter the new price or quantity.',
                    'Select <strong>Apply</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>Details </strong>',
                    'Add the details that make it easier for shoppers to find your items in Win-Win search, and help them know exactly what they’re buying.',
                    'From Details, you can add:',
                  ],
                  list: [
                    '<strong>Core Details:</strong> These are the most basic aspects of your listing, including if it is a physical or digital listing, who made the item, what it is, and when it was made. Add any production partners involved in the creation of this item. ',
                    '<strong>Category:</strong> The category determines which sections of Win-Win’s marketplace your item appears in. Type the category of your item into the search bar, then under Results, select the option that is the closest match for what you’re listing.',
                    '<strong>Attributes:</strong> Give details about the qualities of the item, such as the color, material, size dimensions, etc. The attributes listed under this section will change depending on the category you selected. Learn more about how to use attributes for your listings.',
                    '<strong>Tags:</strong> Add up to 13 tags that describe your item. This helps your item appear in shoppers’ search results. Learn how using tags can help you get found in search.',
                    '<strong>Materials:</strong> Let shoppers know what your item is made out of.',
                  ],
                },
                {
                  paragraphs: [
                    '<strong>Shipping</strong>',
                    'Apply accurate shipping information to your listings so buyers have realistic expectations on when their order will arrive. If the listing is for a digital item, buyers will download the files you uploaded immediately after purchase.',
                    'To add shipping information to your listings:',
                  ],
                  numList: [
                    'In the <strong>Shipping Option</strong> section, choose <strong>Select Profile</strong>.',
                    'Choose one of your existing shipping profiles and select <strong>Apply</strong>, or select <strong>Create new profile</strong>.',
                    'Enter the <strong>Item weight</strong>.',
                    'Enter the <strong>Item size (when packed)</strong>.',
                    'If the item will be sent with an international shipping label, you can enter the <strong>Tariff Number</strong> to prefill a customs form',
                  ],
                },
                {
                  paragraphs: [
                    'Select <strong>Change Profile</strong> if you need to apply a different shipping profile to your listing. You can also select the three dots next to a shipping profile to <strong>Edit</strong> or <strong>Duplicate</strong> it.',
                    '<strong>Settings</strong>',
                    'Adjust the listing’s return settings, how it displays in your shop, and how the listing renews from here.',
                  ],
                  list: [
                    '<strong>Returns and exchanges:</strong> Let buyers know if you accept returns for that listing. Learn how to set a return policy on your listings.',
                    '<strong>Shop section:</strong> Select which of your shop sections you want the listing displayed in or create a new one. Learn more about how to organize your listings with shop sections.',
                    '<strong>Feature this listing:</strong> Switch the toggle button on to display the listing at the top of your shop’s homepage.',
                    '<strong>Renewal Options:</strong> Choose if you want your listings to automatically renew after they expire, or if you’d rather renew them manually. See our policy page to learn more about listing fees.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'How to Handle Spam and Suspicious Messages',
          title: 'Communicating with Buyers',
          subtitle: `How to Handle Spam and Suspicious Messages`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Win-Win is actively engaged in preventing scammers from targeting our community members. If you receive a suspicious message concerning an item in your shop, please proceed with caution.',
                    'Scammers typically create multiple accounts on Win-Win and send the same message to different sellers with little or no personalization. They will often target sellers who list high-priced items in their shop.',
                  ],
                },

                {
                  subtitle: 'How to mark a message as spam',
                  paragraphs: [
                    '<strong>Do not respond</strong> to the message. Win-Win does not recommend engaging with suspicious messages for any reason. Responding will encourage the scammers and cause you to receive further scam messages.',
                    'If you receive a suspicious message, you can mark it as spam by following these steps:',
                  ],
                  numList: [
                    'Sign in to Win-Win and go to <strong>Your Account</strong>.',
                    'Go to <strong>Messages</strong>',
                    'Select the suspicious message from your inbox.',
                    'Choose <strong>Mark as Spam</strong>',
                  ],
                },
                {
                  paragraphs: [
                    'This will move the message out of your inbox and into your Spam folder. However, you will continue to receive emails about new replies in that message. Learn how to unsubscribe from email notifications.',
                    'To send it back to your inbox, go into your Spam folder and select the message, then choose <strong>Not Spam</strong>.',
                  ],
                },

                {
                  subtitle: 'Common scammer techniques',
                  paragraphs: [
                    'The following characteristics or any combination of them may indicate the message is a scam:',
                  ],

                  listPadding: true,
                  list: [
                    `Pretending to be a buyer who is having trouble checking out and needs your email to complete their purchase. They claim that by providing your email, you'll get a link to receive payment with further instructions. They may also include a fake screenshot meant to look like the Win-Win site asking for them to input your email.`,
                    `Claiming there was an issue accepting payment for their order and sending you a fake QR code through Messages saying that you need to scan it to confirm their purchase.`,
                    `Asking for additional items to be added to their order. For example, asking sellers to purchase and include a highly priced gift card with their order and promising to pay them back later.`,
                    `Claiming they want to purchase items listed in a link which is actually malware or a link to a phishing site.`,
                    `Offering to send you more money than you are asking for your item? This is known as an <strong>overpayment scam</strong>.`,
                    `Insisting you reply via a personal email address, off of Win-Win? A buyer who immediately insists on communicating off of our site may be questionable.`,
                    `Seeming to not have read or looked at your listing, based on their vague questions.`,
                    `Refusing to go through Win-Win Checkout, thereby disqualifying the transaction from any Win-Win protection.`,
                    `Having a particular interest in an item of relatively high value. Scammers tend to focus on mid and high-value listings.`,
                  ],
                },
                {
                  paragraphs: [
                    'Win-Win Support won’t make unrequested phone calls without prior notification. Don’t call phone numbers you may see circulating online, as they may not be legitimate.',
                    'If you have further questions regarding a suspicious message you received, or if you exchanged money with a suspected scammer, please contact us by select the <strong>Contact support</strong> button at the bottom of this page.',
                    'At that point, we also encourage you to contact your local law enforcement and financial institution.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'Revenue in My Shop Stats',
          title: 'Taxes on Sales & Imports',
          subtitle: `How Is Revenue in My Shop Stats Calculated?`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Revenue in your Shop Stats usually equals <strong>your sales minus any discounts you provided to buyers</strong>. This total doesn’t factor in selling fees, shipping costs or orders that you have fully refunded and canceled.',
                  ],
                },

                {
                  subtitle: 'How to calculate your Stats Revenue',
                  paragraphs: [
                    'To calculate your <strong>Stats Revenue</strong> total, you can download your Orders CSV file:',
                  ],
                  numList: [
                    'On Win-Win, go to your <strong>Shop Manager</strong>.',
                    'Choose <strong>Settings</strong>.',
                    'Choose <strong>Options</strong>.',
                    'Choose <strong>Download Data</strong>.',
                    'Select <strong>Orders</strong> as the CSV type.',
                    'Select your desired <strong>month</strong> and/or <strong>year</strong>. To download an entire year, leave the month blank.',
                    'Choose <strong>Download CSV</strong> to save the file to your compute',
                    'Open the <strong>Orders CSV</strong> file in a compatible program, such as Microsoft Excel, Google Spreadsheets, Quickbooks, etc. ',
                    '<span>Using tools in your program, calculate:</span> <ul class="list-circle"><li>The total items costs found in <strong>Order Value</strong> column.</li> <li>The total item discounts applied to the order found in <strong>Discounts Amount</strong> column.</li></ul>',
                    'Calculate the <strong>Order Value</strong>minus the <strong>Discounts Amount</strong> total. This is your <strong>Stats Revenue</strong>.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'How to Calculate Your Win-Win Payments Deposit Amount',
          title: 'Getting Paid',
          subtitle: `How to Calculate Your Win-Win Payments Deposit Amount`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Win-Win Payments automatically calculates the deposit amount you receive in your bank account. This amount is the total of your Win-Win Payment sales and the activity in your Payment account. When you’re enrolled in Win-Win Payments, your sales funds are used to pay for your shop fees.',
                    'To calculate your Win-Win Payments deposit amount, download your monthly statement to see your full sales funds and the fees and taxes applied to your sales.',
                  ],
                },
                {
                  subtitle: 'How to download your monthly statement CSV',
                  paragraphs: [
                    'Your monthly statement contains all activity within your Payment account for a given month, which you can then use to calculate your deposit amount.',
                    'To download your monthly statement CSV files:',
                  ],
                  numList: [
                    'On Win-Win.com, go to <strong>Shop Manager</strong>.',
                    'Go to <strong>Finances</strong>',
                    'Choose <strong>Monthly statements</strong>.',
                    'Select <strong>View all monthly statements</strong>.',
                    `Choose the year and month you're interested in.`,
                    'Select <strong>Generate CSV</strong>. You’ll receive an email when the CSV file is ready.',
                    'Select <strong>Take me to download</strong> in the email, and then select <strong>Download CSV</strong> to download your CSV file.',
                  ],
                },

                {
                  subtitle:
                    'How to calculate your Win-Win Payments deposit amount',
                  paragraphs: ['To calculate your deposit amount: '],
                  numList: [
                    'Find your most recent deposit in your monthly statement CSV.',
                    'Sum all <strong>Fee</strong> and <strong>Tax</strong> amounts from the most recent deposit to present.',
                    'Sum all sales that are available for deposit. Any sale that isn’t yet available for deposit shows when funds will be available in the Info column. Don’t include these sales in your calculation for your deposit.',
                    'Subtract your <strong>Fee</strong> and <strong>Tax</strong> sum from your available funds sum',
                  ],
                },
                {
                  paragraphs: [
                    'Your deposit schedule determines when funds will be sent to your bank account. For example, if you receive deposit amounts weekly (every Monday), you’d want to calculate your deposit for a week to match weekly deposit amounts.',
                    'If you have an available for deposit balance but don’t see a deposit in your account yet, take a look at these common reasons for not receiving your deposit.',
                  ],
                },

                {
                  subtitle:
                    'Why doesn’t my deposit from Win-Win match my Net profit?',
                  paragraphs: [
                    'Your deposit amount may not match the <strong>Net profit</strong> amount in the <strong>Activity summary</strong> of your Payment account. Your <strong>Net profit</strong> is the sum of your total sales, fees, marketing, and shipping costs for the selected time period.',
                    'Your deposits are based on the amount that is <strong>Available for deposit</strong> in your Payment account. The amount <strong>Available for deposit</strong> includes your available funds, minus fees, refunds, taxes, and other activity. It doesn’t include funds from sales not yet available for deposit.',
                    'Your deposit schedule determines when funds are deposited to your bank account. For example, many sellers receive deposits weekly. Your <strong>Net profit</strong> can only be calculated at a minimum of a monthly basis.',
                  ],
                },
              ],
            },
          ],
        },

        {
          category: 'selling',
          header: 'How do I Set Return Policies on My Listings',
          title: 'Creating a Listing',
          subtitle: `How do I Set Return Policies on My Listings`,
          answers: [
            {
              firstLevel: [
                {
                  paragraphs: [
                    'Setting return policies on your listings clearly displays important information to your buyers, including:',
                  ],
                  list: [
                    'Which items from your shop can be returned or exchanged, if any',
                    'The time frame that you accept returns and exchanges',
                  ],
                },
                {
                  paragraphs: [
                    'You can set different return and exchange policies for each physical listing you sell in your Win-Win shop, or set one specific policy across all your physical listings. Buyers will see your return policies when viewing your listings. If you’re a seller outside of the EU, you must set a return policy whenever you edit or create a new listing for a physical item, even if it is to let buyers know you do not accept returns or exchanges on that listing.',
                    'If you want to set store-wide policies for things like your cancellation and privacy policies, you can do this through your shop policies',
                  ],
                },

                {
                  subtitle:
                    'How do I set return and exchange policies on my listings?',
                  paragraphs: [
                    'When creating or managing your listings, you have the option to create a new return policy, or to choose from one of your existing policies if you have any. We also have a simple policy template that you can choose instead of creating your own. You can also create and/or apply policies to multiple listings at once in Listings Manager.',
                    'To create a return and exchange policy through <strong>Policy settings:</strong>',
                  ],
                  numList: [
                    'Go to your <strong>Shop Manager</strong>.',
                    'Navigate to <strong>Settings</strong>.',
                    'Select <strong>Policy settings</strong>.',
                    'Navigate to <strong>Returns and exchanges</strong>.',
                    'Select the <strong>Create Policy</strong> button.',
                    'Choose whether you accept returns and/or exchanges for that item by selecting the checkmark next to each option.',
                    'Select the time frame that you’ll accept returns and exchanges for that item from the dropdown menu.',
                    'Select <strong>Save and apply</strong>.',
                    'Select <strong>Publish</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'If you’ve created at least one policy in the past, a suggestion to use the policy you’ve set the most on your active listings will be shown. Select <strong>Apply</strong>, or select <strong>Choose another policy</strong> to either pick from your other existing policies or create a new one.',
                    'Once a policy has been created, it can only be deleted if it is not associated with any of your active listings.',
                  ],
                },

                {
                  subtitle: 'How do I change a listing’s return policy?',
                  paragraphs: [
                    'To change the policy you currently have applied to a listing:',
                  ],
                  numList: [
                    'Go to your <strong>Shop Manager</strong>.',
                    'Select <strong>Listings</strong>.',
                    'Select the listing whose policy you want to change.',
                    'Navigate to <strong>Returns and exchanges</strong>.',
                    'Select the <strong>Change Policy</strong> button.',
                    'Select from one of your other existing policies. The listing’s current policy is displayed as <strong>Applied</strong>.',
                    'If you want to create a new policy instead, choose the <strong>Create Policy</strong> button.',
                  ],
                },

                {
                  subtitle: 'How do I use a simple return policy?',
                  paragraphs: [
                    'If you choose to use the simple return policy template, the following settings are applied to your listing:',
                  ],
                  list: [
                    'Buyers can return or exchange the item.',
                    'Buyers must return it within 30 days of delivery.',
                    'Buyers are responsible for any return shipping costs.*',
                    'Buyers are responsible for any loss in value (as agreed upon with you) if an item isn’t returned in its original condition.*',
                  ],
                },
                {
                  paragraphs: [
                    'Choose this option by selecting <strong>Apply simple policy</strong> in the listing editor. When you are satisfied with your listing, select <strong>Publish</strong>.',
                    '* These settings are standard on all returns and not specific to the simple return policy.',
                  ],
                },

                {
                  subtitle: 'Can digital downloads be returned?',
                  paragraphs: [
                    'It’s not possible to set return or exchange policies on your digital listings. If a buyer contacts you about an issue with a digital item they’ve purchased, you can still choose to resolve the issue as you see fit.',
                  ],
                },

                {
                  subtitle:
                    'How can I accept returns for items where customization is optional?',
                  paragraphs: [
                    'If you offer an item in your shop that a buyer can choose to either purchase as-is or to customize, but only want to accept returns for non-customized or personalized orders, you can let buyers know in the FAQ section of your shop. You can also mention this in the relevant listing descriptions.',
                    `To edit your shop's FAQ:`,
                  ],
                  numList: [
                    'Go to your <strong>Shop Manager</strong>',
                    'Select the pencil icon next to your shop name under <strong>Sales Channels</strong>.',
                    'Under Frequently asked questions, choose <strong>Add</strong> an <strong>FAQ</strong>.',
                    'Select <strong>Custom and personalized orders</strong> from the drop down.',
                    'In the <strong>Answers</strong> text box, specify that you do not accept returns of customized or personalized orders.',
                    'Select <strong>Save</strong>.',
                  ],
                },
                {
                  paragraphs: [
                    'You can also edit your Messages to Buyers to let shoppers know that you do not accept returns for customized or personalized items. <strong>Message to Buyers</strong> are included on order receipt pages and in the email buyers receive when they purchase from your shop.',
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
