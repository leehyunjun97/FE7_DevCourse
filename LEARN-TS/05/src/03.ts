{
  class Pair<T, U> {
    constructor(private first: T, private second: U) {}
    getFirst(): T {
      return this.first;
    }
    getSecond(): U {
      return this.second;
    }
  }

  const pairs = new Pair(10, 'a');
  const pairs2 = new Pair(10, 20);
  console.log(pairs.getFirst());
  console.log(pairs.getSecond());
}
{
  interface Repository<T> {
    add(item: T): void;
    get(id: number): T | undefined;
  }

  class InMemoeryRepository<T> implements Repository<T> {
    private items: T[] = [];
    add(item: T): void {
      this.items.push(item);
    }
    get(id: number): T | undefined {
      return this.items[id];
    }
  }

  interface User {
    id: number;
    name: string;
  }

  const userRepository = new InMemoeryRepository<User>();
  userRepository.add({ id: 1, name: 'kim' });
  console.log(userRepository.get(1));
}
