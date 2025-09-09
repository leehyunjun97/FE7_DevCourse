// 연습문제
{
  // 1.
  type Person = {
    name: string;
    age: number;
  };
  const getPersonInfo: (obj: Person) => Person = (obj) => {
    return obj;
  };

  console.log(getPersonInfo({ name: 'lee', age: 20 }));
}
{
  // 2.
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return { host, port, ssl };
  };

  const config = createConfig('localhost', 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}
{
  // 3.
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rec: Rectangle) => {
    return rec.width * rec.height;
  };

  console.log(calculateArea({ width: 30, height: 40 }));
}
{
  // 4.
  type Student = {
    name: string;
    age: number;
    grade: number[];
  };

  const calculateAverageGrade = (obj: Student) => {
    const total = obj.grade.reduce((acc, cur) => acc + cur, 0);
    return total / obj.grade.length;
  };

  console.log(
    calculateAverageGrade({ name: 'lee', age: 20, grade: [30, 40, 50, 60] })
  );
}
{
  // 5.
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    return { status, data, message };
  };

  console.log(createResponse('success', 'John', 'fetch success'));
  // { status: 'success', data: 'John', message: 'fetch success'
}
{
  // 6.
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (people: Employee): string => {
    return `${people.name} works as a ${people.position} width ID: ${people.id}.`;
  };

  console.log(
    getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })
  );
  // "james works as a developer with ID: 1."
}
{
  // 7.
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (cir: Circle): number => {
    return cir.radius * 2 * 3.14;
  };

  console.log(calculateCircumference({ radius: 3 }));
  // 18.84955592153876
}
{
  // 8.
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, sale: number): number => {
    return product.price - product.price / sale;
  };

  console.log(
    getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)
  );
  // 900
}
{
  // 9.
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (book: Book): string => {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  };

  console.log(
    getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })
  );
  // "river by james, published in 2020."
}
{
  // 10.
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (tran: Transaction): boolean => {
    return tran.amount > 0;
  };

  console.log(isValidTransaction({ id: '1', amount: 1000, timestamp: '0909' }));
}
