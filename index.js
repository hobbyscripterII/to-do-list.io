const todolist = document.getElementById('ol-todolist');

document.querySelector('#btn-save').addEventListener('click', function() {
    // 노드 제어를 통한 동적 요소 생성
    const newLi = document.createElement('li'); // todolist ul에 들어갈 새로운 요소 추가
    const newText = document.createTextNode(text.value); // newLi에 들어갈 새로운 텍스트 노드 추가
    
    const delBtn = document.createElement('button'); // newLi에 들어갈 새로운 요소 추가
    delBtn.classList.add('btn', 'btn-danger'); // 버튼에 클래스 추가(bootswatch 클래스)
    delBtn.id = 'btn-del'; // 해당 요소에 id 추가
    delBtn.type = 'button'; // 해당 요소에 type 추가
    delBtn.innerText = '삭제'; // text 추가
    
    const susBtn = document.createElement('button');
    susBtn.classList.add('btn', 'btn-success');
    susBtn.id = 'btn-sus';
    susBtn.type = 'button';
    susBtn.innerText = '완료';

    // appendChild는 하나의 자식만 가질 수 있지만 append는 여러 개의 자식을 가질 수 있다.
    newLi.append(newText, susBtn, delBtn); // li 태그와 button 태그를 같이 추가
    todolist.appendChild(newLi);
});

document.addEventListener('click', function(e) {
    if(e.target.id == 'btn-del') {
        const target = e.target.parentNode;
        const targetValue = target.innerText.replace('완료삭제', '');
        const parentNode = target.parentNode;

        if(confirm(`${targetValue}을(를) 삭제하시겠습니까?`)) {
            alert(`${targetValue}이 삭제되었습니다.`);
            parentNode.removeChild(target);
        } else {
            alert('삭제가 취소되었습니다.');
        }
    }

    if(e.target.id == 'btn-sus') {
        const newLi = document.createElement('li');
        const target = e.target.parentNode;
        const targetValue = target.innerText.replace('완료삭제', '');
        const newText = document.createTextNode(targetValue);
        newLi.appendChild(newText);
        
        const successTodolist = document.getElementById('ul-todolist-success');
        successTodolist.append(newLi);
        
        const parentNode = target.parentNode;
        parentNode.removeChild(target);
    }
});