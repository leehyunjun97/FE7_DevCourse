// 연습문제
{
  const enum Weekday {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Weekday): string {
    if (day === Weekday.MONDAY) return 'Monday';
    if (day === Weekday.TUESDAY) return 'Tuesday';
    if (day === Weekday.WEDNESDAY) return 'Wednesday';
    if (day === Weekday.THURSDAY) return 'Thursday';
    if (day === Weekday.FRIDAY) return 'Friday';
    if (day === Weekday.SATURDAY) return 'Saturday';
    if (day === Weekday.SUNDAY) return 'Sunday';
    return 'Invalid day';
  }

  console.log(getDayName(Weekday.FRIDAY));
}
{
  // 2.
  const enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    if (status === Status.SUCCESS) return 'Success';
    if (status === Status.NOT_FOUND) return 'Not Found';
    if (status === Status.INTERNAL_ERROR) return 'Internal Server Error';
    return 'Unknown Status';
  }

  console.log(getStatusMessage(404));
}
{
  // 3.
  const enum City {
    SEOUL = 'Seoul',
    BUSAN = 'Busan',
    DAEGU = 'Daegu',
  }

  function getCityByZip(zip: string): string {
    if (zip === '100') return City.SEOUL;
    if (zip === '200') return City.BUSAN;
    if (zip === '300') return City.DAEGU;
    return 'Unknown City';
  }

  console.log(getCityByZip('100'));
}
{
  // 4.
  const enum Permission {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
  }

  function getPermissionLevel(role: string): string {
    if (role === Permission.ADMIN) return 'Full access';
    if (role === Permission.USER) return 'Limited access';
    if (role === Permission.GUEST) return 'Guest access';
    return 'No access';
  }

  console.log(getPermissionLevel('admin'));
}
{
  // 5.
  const enum ProductStatus {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: ProductStatus): string {
    if (status === ProductStatus.PENDING) return 'Pending';
    if (status === ProductStatus.SHIPPED) return 'Shipped';
    if (status === ProductStatus.DELIVERED) return 'Delivered';
    return 'Unknown Status';
  }

  console.log(getProductStatus(ProductStatus.SHIPPED));
}
{
  // 6.
  const enum OrderStatus {
    ORDER_PLACED = 'Order Placed',
    PAYMENT_PENDING = 'Payment Pending',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
  }

  function getOrderStatus(status: OrderStatus): string {
    if (status === OrderStatus.ORDER_PLACED)
      return 'Your order has been placed.';
    if (status === OrderStatus.PAYMENT_PENDING) return 'Payment is pending.';
    if (status === OrderStatus.SHIPPED) return 'Your order has been shipped.';
    if (status === OrderStatus.DELIVERED)
      return 'Your order has been delivered.';
    return 'Unknown Status';
  }

  console.log(getOrderStatus(OrderStatus.DELIVERED));
}
{
  // 7.
  const enum ActiveStatus {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: ActiveStatus): boolean {
    if (status === ActiveStatus.IS_ACTIVE) {
      return !!ActiveStatus.IS_INACTIVE;
    } else {
      return !!ActiveStatus.IS_ACTIVE;
    }
  }

  console.log(toggleStatus(ActiveStatus.IS_ACTIVE));
}
{
  // 8.
  const enum Option {
    OPTION_ONE = 'Option 1',
    OPTION_TWO = 'Option 2',
    OPTION_THREE = 'Option 3',
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return 'You selected Option 1.';
    if (option === Option.OPTION_TWO) return 'You selected Option 2.';
    if (option === Option.OPTION_THREE) return 'You selected Option 3.';
    return 'Invalid option';
  }

  console.log(getOptionValue(Option.OPTION_ONE));
}
{
  // 9.
  const enum MealTime {
    BREAKFAST = 'Breakfast',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
  }

  function getMealTime(meal: MealTime): string {
    if (meal === MealTime.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
    return 'Invalid meal time';
  }
  console.log(getMealTime(MealTime.DINNER));
}
{
  // 10.
  const enum LoginStatus {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: boolean): string {
    if (status === !!LoginStatus.LOGGED_IN) return 'You are logged in.';
    if (status === !!LoginStatus.LOGGED_OUT) return 'You are logged out.';
    return 'Unknown status';
  }

  console.log(checkLoginStatus(true));
}
{
  const LoginStatus = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
  } as const;

  type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];
}
