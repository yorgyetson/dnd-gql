# GraphQL Codegen Demo

This is a simple example of using graphql-codegen to autogenerate queries to the [5e-srd-api](https://github.com/5e-bits/5e-srd-api) api.

### `git clone https://github.com/yorgyetson/dnd-gql.git`

### `cd dnd-gql`

### `npm i`

### `npmx graphql-codegen`
This generates the types in src/generated/graphql.tsx

### `npm start`

# Simple Query (/alignments)

```gql
query Alignments {
  alignments {
    name
    desc
  }
}
```

# Nested Query (/races)

```gql
query Races {
  races {
    name
    size
    speed
    languages {
      name
    }
    subraces {
      name
      desc
    }
  }
}
```

# Adding additional queries

You can add additional queries to the `src/queries` folder. You can put more than one query inside of a single `.graphql` file.

After you have updated your queries, you'll need to run `npmx graphql-codegen` to regenerate the types!
