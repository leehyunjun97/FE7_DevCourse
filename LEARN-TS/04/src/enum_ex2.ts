// 연습문제 +
{
  // 1.
  const enum UserStatus {
    UNVERIFIED = 'UNVERIFIED',
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED',
  }

  function getUserStatus(status: UserStatus): string {
    if (status === UserStatus.UNVERIFIED) return 'User is unverified';
    if (status === UserStatus.PENDING) return 'User verification is pending';
    if (status === UserStatus.VERIFIED) return 'User is verified';
    return 'Unknown status';
  }

  console.log(getUserStatus(UserStatus.VERIFIED));
}
{
  // 2.
  const enum OrderState {
    INITIATED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: number): string {
    if (state === OrderState.INITIATED) return 'Order initiated';
    if (state === OrderState.PROCESSING) return 'Order being processed';
    if (state === OrderState.SHIPPED) return 'Order shipped';
    if (state === OrderState.DELIVERED) return 'Order delivered';
    if (state === OrderState.CANCELLED) return 'Order cancelled';
    return 'Unknown state';
  }

  console.log(getOrderState(3));
}
{
  // 3.
  const enum UserLevel {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    EXPERT = 'EXPERT',
  }

  function getUserLevel(level: UserLevel): string {
    if (level === UserLevel.BEGINNER) return 'Beginner user';
    if (level === UserLevel.INTERMEDIATE) return 'Intermediate user';
    if (level === UserLevel.EXPERT) return 'Expert user';
    return 'Unknown level';
  }

  console.log(getUserLevel(UserLevel.EXPERT));
}
{
  // 4.
  const enum PaymentStatus {
    NOT_STARTED = 0,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: PaymentStatus): string {
    if (status === PaymentStatus.NOT_STARTED) return 'Payment not started';
    if (status === PaymentStatus.IN_PROGRESS) return 'Payment in progress';
    if (status === PaymentStatus.COMPLETED) return 'Payment completed';
    if (status === PaymentStatus.FAILED) return 'Payment failed';
    return 'Unknown status';
  }

  console.log(getPaymentStatus(PaymentStatus.IN_PROGRESS));
}
{
  // 5.
  const enum SignupStep {
    STEP_ONE = 'STEP_ONE',
    STEP_TWO = 'STEP_TWO',
    STEP_THREE = 'STEP_THREE',
  }

  function getSignupStep(step: SignupStep): string {
    if (step === SignupStep.STEP_ONE) return 'Step 1: Enter details';
    if (step === SignupStep.STEP_TWO) return 'Step 2: Confirm email';
    if (step === SignupStep.STEP_THREE) return 'Step 3: Complete registration';
    return 'Unknown step';
  }

  console.log(getSignupStep(SignupStep.STEP_THREE));
}
{
  // 6.
  const enum CarType {
    SEDAN = 'SEDAN',
    SUV = 'SUV',
    TRUCK = 'TRUCK',
  }

  function getPriceByCarType(type: CarType): number {
    if (type === CarType.SEDAN) return 30000;
    if (type === CarType.SUV) return 40000;
    if (type === CarType.TRUCK) return 50000;
    return 0;
  }

  console.log(getPriceByCarType(CarType.SUV));
}
{
  // 7.
  const enum MessageType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    FILE = 'FILE',
  }

  function getMessageType(type: MessageType): string {
    if (type === MessageType.TEXT) return 'Text message';
    if (type === MessageType.IMAGE) return 'Image message';
    if (type === MessageType.VIDEO) return 'Video message';
    if (type === MessageType.FILE) return 'File message';
    return 'Unknown message type';
  }

  console.log(getMessageType(MessageType.IMAGE));
}
{
  // 8.
  const enum logMessageType {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
  }

  function logMessage(level: logMessageType, message: string): void {
    if (level === logMessageType.INFO) console.log('INFO: ' + message);
    if (level === logMessageType.WARN) console.warn('WARN: ' + message);
    if (level === logMessageType.ERROR) console.error('ERROR: ' + message);
    if (level === logMessageType.DEBUG) console.debug('DEBUG: ' + message);
  }

  console.log(logMessage(logMessageType.ERROR, '에러'));
}
{
  // 9.
  const enum DayType {
    WEEKDAY = 'WEEKDAY',
    WEEKEND = 'WEEKEND',
  }

  function getDayType(day: DayType): string {
    if (day === DayType.WEEKDAY) return "It's a weekday";
    if (day === DayType.WEEKEND) return "It's a weekend";
    return 'Unknown day type';
  }

  console.log(getDayType(DayType.WEEKDAY));
}
{
  // 10.
  const enum CampaignType {
    DISCOUNT = 'DISCOUNT',
    PROMOTION = 'PROMOTION',
    GIVEAWAY = 'GIVEAWAY',
  }

  function getCampaignType(type: CampaignType): string {
    if (type === CampaignType.DISCOUNT) return 'Discount campaign';
    if (type === CampaignType.PROMOTION) return 'Promotion campaign';
    if (type === CampaignType.GIVEAWAY) return 'Giveaway campaign';
    return 'Unknown campaign type';
  }

  console.log(getCampaignType(CampaignType.GIVEAWAY));
}
