import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $BlogPostλShape = $.typeutil.flatten<_std.$Object_87d6bb27bdad11eca7dcbf5af1c46110λShape & {
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, true>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
}>;
declare type $BlogPost = $.ObjectType<"default::BlogPost", $BlogPostλShape, null>;
declare const $BlogPost: $BlogPost

declare const BlogPost: $.$expr_PathNode<$.TypeSet<$BlogPost, $.Cardinality.Many>, null, true> 



export { $BlogPost, BlogPost };

declare type __defaultExports = {
  "BlogPost": typeof BlogPost
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
