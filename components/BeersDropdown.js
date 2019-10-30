import { beersArray } from "../store"

function buildOptionTags(array) {
  console.log({ array, beersArray})
  return array.map(value => `<option value="${value}">${value}</option>`)
}

export default `
  <label for="select-style">Style:</label>
  <select id="beer-list">
    <option value="">--Choose a Beer Style--</option>
    ${buildOptionTags(beersArray)}
  </select>
`;

