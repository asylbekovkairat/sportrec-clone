## Description

There are usually placed:

- business entities, for building the business logic of the application
    > *For example: `user`, `order`, `post`, `journal`, `navigation`, ...*
- components with the representation of entities, for building the UI of the overlying layers
    > *For example: `UserCard`, `TweetCard`, ...*

## Can use
`shared`

## Structure

```sh
└── entities/{slice}
          ├── lib/
          ├── model/
          ├── ui/
          └── index.tsx
```

## Examples

### Using the Entity Model

```tsx title=**/**/index.tsx
import { viewerModel } from "entities/user";

export const Wallet = () => {
    const user = viewerModel.useUser();
    const { moneyCount } = user;
    
    ...
}
```

### Using Entity components

```ts title=entities/book/index.tsx
export { BookCard, ... } from "./ui";
export * as bookModel from "./model";
```

```tsx title=pages/**/index.tsx
import { BookCard } from "entities/book";

export const CatalogPage = () => {
    const bookQuery = ...;
    return (
        ...
        {bookQuery.map((book) => (
            <BookCard key={book.id} data={book} />
        ))}
        ...
    )
}
```