import { IphoneProductObservable } from "./observable/IphoneProductObservable";
import { StockAvailabilityObservable } from "./observable/StockAvailabilityObservable";
import { EmailNotificationObserver } from "./observer/EmailNotificationObserver";
import { PushNotificationObserver } from "./observer/PushNotificationObserver";
import { StockNotificationObserver } from "./observer/StockNotificationObserver";


console.log(
  "--------------------------------------------------------------------"
);

console.log(
  "###### E-commerce Store - Stock Availability Notification Feature Demo ######"
);

const iphoneProduct: StockAvailabilityObservable =
  new IphoneProductObservable("ip15", "iphone 15", 1250, 10);

const John_PUSH: StockNotificationObserver =
  new PushNotificationObserver("John123", "JohnDeviceP1");

const Katy_PUSH: StockNotificationObserver =
  new PushNotificationObserver("Katy678", "KatyDeviceP2");

const Jane_EMAIL: StockNotificationObserver =
  new EmailNotificationObserver("Jane783", "jane783@gmail.com");

const George_EMAIL: StockNotificationObserver =
  new EmailNotificationObserver("George993", "george993@gmail.com");

iphoneProduct.purchase(10);

const success = iphoneProduct.purchase(1);

if (!success) {
  iphoneProduct.addStockObserver(John_PUSH);

  iphoneProduct.addStockObserver(Katy_PUSH);

  iphoneProduct.addStockObserver(Jane_EMAIL);

  iphoneProduct.addStockObserver(George_EMAIL);
}

iphoneProduct.restock(20);

iphoneProduct.purchase(1);

iphoneProduct.purchase(1);

iphoneProduct.removeStockObserver(John_PUSH);

iphoneProduct.removeStockObserver(Katy_PUSH);

iphoneProduct.purchase(18);

iphoneProduct.restock(5);

iphoneProduct.purchase(1);

iphoneProduct.purchase(1);

iphoneProduct.removeStockObserver(Jane_EMAIL);

iphoneProduct.removeStockObserver(George_EMAIL);
