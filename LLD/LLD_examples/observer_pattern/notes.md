# Observer Pattern - E-Commerce Stock Notification System (Complete Dry Run)

## Goal

When a product goes out of stock, users can subscribe for notifications.

When the product is restocked, all subscribed users are automatically notified.

This is a classic Observer Design Pattern.

---

# Step 1: Create Product (Observable)

```ts
const iphoneProduct =
  new IphoneProductObservable(
    "ip15",
    "iphone 15",
    1250,
    10
  );
```

### Constructor Executes

```ts
constructor(
  productId,
  productName,
  price,
  stockQuantity
)
```

### Initial State

```text
productId      = ip15
productName    = iphone 15
price          = 1250
stockQuantity  = 10
stockObservers = []
```

### Memory Diagram

iphoneProduct

```text
iphoneProduct
│
├── stockQuantity = 10
└── stockObservers = []
```

No subscribers yet.

---

# Step 2: Create Observer Objects

## John

```ts
const John_PUSH =
  new PushNotificationObserver(
      "John123",
      "JohnDeviceP1"
  );
```

```text
John_PUSH
│
├── userId = John123
└── deviceToken = JohnDeviceP1
```

---

## Katy

```ts
const Katy_PUSH =
  new PushNotificationObserver(
      "Katy678",
      "KatyDeviceP2"
  );
```

```text
Katy_PUSH
│
├── userId = Katy678
└── deviceToken = KatyDeviceP2
```

---

## Jane

```ts
const Jane_EMAIL =
  new EmailNotificationObserver(
      "Jane783",
      "jane783@gmail.com"
  );
```

```text
Jane_EMAIL
│
├── userId = Jane783
└── email = jane783@gmail.com
```

---

## George

```ts
const George_EMAIL =
  new EmailNotificationObserver(
      "George993",
      "george993@gmail.com"
  );
```

```text
George_EMAIL
│
├── userId = George993
└── email = george993@gmail.com
```

---

# Step 3: Purchase All Stock

```ts
iphoneProduct.purchase(10);
```

### Before

```text
stockQuantity = 10
```

### Check

```ts
if (stockQuantity >= quantity)
```

```text
10 >= 10
TRUE
```

### Execute

```ts
stockQuantity -= 10;
```

### After

```text
stockQuantity = 0
```

### Output

```text
PURCHASE SUCCESS
Remaining stock = 0
```

### Current State

```text
stockQuantity = 0
stockObservers = []
```

Product is now OUT OF STOCK.

---

# Step 4: Another User Tries To Buy

```ts
const success =
  iphoneProduct.purchase(1);
```

### Check

```text
0 >= 1
FALSE
```

### Output

```text
PURCHASE FAILED
iphone 15 is out of stock
```

### Return

```ts
false
```

So:

```ts
success = false;
```

---

# Step 5: Users Subscribe For Notifications

```ts
if (!success)
```

becomes

```ts
if (true)
```

Enter block.

---

## Add John

```ts
iphoneProduct.addStockObserver(
    John_PUSH
);
```

### State

```text
stockObservers =
[
  John_PUSH
]
```

---

## Add Katy

```ts
iphoneProduct.addStockObserver(
    Katy_PUSH
);
```

### State

```text
stockObservers =
[
  John_PUSH,
  Katy_PUSH
]
```

---

## Add Jane

```ts
iphoneProduct.addStockObserver(
    Jane_EMAIL
);
```

### State

```text
stockObservers =
[
  John_PUSH,
  Katy_PUSH,
  Jane_EMAIL
]
```

---

## Add George

```ts
iphoneProduct.addStockObserver(
    George_EMAIL
);
```

### State

```text
stockObservers =
[
  John_PUSH,
  Katy_PUSH,
  Jane_EMAIL,
  George_EMAIL
]
```

---

### Observable Now Looks Like

```text
iphoneProduct
│
├── stockQuantity = 0
│
└── stockObservers
     │
     ├── John_PUSH
     ├── Katy_PUSH
     ├── Jane_EMAIL
     └── George_EMAIL
```

---

# Step 6: Product Gets Restocked

```ts
iphoneProduct.restock(20);
```

### Before

```text
stockQuantity = 0
```

### Check

```ts
wasOutOfStock =
(stockQuantity == 0)
```

```text
wasOutOfStock = true
```

### Add Stock

```ts
stockQuantity += 20;
```

### After

```text
stockQuantity = 20
```

### Notification Condition

```ts
if (
  wasOutOfStock &&
  stockQuantity > 0
)
```

becomes

```text
true && true
```

Therefore:

```ts
notifyStockObservers();
```

is called.

---

# Step 7: Notification Flow

Current Subscribers:

```text
[
  John_PUSH,
  Katy_PUSH,
  Jane_EMAIL,
  George_EMAIL
]
```

Observable loops through all observers:

```ts
for(const observer of observers)
```

---

## Iteration 1

Observer:

```text
John_PUSH
```

Call:

```ts
observer.update();
```

Actual Object:

```text
PushNotificationObserver
```

Dynamic Dispatch:

```ts
PushNotificationObserver.update()
```

Calls:

```ts
sendPushNotification()
```

Output:

```text
PUSH SENT TO:
JohnDeviceP1
```

---

## Iteration 2

Observer:

```text
Katy_PUSH
```

Output:

```text
PUSH SENT TO:
KatyDeviceP2
```

---

## Iteration 3

Observer:

```text
Jane_EMAIL
```

Dynamic Dispatch:

```ts
EmailNotificationObserver.update()
```

Output:

```text
EMAIL SENT TO:
jane783@gmail.com
```

---

## Iteration 4

Observer:

```text
George_EMAIL
```

Output:

```text
EMAIL SENT TO:
george993@gmail.com
```

---

# Important Polymorphism Moment

Observable only knows:

```ts
StockNotificationObserver
```

It DOES NOT know:

```ts
PushNotificationObserver
EmailNotificationObserver
```

At runtime JavaScript/TypeScript decides which update() method to call.

This is Polymorphism.

---

# Step 8: John Purchases

```ts
iphoneProduct.purchase(1);
```

### Before

```text
stockQuantity = 20
```

### After

```text
stockQuantity = 19
```

---

# Step 9: Katy Purchases

```ts
iphoneProduct.purchase(1);
```

### Before

```text
stockQuantity = 19
```

### After

```text
stockQuantity = 18
```

---

# Step 10: John Unsubscribes

```ts
iphoneProduct.removeStockObserver(
  John_PUSH
);
```

### State

```text
[
  Katy_PUSH,
  Jane_EMAIL,
  George_EMAIL
]
```

---

# Step 11: Katy Unsubscribes

```ts
iphoneProduct.removeStockObserver(
  Katy_PUSH
);
```

### State

```text
[
  Jane_EMAIL,
  George_EMAIL
]
```

---

# Step 12: Remaining Stock Sold

```ts
iphoneProduct.purchase(18);
```

### Before

```text
stockQuantity = 18
```

### After

```text
stockQuantity = 0
```

---

### Current State

```text
stockQuantity = 0

stockObservers =
[
  Jane_EMAIL,
  George_EMAIL
]
```

---

# Step 13: Product Restocked Again

```ts
iphoneProduct.restock(5);
```

### Before

```text
stockQuantity = 0
```

### Check

```text
wasOutOfStock = true
```

### After

```text
stockQuantity = 5
```

### Notify

```ts
notifyStockObservers()
```

---

### Who Gets Notified?

```text
Jane_EMAIL
George_EMAIL
```

### Who Does NOT Get Notified?

```text
John_PUSH
Katy_PUSH
```

Reason:

```text
They unsubscribed earlier.
```

---

# Step 14: Jane Purchases

```ts
iphoneProduct.purchase(1);
```

### Before

```text
stockQuantity = 5
```

### After

```text
stockQuantity = 4
```

---

# Step 15: George Purchases

```ts
iphoneProduct.purchase(1);
```

### Before

```text
stockQuantity = 4
```

### After

```text
stockQuantity = 3
```

---

# Step 16: Jane Unsubscribes

```ts
iphoneProduct.removeStockObserver(
  Jane_EMAIL
);
```

### State

```text
[
  George_EMAIL
]
```

---

# Step 17: George Unsubscribes

```ts
iphoneProduct.removeStockObserver(
  George_EMAIL
);
```

### State

```text
[]
```

---

# Final State

```text
stockQuantity = 3

stockObservers = []
```

---

# Final Object Diagram

```text
iphoneProduct
│
├── stockQuantity = 3
│
└── stockObservers = []
```

---

# LLD Concepts Used

## 1. Composition

```text
IphoneProductObservable
        HAS-A
List<StockNotificationObserver>
```

```ts
private stockObservers:
    StockNotificationObserver[];
```

Observable owns and manages observers.

---

## 2. Abstraction

Observable depends on:

```ts
StockNotificationObserver
```

instead of concrete classes.

```ts
addStockObserver(
   observer:
   StockNotificationObserver
)
```

---

## 3. Polymorphism

Same call:

```ts
observer.update();
```

can execute:

```ts
PushNotificationObserver.update()
```

OR

```ts
EmailNotificationObserver.update()
```

depending on actual object type.

---

## 4. Observer Pattern Summary

```text
Observable
     │
     │ notify()
     ▼

Observer Interface
     ▲
     │
 ┌───┴───────┐
 │           │
Push      Email
Observer  Observer
```

Observable does not know WHO is listening.

Observers decide to:

```text
Subscribe
Unsubscribe
Receive Updates
```

This loose coupling is the core idea behind the Observer Design Pattern.
