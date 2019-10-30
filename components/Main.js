import * as views from "./views";

export default (st)=> {

return `<main>
  ${views[st.view](st)}
</main>
`;
}
