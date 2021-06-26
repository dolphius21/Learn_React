import React from 'react';

function getNotifications(notifications) {
  return <p>You have {notifications.length} new notifications</p>;
}

// sample usage (do not modify)
const notifications = [
  {
    id: 1,
    text: 'Your order has been delivered'
  },
  {
    id: 2,
    text: 'Your coupon code has expired'
  }
];
const element = getNotifications(notifications);
console.log(element);
