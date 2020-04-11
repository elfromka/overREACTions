import gpl from "graphql-tag";

export const GET_POKEMONS = gpl`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;
