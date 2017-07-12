import { Selector } from 'testcafe';

fixture(`Index page`)
  .page('http://localhost:3000');

test('Page should have Sidebar with title Home"', async testController => {

  const sidebar = await new Selector('body #sidebar');

  console.log(sidebar.find('h3').innerText)
  await testController.expect(sidebar.find('h3').innerText).eql('Home');
});