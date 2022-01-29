var navlist = new Vue({
    el: '#navbar',
    data: {
      items: [
        { text: 'About', link: ''},
        { text: 'Work', link: ''},
        { text: 'Contact', link: ''}
      ]
    }
  })

function asyncSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function print_text(print_into, text, delay) {
    $(print_into).html("");
    for (var char of text) {
        await asyncSleep(delay);
        $(print_into).append(char);
    }
}
(async function init_hello(){
  await asyncSleep(1000);
  print_text("#hello", "Hello, I'm Anh", 100);
})();
