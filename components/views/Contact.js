export default () => `
    <form action="#" method="POST" data-netlify="true">
      <div class="flex-container--desktop flex-row--desktop">
        <div>
          <label for="name" class="ContactLabel">Name:</label>
          <input type="text" name="name" id="name">
        </div>
        <div>
          <label for="email" class="ContactLabel">Email:</label>
          <input type="email" name="email" id="email">
        </div>
      </div>
      <div>
        <label for="msg" class="ContactLabel">Enter your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
      </div>
      <input type="submit" value="Submit">
    </form>
  `

