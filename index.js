let arr = [];
const todolist = document.getElementById('div-todolist');

document.querySelector('#btn-save').addEventListener('click', function() {
    // 노드 제어를 통한 동적 요소 생성
    const newLi = document.createElement('li');
    const newText = document.createTextNode(text.value);
    console.log(newText);
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn', 'btn-danger');
    newBtn.id = 'btn-del'; // 해당 요소에 id 추가
    newBtn.type = 'button'; // 해당 요소에 type 추가
    newBtn.innerText = '삭제'; // text 추가

    // appendChild는 하나의 자식만 가질 수 있지만 append는 여러 개의 자식을 가질 수 있다.
    newLi.append(newText, newBtn); // li 태그와 button 태그를 같이 추가
    todolist.appendChild(newLi);

    arr.push(text.value);
});

document.addEventListener('click', function(e) {
    if(e.target && e.target.id == 'btn-del') {
        console.log(e);
        if(confirm('할 일을 삭제하시겠습니까?')) {
            alert('할 일이 삭제되었습니다.');
        } else {
            alert('삭제가 취소되었습니다.');
        }
    }
});