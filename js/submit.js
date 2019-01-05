let request = new XMLHttpRequest();

let responseJson = () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.response);
    try {
      console.log(data);
      // console.log('Normal');
      // console.log(a);
      // console.log('Результат')
      if (!data.name) {
        throw new Error("В етих дынных нет имени");
      }
    } catch (e) {
      console.log(e.name);
      console.log(e.message);
      console.log(e.stack);

      console.log(`мы получили ошыбку: ${e.name}`);
    } finally {
      console.log('Я выполнюсь Всегда');
    }

    console.log('А я буду работать дальше');
  }
};

request.addEventListener("readystatechange", responseJson);

// request.open(method, url, async, login, password);
request.open('GET', 'https://js.dump.academy/kekstagram/data ');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

// status
// statusText
// responseText
// readyState