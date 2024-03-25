type Foo = {
  bar: string | null;
};

export const TestComponent = (props: { invite?: Foo["bar"] }) => <p>hi</p>;
