import {
  GraphQLInputType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLNullableType,
  GraphQLOutputType,
  GraphQLType,
} from 'graphql/type';

export const unwrapType = (node: GraphQLInputType | GraphQLOutputType) => {
  let leftWrap = '';
  let rightWrap = '';
  let namedType = node as GraphQLNamedType;
  const unwrapper = (node: GraphQLType) => {
    const nodeType = node[Symbol.toStringTag];
    switch (nodeType) {
      case 'GraphQLNonNull':
        rightWrap = `!${rightWrap}`;
        unwrapper((node as GraphQLNonNull<GraphQLNullableType>).ofType);
        break;
      case 'GraphQLList':
        leftWrap = `${leftWrap}[`;
        rightWrap = `]${rightWrap}`;
        unwrapper((node as GraphQLList<GraphQLType>).ofType);
        break;
      default:
        namedType = node as GraphQLNamedType;
    }
    return;
  };
  unwrapper(node);
  return { leftWrap, namedType, rightWrap };
};
