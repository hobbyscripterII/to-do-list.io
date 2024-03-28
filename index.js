let arr = [];
const todolist = document.getElementById('div-todolist');


document.querySelector('#saveIcon').addEventListener('click', function() {
    const form = null;

    const newLi = document.createElement('li');
    const newText = document.createTextNode(text.value);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn', 'btn-danger');
    newBtn.id = 'delBtn'; // 해당 요소에 id 추가
    newBtn.type = 'button'; // 해당 요소에 type 추가
    newBtn.innerText = '삭제'; // text 추가

    // <button class="btn btn-danger" id="delBtn" type="button"></button>
    console.log(newBtn);

    newLi.append(newText, newBtn);
    todolist.appendChild(newLi);
    arr.push(text.value);
});

// document.querySelector('#delBtn').addEventListener('click', function() {
//     if(confirm('해당 할 일을 삭제하시겠습니까?')) {
//         alert('삭제가 완료되었습니다.');
//     } else {
//         alert('삭제가 취소되었습니다.');
//     }
// });